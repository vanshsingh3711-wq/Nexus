import { NextResponse } from "next/server";
import { headers } from "next/headers";

import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";

import type { ImportRepositoriesRequest } from "@/types/repository";
import { StatusRepository } from "@/generated/prisma/enums";

export async function POST(request: Request) {
  try {
    const body: ImportRepositoriesRequest = await request.json();

    if (!body.repositories || body.repositories.length === 0) {
      return NextResponse.json(
        { error: "No repositories selected." },
        { status: 400 }
      );
    }

    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const userId = session.user.id;

    const createRepositories = await prisma.repository.createMany({
      data: body.repositories.map((repo) => ({
        githubRepositoryId: repo.githubRepositoryId,
        name: repo.name,
        owner: repo.owner,
        defaultBranch: repo.defaultBranch,
        visibility: repo.visibility,
        userId,
        status: StatusRepository.CONNECTED,
      })),
      skipDuplicates: true,
    });

    

    return NextResponse.json(
      {
        success: true,
        imported: createRepositories.count,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Import repositories error:", error);

    return NextResponse.json(
      {
        error: "Failed to import repositories.",
      },
      { status: 500 }
    );
  }
}