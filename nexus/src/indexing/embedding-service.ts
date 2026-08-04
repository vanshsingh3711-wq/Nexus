import { GoogleGenAI } from "@google/genai";
import { createBatches } from "./chunkBatches";


const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY!,
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
    
    const embeddedChunks: EmbeddedChunk[] = [];

  
    for (const chunk of chunks) { 
        const response = await ai.models.embedContent({
            model: "text-embedding-004", 
            
            contents: chunk.content, 
        });

      
        if (response.embeddings && response.embeddings.length > 0) {
            embeddedChunks.push({
                ...chunk, // Spread the singular 'chunk'
                embedding: response.embeddings[0].values!
            });
        }
    }

    return embeddedChunks; 
}
