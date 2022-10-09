# Resume

[![Netlify Status](https://api.netlify.com/api/v1/badges/074409fc-2758-4206-8095-6470521280b5/deploy-status)](https://app.netlify.com/sites/matthew-waldron-resume/deploys)

My [personal resume](https://matthew-waldron-resume.netlify.app) built using [jsonresume](https://jsonresume.org/) and a modified version of the [onepage](https://www.npmjs.com/package/jsonresume-theme-onepage) theme.

## Installation

Install dependencies:

```bash
yarn
```

Install hooks:

```bash
yarn prepare
```

Install `make`:

```bash
[your-package-manager] install make
```

Install `yamllint` and `actionlint`.

## Getting Started

Serve resume using this project's theme for development builds.

```bash
yarn serve
```

Export resume as an `.html` using this project's theme under `public/` for production builds (Netlify).

```bash
yarn build
```

Export resume as a `.pdf` named 'resume' under `public/`.

```bash
yarn export
```

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

Lint `.yml` files:

```bash
make -f MAKEFILE
```

## License

MIT
