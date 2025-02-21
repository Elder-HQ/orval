---
id: configuration-input
title: Input
---

### target

Type: `String`.

Valid values: path or link to the specification.

```js
module.exports = {
  petstore: {
    input: {
      target: './petstore.yaml',
    },
  },
};
```

### validation

Type: `Boolean`.

Default Value: `false`.

To enforce the best quality as possible of specification, we have integrated the amazing <a href="https://github.com/IBM/openapi-validator" target="_blank">OpenAPI linter from IBM</a>. We strongly encourage you to setup your custom rules with a `.validaterc` file, you can find all useful information about this configuration <a href="https://github.com/IBM/openapi-validator/#configuration" target="_blank">here</a>.

```js
module.exports = {
  petstore: {
    input: {
      validation: true,
    },
  },
};
```

### override

Type: `Object`.

Give you the possibility to override the specification

#### transformer

Type: `String` or `Function`.

Valid values: path or implementation of the transformer function.

This function is executed when you generate and take in argument an <a href="https://github.com/metadevpro/openapi3-ts/blob/master/src/model/OpenApi.ts#L18" target="_blank">OpenAPIObject</a> and should return an <a href="https://github.com/metadevpro/openapi3-ts/blob/master/src/model/OpenApi.ts#L18" target="_blank">OpenAPIObject</a>.

```js
module.exports = {
  input: {
    override: {
      transformer: 'src/api/transformer/add-version.js',
    },
  },
};
```

Example of transformer <a href="https://github.com/anymaniax/orval/blob/master/samples/basic/api/transformer/add-version.js" target="_blank">here</a>

### converterOptions

Type: `Object`.

Default Value: `{}`.

Orval convert Swagger 2.0 definitions into OpenApi 3.0.x. You can use the converterOptions property to provide custom config for that. Check [here](https://github.com/anymaniax/orval/blob/next/src/types/swagger2openapi.d.ts#L10) available options.

```js
module.exports = {
  petstore: {
    input: {
      converterOptions: true,
    },
  },
};
```

### parserOptions

Type: `Object`.

Default Value: `{ resolve: { github: githubResolver }, validate: true }`.

Orval use a parser to handle multiple files specification. You can use the parserOptions property to provide custom config for that parser. Check [here](https://apitools.dev/swagger-parser/docs/options.html) available options. Be default Orval add a github parser but you can add own if you have a private specification or other requirement.

Your specification is automatically validated by default.

```js
module.exports = {
  petstore: {
    input: {
      parserOptions: {
        resolve: { gitlab: gitlabResolver },
      },
    },
  },
};
```
