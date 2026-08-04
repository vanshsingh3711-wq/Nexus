import fs from "fs/promises";
import path from "path";
const ALLOWED_EXTENSIONS = new Set([
    ".ts",
    ".tsx",
    ".js",
    ".jsx",
    ".json",
    ".md",
    ".mdx",
    ".css",
    ".scss",
    ".html",
    ".py",
    ".java",
    ".go",
    ".rs",
    ".sql",
    ".yaml",
    ".yml",
]);
const IGNORED_FILES = new Set([
    ".env",
    ".env.local",
    ".env.production",
    ".env.development",
    "id_rsa",
    ".env.test",
    ".env.staging",
    ".env.example",
    "private.key",
    "server.pem"

]);
export async function readRepository(filePaths: string[]) {
    const documents: {
        path: string;
        content: string;
    }[] = [];

    for (const filePath of filePaths) {
        try {
            const extension = path.extname(filePath)

            if (!ALLOWED_EXTENSIONS.has(extension)) {
                continue;
            }
            if (IGNORED_FILES.has(path.basename(filePath))) {
                continue;
            }
            const content = await fs.readFile(filePath, "utf-8");

            documents.push({
                path: filePath,
                content,
            });
        } catch (error) {
            console.error(`Failed to read file: ${filePath}`, error);
        }
    }



    return documents;
}