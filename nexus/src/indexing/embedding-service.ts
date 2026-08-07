
import OpenAI from "openai";


console.log(process.env.GEMINI_API_KEY);



const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY!,
});


export interface RepositoryChunk {
    path: string;
    content: string;
    chunkIndex: number;
    language: string;
}

export interface EmbeddedChunk extends RepositoryChunk {
    embedding: number[];
}

export async function createEmbeddings(
    chunks: RepositoryChunk[]
): Promise<EmbeddedChunk[]> {
    console.log("Chunks to embed:", chunks.length);
    const embeddedChunks: EmbeddedChunk[] = [];

    if (!process.env.OPENAI_API_KEY) {
        throw new Error(
            "OPENAI_API_KEY is not defined in process.env. Please restart your Next.js dev server ('npm run dev')."
        );
    }

    // Process in batches of 50 chunks for fast indexing without hitting rate limits
    const BATCH_SIZE = 50;

    for (let i = 0; i < chunks.length; i += BATCH_SIZE) {
        const batch = chunks.slice(i, i + BATCH_SIZE);
        
        // Filter out empty chunks
        const validBatch = batch.filter(
            (c) => c.content && c.content.trim().length > 0
        );

        if (validBatch.length === 0) continue;

        const currentBatchNum = Math.floor(i / BATCH_SIZE) + 1;
        const totalBatches = Math.ceil(chunks.length / BATCH_SIZE);
        console.log(`Embedding batch ${currentBatchNum}/${totalBatches} (${validBatch.length} items)`);

        try {
            const response = await openai.embeddings.create({
                model: "text-embedding-3-small",
                // Truncate content to safe limit to avoid OpenAI's max token limit (8191 tokens)
                input: validBatch.map((c) => c.content.slice(0, 25000)),
            });

            response.data.forEach((item, idx) => {
                embeddedChunks.push({
                    ...validBatch[idx],
                    embedding: item.embedding,
                });
            });
        } catch (error) {
            console.error(`Failed batch ${currentBatchNum}:`, error);
            throw error;
        }
    }

    return embeddedChunks;
}

