import path from "path";
import Parser from "tree-sitter";
import TypeScript from "tree-sitter-typescript";
import Python from "tree-sitter-python";
import Java from "tree-sitter-java";

const parsers = {
    typescript: new Parser(),
    tsx: new Parser(),
    python: new Parser(),
    java: new Parser(),
};

parsers.typescript.setLanguage(TypeScript.typescript);
parsers.tsx.setLanguage(TypeScript.tsx);
parsers.python.setLanguage(Python);
parsers.java.setLanguage(Java);

export function getParser(filePath: string) {
    const extension = path.extname(filePath)

    switch (extension) {
        case ".ts":
            return parsers.typescript

        case ".tsx":
            return parsers.tsx;

        case ".py":
            return parsers.python;

        case ".java":
            return parsers.java;

        default:
            return null;
    }


}

export function parseCode(filePath: string, sourceCode: string) {
  const parser = getParser(filePath);

  if (!parser) {
    return null;
  }

  return parser.parse(sourceCode);
}

