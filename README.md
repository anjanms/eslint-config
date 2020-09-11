# @anjanms/eslint-config

Shareable ESLint Configuration

## Installation

```sh
npm install --save-dev eslint eslint-plugin-node @anjanms/eslint-config
```

Optional: Install `eslint-cli` globally for ease of use.

```sh
npm install --global eslint-cli
```

## Configuration

`.eslintrc.json`
```json
{
    "env": {
        "browser": false,
        "commonjs": false,
        "node": false
    },
    "extends": "@anjanms/eslint-config",
    "root": true
}
```
