import { GoogleGenAI } from "@google/genai";
import "dotenv/config";


const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

async function main() {
  try {
    const response = await ai.models.embedContent({
      model: "gemini-embedding-001",
      contents: "Hello world",
    });
console.log(process.env.GEMINI_API_KEY);
    console.log("SUCCESS");
    console.log(response);
  } catch (err) {
    console.error("FAILED");
    console.error(err);
  }
}

main();