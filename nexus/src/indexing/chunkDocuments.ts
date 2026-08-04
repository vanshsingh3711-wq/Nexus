import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";

export type DocumentChunk = {
  path: string;
  content: string;
  chunkIndex: number;
  language: string;
};

const LANGUAGE_MAP: Record<string, any> = {
  ".ts": "js",
  ".tsx": "js",
  ".js": "js",
  ".jsx": "js",
  ".py": "python",
  ".go": "go",
  ".java": "java",
  ".rs": "rust",
  ".md": "markdown",
  ".html": "html",
};


export async function chunkRepository(
    items: { path: string; content: string }[]
): Promise<DocumentChunk[]> {
    
    const chunkFile: DocumentChunk[] = [];

    try {
        for (const item of items) {
            
            const extension = "." + item.path.split('.').pop()?.toLowerCase();
            
         
            const lang = LANGUAGE_MAP[extension];

           
            let currentSplitter;
            if (lang) {
                
                currentSplitter = RecursiveCharacterTextSplitter.fromLanguage(lang, {
                    chunkSize: 1200,
                    chunkOverlap: 200,
                });
            } else {
                // Fallback to standard text splitting for unknown file types
                currentSplitter = new RecursiveCharacterTextSplitter({
                    chunkSize: 1200,
                    chunkOverlap: 200,
                });
            }

            // 4. Actually split the content into an array of strings
            const splits = await currentSplitter.splitText(item.content);

            // 5. Map the raw strings into your DocumentChunk format
            for (let i = 0; i < splits.length; i++) {
                chunkFile.push({
                    path: item.path,
                    content: splits[i],
                    chunkIndex: i, // Keep track of the order of chunks
                    language: lang || "plaintext",
                });
            }
        }

        
        return chunkFile; 

    } catch (error) {
        console.error('Failed to chunk the file:', error);
        // Return an empty array on error so it doesn't crash the whole indexer
        return []; 
    }
}