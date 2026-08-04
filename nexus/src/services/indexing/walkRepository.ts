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

    const files: string[] = [];

    const entries = await readdir(directoryPath, {
        withFileTypes: true,
    });
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