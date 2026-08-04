import { cloneRepository } from "./cloneRepository";
import { prisma } from "@/lib/prisma";
import { walkRepository } from "./walkRepository";
import fs from "fs/promises";
import { readRepository } from "./readDocuments";
import { chunkRepository } from "./chunkDocuments";


export async function indexRepository(repositoryId: string) {

    const repository = await prisma.repository.findUnique(
        {
            where: {
                id: repositoryId
            }
        }
    )
    if (!repository) {
        throw new Error(`Failed to index: Repository with ID ${repositoryId} not found in database.`);
    }

    const cloneUrl = `https://github.com/${repository.owner}/${repository.name}.git`;

    const clonePath = await cloneRepository(cloneUrl);

    try {
        const files = await walkRepository(clonePath);
        const documents = await readRepository(files);
        const chunk = await chunkRepository(documents)
        return { files, documents , chunk }

    }
    catch (error) {
        console.error("Critical error during repository indexing:", error);
        throw error;
    }
    finally {
        if (clonePath) {
            await fs.rm(clonePath, { recursive: true, force: true });
        }



    }





}