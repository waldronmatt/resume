# Resume

[![Netlify Status](https://api.netlify.com/api/v1/badges/0dd95bb6-b8db-495a-ba1f-3ca495d99368/deploy-status)](https://app.netlify.com/sites/matthew-waldron-resume/deploys)

My [personal resume](https://resume.waldronmatthew.com) built using [jsonresume](https://jsonresume.org/), the [simplepwa template](https://github.com/nikkifurls/simplepwa) and a custom version of the [onepage](https://www.npmjs.com/package/jsonresume-theme-onepage) theme.

## Installation

Install dependencies:

```bash
yarn
```

Install hooks:

```bash
yarn prepare
```

## Getting Started

Serve resume using this project's theme for development builds.

```bash
yarn dev
```

Export resume as a `.pdf` under `public/`.

```bash
yarn export
```

Export resume as an `.html` using this project's theme under `public/` for production builds (Netlify).

```bash
yarn build
```

**Note:** Configure script in Netlify to auto-run via push to `main` branch.

## Commands

Commit changes using conventional changelog:

```bash
yarn commit
```

Lint all files:

```bash
yarn lint
```

**Note**: `release.yml` will run this before versioning and publishing.

## Development Mode

In development mode you can bypass the PWA by navigating to `Application` > `Service Workers` in Chrome devtools and check `Update on reload` and `Bypass for network`. This is to prevent the PWA from loading cached data.

## Production Mode

In production mode make sure to run `yarn export` locally to update the resume `.pdf` and update `line 1` of `sw.js` under `public/` to force the PWA to execute a cache update.

## License

MIT
