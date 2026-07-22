import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { prisma } from "@/lib/prisma";


export async function getRepositories(userId: string) {



    const account = await prisma.account.findFirst({
        where: {
            userId: userId,
            providerId: "github"
        },

        select: {
            accessToken: true
        }

    })
    if (!account?.accessToken) {
        throw new Error("GitHub account not connected");
    }
    const response = await fetch('https://api.github.com/user/repos', {
        headers: {
            Authorization: `Bearer ${account?.accessToken}`,
            Accept: "application/vnd.github+json",
        }
    })

    if (!response.ok) {
        throw new Error(`HTTP error! status : ${response.status}`)
    }

    const repositories = await response.json()
    console.log(repositories)

    return repositories
}