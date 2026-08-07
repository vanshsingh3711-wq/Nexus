import { prisma } from "@/lib/prisma";
import { IndexStatus } from "@/generated/prisma/enums";
import { StatusRepository } from "@/generated/prisma/enums";

export async function createIndexJob(repositoryId: string) {
  return prisma.index.create({
    data: {
      repositoryId,
      status: IndexStatus.RUNNING,
      progress: 0,
      currentStep: "Preparing Repository",
      filesProcessed: 0,
      totalFiles: 0,
      commitSha: "",
    },
  });
}

export async function updateProgress(
  jobId: string,
  progress: number,
  currentStep: string
) {
  return prisma.index.update({
    where: {
      id: jobId,
    },
    data: {
      progress,
      currentStep,
    },
  });
}

export async function markCompleted(
  jobId: string,
  repositoryId: string
) {
  await prisma.index.update({
    where: {
      id: jobId,
    },
    data: {
      status: IndexStatus.COMPLETED,
      progress: 100,
      currentStep: "Completed",
      finishedAt: new Date(),
    },
  });

  await prisma.repository.update({
    where: {
      id: repositoryId,
    },
    data: {
      status: StatusRepository.READY,
      lastIndexedAt: new Date(),
    },
  });
}

export async function markFailed(
  jobId: string,
  error: string,
  repositoryId: string
) {
  await prisma.index.update({
    where: {
      id: jobId,
    },
    data: {
      status: IndexStatus.FAILED,
      error,
    },
  });

  await prisma.repository.update({
    where: {
      id: repositoryId,
    },
    data: {
      status: StatusRepository.FAILED,
    },
  });
}