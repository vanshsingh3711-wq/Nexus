import { NextResponse } from "next/server";
import { generateAnswer } from "@/indexing/generateAnswer";
import { retrieveRelevantChunks } from "@/indexing/retrieveChunks";
import {
  createConversation,
  getRecentMessages,
  saveMessage,
} from "@/services/conversation-service";

import { MessageRole } from "@/generated/prisma/client";


export async function POST(req: Request) {

    console.log("is it working");

    try {
        const { userQuery, repositoryId , conversationId} = await req.json();

        console.log("user query : ", userQuery);
        console.log("repository id : ", repositoryId);

        let currentConversationId = conversationId;

        if(!currentConversationId){
            const conversation = await createConversation(repositoryId, "New Chat");
            currentConversationId = conversation.id;
        }


        if (!userQuery || !repositoryId) {
            return NextResponse.json(
                { error: "Missing query or repositoryId" },
                { status: 400 }
            );
        }                 

      const userMessage =  await saveMessage(currentConversationId, MessageRole.USER , userQuery)

        const chunks = await retrieveRelevantChunks(
            userQuery,
            repositoryId
        );

        const result = await generateAnswer(
            userQuery,
            chunks
        );

        return NextResponse.json(result);
    } catch (error) {
        console.error(error);

        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}