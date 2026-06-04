import { execSync } from "node:child_process";
import { relative, resolve } from "node:path";
import { DEFAULT_BLOB } from "./constants.js";
import { parseRemote } from "./utils.js";

const git = (cmd: string): string =>
  execSync(`git ${cmd}`, { encoding: "utf8", cwd: process.cwd() }).trim();

export const getRemoteUrl = (): string => {
  try {
    return git("remote get-url origin");
  } catch {
    throw new Error(
      "Remote not found, verify if this file is in a git repository",
    );
  }
};

export const getCurrentBranch = (): string => {
  try {
    return git("rev-parse --abbrev-ref HEAD");
  } catch {
    return "main";
  }
};

export const getRepoRoot = (): string => git("rev-parse --show-toplevel");

export const buildRemoteUrl = ({
  remote,
  filePath,
}: {
  remote: string;
  filePath: string;
}): string => {
  const { host, owner, repo } = parseRemote(remote);
  const branch = getCurrentBranch();
  const repoRoot = getRepoRoot();
  const absoluteFilePath = resolve(filePath);
  const relativeFilePath = relative(repoRoot, absoluteFilePath);
  return `https://${host}/${owner}/${repo}${DEFAULT_BLOB}${branch}/${relativeFilePath}`;
};
