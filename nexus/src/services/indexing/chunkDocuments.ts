import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";


type DocumentChunk = {
  
  path: string;
  content: string;
  chunkIndex: number;
  language: string;

};
const LANGUAGE_MAP = {
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

const splitter = RecursiveCharacterTextSplitter.fromLanguage( "js",{
    chunkSize: 1200,
    chunkOverlap:200
})

export  function chunkRepository(items:{path:string, content:string}[]){
    const chunkFile =[]

    try{
        

    }catch(error){
        console.error('Failed to chunk the file');
    }


}