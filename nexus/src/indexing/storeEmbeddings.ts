import { pool } from "@/lib/postgres";
import { createId } from "@paralleldrive/cuid2";

type EmbeddedChunk = {
  path: string;
  content: string;
  chunkIndex: number;
  language: string;
  embedding: number[];
};

const BATCH_SIZE = 50;

export async function storeEmbeddings(
  repositoryId: string,
  chunks: EmbeddedChunk[]
) {
  const client = await pool.connect();

  try {
    for (let i = 0; i < chunks.length; i += BATCH_SIZE) {
      const batch = chunks.slice(i, i + BATCH_SIZE);

      const values: any[] = [];
      const placeholders: string[] = [];
      batch.forEach((chunk, index) => {
        const id = createId();
        const offset = index * 7;

        placeholders.push(
          `($${offset + 1},
            $${offset + 2},
            $${offset + 3},
            $${offset + 4},
            $${offset + 5},
            $${offset + 6},
            $${offset + 7}::vector)`
        );

        values.push(
          id,
          repositoryId,
          chunk.path,
          chunk.content,
          chunk.chunkIndex,
          chunk.language,
          `[${chunk.embedding.join(",")}]`
        );
      });

      await client.query(
        `
        INSERT INTO "CodeChunk"
        (
          "id", 
          "repositoryId",
          "path",
          "content",
          "chunkIndex",
          "language",
          "embedding"
        )
        VALUES
        ${placeholders.join(",")}
        `,
        values
      );

      console.log(
        `Stored ${Math.min(i + BATCH_SIZE, chunks.length)}/${chunks.length}`
      );
    }
  } finally {
    client.release();
  }
}