import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { prisma } from "@/lib/prisma";


export async function GET() {

    const headerList = await headers()

    const session = await auth.api.getSession({ headers: headerList })

    if (!session) {
        return Response.json("Unauthorized", { status: 401 })
    }

    const account = await prisma.account.findFirst({
        where: {
            userId: session.user.id,
            providerId: "github"
        },

        select: {
            accessToken: true
        }

    })

    if (!account?.accessToken) {
        return Response.json(
            { error: "GitHub account not found" },
            { status: 404 }
        );
    }

    const response = await fetch('https://api.github.com/user/repos' ,{
        headers:{
            Authorization :`Bearer ${account.accessToken}`,
            Accept: "application/vnd.github+json",
        }
    })

    if(!response.ok){
        throw new Error(`HTTP error! status : ${response.status}`)
    }

    const repositories = await response.json()
    console.log(repositories)

    return Response.json(
        repositories
    )
}
