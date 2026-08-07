import OpenAI from "openai";
import { pool } from "@/lib/postgres";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});


export async function retrieveRelevantChunks(userQuery: string, repositoryId: string) {


    const response = await openai.embeddings.create({
        model: "text-embedding-3-small",
        input: userQuery,
    });

    const queryEmbedding = response.data[0].embedding;

    // Get chunks from the database
    const vector = `[${queryEmbedding.join(",")}]`;

    const { rows: chunks } = await pool.query(
        `
    SELECT
      path,
      content,
      "chunkIndex",
      language
    FROM "CodeChunk"
    WHERE "repositoryId" = $1
    ORDER BY embedding <=> $2::vector
    LIMIT 10;
    `,
        [
            repositoryId,
            vector,
        ]
    );

    return chunks;


}