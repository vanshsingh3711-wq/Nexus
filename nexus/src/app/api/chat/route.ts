import { NextResponse } from "next/server";
import { generateAnswer } from "@/indexing/generateAnswer";
import { retrieveRelevantChunks } from "@/indexing/retrieveChunks";

export async function POST(req: Request) {

    console.log("is it working");

    try {
        const { userQuery, repositoryId } = await req.json();

        console.log("user query : ", userQuery);
        console.log("repository id : ", repositoryId);


        if (!userQuery || !repositoryId) {
            return NextResponse.json(
                { error: "Missing query or repositoryId" },
                { status: 400 }
            );
        }

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