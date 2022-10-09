# Base Template

Basic template repository to be reused for a variety of JavaScript-based projects.

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

## Commands

Commit changes using conventional changelog:

```bash
yarn commit
```

Lint files:

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
