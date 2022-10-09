module.exports = {
  '*': ['secretlint'],
  '**/*': ['prettier --cache --write --ignore-unknown'],
  '*.{yml,yaml}': ['yamllint --strict .'],
  '.github/workflows/*.{yml,yaml}': ['actionlint'],
};
