import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { indexRepository } from "@/indexing/repository-indexer";

export async function POST(request: NextRequest) {
console.log("is starting ?")
  try {
    const body = await request.json();

    console.log("Request body:", body);

    const { githubRepositoryId } = body;

    console.log("githubRepositoryId:", githubRepositoryId);

    if (!githubRepositoryId) {
      return NextResponse.json(
        { error: "githubRepositoryId is required" },
        { status: 400 }
      );
    }
const repository = await prisma.repository.findUnique({
  where: {
    githubRepositoryId: BigInt(githubRepositoryId),
  },
});

console.log(repository);

    if (!repository) {
      return NextResponse.json(
        { error: "Repository not found" },
        { status: 404 }
      );
    }

    const indexJob = await prisma.index.create({
      data: {
        repositoryId: repository.id,
        status: "PENDING",
        commitSha: "",
      }
    })

    await prisma.repository.update({
      where: {
        id: repository.id,
      },
      data: {
        status: "INDEXING",
      },
    });

     console.log("Calling indexRepository...");

await indexRepository(repository, indexJob.id);

console.log("indexRepository finished");

    return NextResponse.json({
      success: true,
      jobId: indexJob.id,
    });
  } catch (error) {
  console.error("FULL ERROR:");
  console.error(error);

  if (error instanceof Error) {
    console.error(error.stack);
  }

  throw error;
}
}