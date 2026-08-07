import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export async function generateAnswer(
  userQuery: string,
  chunks: {
    path: string;
    content: string;
  }[]
) {
  const context = chunks
    .map((chunk) => `File: ${chunk.path}\nContent:\n${chunk.content}`)
    .join("\n\n---\n\n");

  const systemPrompt = `
You are an expert code assistant.

Answer only from the repository context.

Rules:
- Do not invent information.
- If information is missing, explicitly say so.
- Mention relevant file paths.
- Quote small snippets when useful.
- Keep answers concise.

Provided Context:
${context}
`;

  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content: systemPrompt,
      },
      {
        role: "user",
        content: userQuery,
      },
    ],
    temperature: 0.2,
    top_p: 0.9,
  });

  return {
    answer: response.choices[0].message.content,
    usage: response.usage,
  };
}
