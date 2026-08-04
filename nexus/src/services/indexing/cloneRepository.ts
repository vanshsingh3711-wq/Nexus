import simpleGit from "simple-git";
import path from "path";
import os from "os";
import crypto from "crypto";

export async function cloneRepository(repositoryUrl: string): Promise<string> {
    const git = simpleGit();
    const clonePath = path.join(
        os.tmpdir(),
        crypto.randomUUID()
    )
    try{

        await git.clone(repositoryUrl, clonePath);
    
        return clonePath;
    }
    catch (error){
        throw new Error("Failed to clone repository.");
    }
    
}