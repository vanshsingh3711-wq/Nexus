import simpleGit from "simple-git";
import path from "path";
import os from "os";
import crypto from "crypto";
import fs from "fs/promises";

export async function cloneRepository(repositoryUrl: string): Promise<string> {
  const git = simpleGit();

  const clonePath = path.join(os.tmpdir(), crypto.randomUUID());

  console.log("Repository URL:", repositoryUrl);
  console.log("Clone path:", clonePath);

  await git.clone(repositoryUrl, clonePath);

  const files = await fs.readdir(clonePath);
  console.log("AFTER CLONE:", files);

  return clonePath;
}