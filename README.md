# Resume

[![Netlify Status](https://api.netlify.com/api/v1/badges/074409fc-2758-4206-8095-6470521280b5/deploy-status)](https://app.netlify.com/sites/waldronmatthew/deploys)

My personal resume built using [jsonresume](https://jsonresume.org/) and a modified version of the [onepage](https://www.npmjs.com/package/jsonresume-theme-onepage) theme.

## Installation

Install dependencies.

```bash
npm i
```

## Getting Started

Serve resume using this project's theme for development builds.

```bash
npm run serve
```

Export resume as an `.html` using this project's theme under `public/` for production builds (Netlify).

```bash
npm run build
```

Export resume as a `.pdf` named 'resume' under `public/`. (This uses an untracked local version of my resume.)

```bash
npm run export
```

## License

MIT
