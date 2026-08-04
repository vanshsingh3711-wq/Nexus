import { prisma } from "@/lib/prisma";
import { createEmbeddings } from "./embedding-service";

type EmbeddedChunk = {
  path: string;
  content: string;
  chunkIndex: number;
  language: string;
  embedding: number[];
};






export async function storeEmbeddings(
  repositoryId: string,
  chunks: EmbeddedChunk[]
) {
  const queries = chunks.map((chunk) => {
    const vector = `[${chunk.embedding.join(",")}]`;

    return prisma.$executeRaw`
      INSERT INTO "CodeChunk"
      (
        "repositoryId",
        "path",
        "content",
        "chunkIndex",
        "language",
        "embedding"
      )
      VALUES
      (
        ${repositoryId},
        ${chunk.path},
        ${chunk.content},
        ${chunk.chunkIndex},
        ${chunk.language},
        ${vector}::vector
      )
    `;
  });

  await prisma.$transaction(queries);
}
        
