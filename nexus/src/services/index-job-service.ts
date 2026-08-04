import { prisma } from "@/lib/prisma";
import { IndexStatus } from "@/generated/prisma/enums";

export async function createIndexJob(repositoryId :string){
    return await prisma.index.create({
        data:{
            repositoryId,
            status: IndexStatus.RUNNING,
            progress: 0,
            currentStep: "Preparing Repository",
            filesProcessed : 0,
            totalFiles : 0,
            commitSha : ""
        }
    })

}


export async function updateProgress(jobid :string ,progress : number ,currentStep : string){
    return await prisma.index.update({
        where:{
            id: jobid
        },
        data:{
            progress,
            currentStep
        }
    })

}


export async function markCompleted(jobId: string) {
  return prisma.index.update({
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
}

export async function markFailed(
  jobId: string,
  error: string
) {
  return prisma.index.update({
    where: {
      id: jobId,
    },
    data: {
      status: IndexStatus.FAILED,
      error,
    },
  });
}
