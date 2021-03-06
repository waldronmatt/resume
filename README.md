# Resume

[![Netlify Status](https://api.netlify.com/api/v1/badges/074409fc-2758-4206-8095-6470521280b5/deploy-status)](https://app.netlify.com/sites/matthew-waldron-resume/deploys)

My [personal resume](https://matthew-waldron-resume.netlify.app) built using [jsonresume](https://jsonresume.org/) and a modified version of the [onepage](https://www.npmjs.com/package/jsonresume-theme-onepage) theme.

## Installation

Install dependencies.

```bash
yarn
```

## Getting Started

Serve resume using this project's theme for development builds.

```bash
yarn serve
```

Export resume as an `.html` using this project's theme under `public/` for production builds (Netlify).

```bash
yarn build
```

Export resume as a `.pdf` named 'resume' under `public/`. (This uses an untracked local version of my resume.)

```bash
yarn export
```

## License

MIT
