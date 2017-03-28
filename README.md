# eslint-config-liflandgaming

:shipit: liflandgaming eslint configuration

## Usage

### Default

The default ESLint configuration lints for ES6.

Install the default configuration package and `eslint` dependency:

```
npm install --save-dev eslint-config-liflandgaming eslint
```

Add the config to a `.eslintrc.json` file or the `eslintConfig` object in `package.json` using the ESLint `extends` attribute:

```json
{
  "extends": "liflandgaming"
}
```

### Testing

A module for test-specific rules is available.

Add the config to a `.eslintrc.json` file or the `eslintConfig` object in `package.json` using the ESLint `extends` attribute:

```json
{
  "extends": "liflandgaming/test"
}
```
