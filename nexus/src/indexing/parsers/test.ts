import { parseCode } from "./parser";

const source = `
function hello(name: string) {
  return name;
}
`;

const tree = parseCode("hello.ts", source);

if (tree) {
  const root = tree.rootNode;

  console.log("Root:", root.type);

  for (const child of root.children) {
    console.log("Child:", child.type);
  }
}