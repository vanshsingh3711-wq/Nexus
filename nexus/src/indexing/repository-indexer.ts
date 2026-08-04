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
  const cloneUrl = `https://github.com/${repository.owner}/${repository.name}.git`;

  let clonePath: string | undefined;

  try {
    // Clone repository
    clonePath = await cloneRepository(cloneUrl);

    await updateProgress(jobId, 10, "Repository cloned");

    // Scan files
    const files = await walkRepository(clonePath);

    await updateProgress(jobId, 25, "Scanning repository");

    // Read documents
    const documents = await readRepository(files);

    await updateProgress(jobId, 45, "Reading documents");

    // Chunk documents
    const chunks = await chunkRepository(documents);

    await updateProgress(jobId, 65, "Chunking documents");

    // Generate embeddings
    const embeddings = await createEmbeddings(chunks);

    await updateProgress(jobId, 75, "Generating embeddings");

    // Store embeddings
    await storeEmbeddings(repository.id, embeddings);

    await updateProgress(jobId, 90, "Storing embeddings");

    // Finish job
    await markCompleted(jobId);

    return {
      files,
      documents,
      chunks,
    };
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unknown error";

    await markFailed(jobId, message);

    throw error;
  } finally {
    if (clonePath) {
      await fs.rm(clonePath, {
        recursive: true,
        force: true,
      });
    }
  }
}