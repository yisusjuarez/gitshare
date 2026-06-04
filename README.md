# gitshare

```
  __ _(_) |_ ___| |__   __ _ _ __ ___ 
 / _` | | __/ __| '_ \ / _` | '__/ _ \
| (_| | | |_\__ \ | | | (_| | | |  __/
 \__, |_|\__|___/_| |_|\__,_|_|  \___|
 |___/                                 
```

Get a shareable GitHub URL for any file in your repo — works with SSH and HTTPS remotes.

## Install

```sh
npm install -g gitshare
```

## Usage

```sh
gitshare <file>
```

```sh
$ gitshare src/commands.ts
https://github.com/yisusjuarez/gitshare/blob/main/src/commands.ts
```

You can pass any path — absolute or relative to your current directory:

```sh
gitshare ~/projects/myapp/src/index.ts
```

## How it works

1. Reads the `origin` remote from your git config
2. Parses the URL regardless of protocol:
   - SSH: `git@github.com:user/repo.git`
   - HTTPS: `https://github.com/user/repo.git`
   - SSH config aliases: `git@github.com-work:user/repo.git`
3. Gets the current branch via `git rev-parse --abbrev-ref HEAD`
4. Computes the file path relative to the repo root
5. Outputs a `blob` URL pointing to that file on the current branch

## License

MIT
