import { getRepositories } from "@/lib/github";
import RepositoryList from "./RepositoryList";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import { redirect } from 'next/navigation'

export default async function RepositoriesPage() {

   const headerList = await headers()

   const session = await auth.api.getSession({ headers: headerList })

   if (!session){
      return redirect('/auth/login')

   }

   const repositories = await getRepositories(session.user.id)
   return (
      <RepositoryList repositories={repositories} />
   )
}