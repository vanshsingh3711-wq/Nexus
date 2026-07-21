import { betterAuth } from "better-auth";
import { prisma } from "@/lib/prisma";
import { prismaAdapter } from "better-auth/adapters/prisma";


export const auth = betterAuth({
    database: prismaAdapter(prisma , {
        provider : "postgresql"
    }),

    socialProviders: {
        github:{
            clientId: process.env.GITHUB_CLIENT_ID!,
            clientSecret : process.env.GITHUB_CLIENT_SECRET!

        }
    }
});
