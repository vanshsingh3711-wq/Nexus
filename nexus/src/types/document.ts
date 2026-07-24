export type Document = {
    repositoryId: string;

    path: string;

    language: Language;

    content: string;

    size: number;

    extension: string;

    lastModified?: Date;
}

export type Language =
  | "typescript"
  | "javascript"
  | "python"
  | "java"
  | "go"
  | "rust"
  | "cpp"
  | "unknown";