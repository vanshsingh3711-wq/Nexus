import fs from "fs/promises";

import { Repository } from "@/generated/prisma/client";
import { updateProgress, markCompleted, markFailed } from "@/services/index-job-service";

import { cloneRepository } from "./cloneRepository";
import { walkRepository } from "./walkRepository";
import { readRepository } from "./readDocuments";
import { chunkRepository } from "./chunkDocuments";
import { createEmbeddings } from "./embedding-service";
import { storeEmbeddings } from "./storeEmbeddings";

export async function indexRepository(
  repository: Repository,
  jobId: string
) {
  console.log("repository-indexer.ts loaded");
  console.log("🚀 Indexing started:", repository.name);


  const cloneUrl = `https://github.com/${repository.owner}/${repository.name}.git`;


  let clonePath: string | undefined;
  console.log("Repository passed to indexRepository:");
console.log(repository);
console.log("repository.id =", repository.id);

  try {
   console.log("1 Clone");
clonePath = await cloneRepository(cloneUrl);

console.log("2 Walk");
const files = await walkRepository(clonePath);


console.log("Files found:", files.length);
console.log(files.slice(0, 5));

console.log("3 Read");

console.log("3 Read");
const documents = await readRepository(files);



console.log("Documents read:", documents.length);
console.log(documents[0]);

console.log("4 Chunk");
const chunks = await chunkRepository(documents);

console.log("5 Embed");
const embeddings = await createEmbeddings(chunks);

console.log("6 Store");
await storeEmbeddings(repository.id, embeddings);

console.log("7 Complete");
await markCompleted(jobId, repository.id);

    return {
      files,
      documents,
      chunks,
    };
  }
  
  catch (error) {
  console.log("Repository inside catch:");
  console.log(repository);
  console.log("repository.id =", repository.id);

  const message =
    error instanceof Error ? error.message : "Unknown error";

    console.log("markFailed()");
console.log("job:", jobId);
console.log("repository.id:", repository.id);

  await markFailed(jobId, message, repository.id);

  throw error;
}

finally {
    if (clonePath) {
      await fs.rm(clonePath, {
        recursive: true,
        force: true,
      });
    }
  }
}