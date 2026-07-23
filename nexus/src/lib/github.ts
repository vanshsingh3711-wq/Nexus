import { prisma } from "@/lib/prisma";
import { GitHubApiRepository } from "@/types/gtihubapirepository";
import { GithubRepository } from "@/types/repository";


export async function getRepositories(userId: string):Promise<GithubRepository[]> {



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

    return repositories.map((repo: GitHubApiRepository) => ({
        githubRepositoryId: String(repo.id),
        name: repo.name,
        owner: repo.owner.login,
        defaultBranch: repo.default_branch,
        visibility: repo.private ? "PRIVATE" : "PUBLIC",
        description: repo.description,
        updatedAt: repo.updated_at,
    }));

}