import gitUrlParse from "git-url-parse";
import type { RemoteInput } from "./types.js";

function normalizeHost(resource: string): string {
  if (resource.includes("github.com")) return "github.com";
  return resource;
}

export const parseRemote = (remote: string): RemoteInput => {
  const parsed = gitUrlParse(remote);
  return {
    host: normalizeHost(parsed.resource),
    owner: parsed.owner,
    repo: parsed.name,
  };
};
