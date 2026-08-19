import { prisma } from "@/lib/prisma";
import { MessageRole } from "@/generated/prisma/client";


export async function createConversation(repositoryId: string, title: string) {
  return prisma.conversation.create({
    data: {
      title,
      repositoryId,
    }
  });

}

export async function getConversation(conversationId :string ) {
    return prisma.conversation.findUnique({
        where : {
            id : conversationId,
        },
        include : {
            messages : {
                orderBy : {
                    createdAt : "desc"
                },
                take : 20
            } 
        }
    })

}

export async function getRecentMessages(conversationId : string) {
    return prisma.message.findMany({
        where: {
            conversationId ,
        },
        orderBy : {
            createdAt  : "desc"
        },
        take : 10
        
    })
}

export async function saveMessage(conversationId : string , role : MessageRole , content : string ) {
    return prisma.message.create({
        data : {
            content,
            role,
            conversationId,
        }
    })

}