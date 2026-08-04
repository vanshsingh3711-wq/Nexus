import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { headers } from "next/headers";
import { redirect } from 'next/navigation'
import { NextResponse } from "next/server";

export async function GET() {


    const headerList = await headers()
    const session = await auth.api.getSession({ headers: headerList })

    if (!session) {
        redirect('/login')
    }

    const repositories = await prisma.repository.findMany({
        where: {
            userId: session.user.id
        }
    })

    const serializedRepositories = repositories.map((repo) => ({
        ...repo,
        githubRepositoryId: repo.githubRepositoryId.toString(),
    }));

    return NextResponse.json(serializedRepositories);

}