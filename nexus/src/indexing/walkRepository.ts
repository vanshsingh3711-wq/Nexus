import { readdir } from "fs/promises";
import path from "path";

const IGNORED_DIRECTORIES = new Set([
    ".git",
    "node_modules",
    ".next",
    "dist",
    "build",
]);
export async function walkRepository(directoryPath: string): Promise<string[]> {
   console.log("Walking:", directoryPath);
    const files: string[] = [];

    const entries = await readdir(directoryPath, {
        withFileTypes: true,
    });

        console.log("Entries:", entries.map(e => ({
        name: e.name,
        dir: e.isDirectory(),
        file: e.isFile(),
    })));



    for (const entry of entries) {
        if (
            entry.isDirectory() &&
            IGNORED_DIRECTORIES.has(entry.name)
        ) {
            continue;
        }

        const fullPath = path.join(directoryPath, entry.name);

        
        if (entry.isDirectory()) {
            const nestedFiles = await walkRepository(fullPath);
            files.push(...nestedFiles)


        } else if (entry.isFile()) {
            files.push(fullPath)

        }
    }


    return files
}