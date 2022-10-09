module.exports = {
  '*': ['secretlint'],
  '**/*': ['prettier --cache --write --ignore-unknown'],
  '*.md': ['markdownlint'],
  '*.{yml,yaml}': ['yamllint --strict .'],
  '.github/workflows/*.{yml,yaml}': ['actionlint'],
};
