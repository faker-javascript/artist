<h1 align="center">Artist</h1>
<p align="center">Artist package provides functionality to generate a fake artist value.</p>

<p align="center">
<a href="https://github.com/faker-javascript/artist/releases"><img alt="Version" src="https://img.shields.io/github/release/faker-javascript/artist.svg?label=version&color=green"></a> <img src="https://img.shields.io/npm/dt/@fakerjs/artist"> <img alt="node-current" src="https://img.shields.io/node/v/@fakerjs/artist"> <a href="https://github.com/faker-javascript/artist/actions/workflows/ci.yml"><img src="https://github.com/faker-javascript/artist/actions/workflows/ci.yml/badge.svg"></a> <a href="https://github.com/faker-javascript/artist"><img src="https://img.shields.io/badge/license-MIT-blue.svg?color=green" alt="License"></a>
</p>

## Install

npm
```
npm install @fakerjs/artist --save-dev
```

yarn
```
yarn add @fakerjs/artist -D
```

## Usage

```js
import artist from '@fakerjs/artist';

artist({locale: 'en_US'}).name();
//=> Picasso 
// Allowed locale: en_US

artist().name();
//=> Picasso
```

## Tests

Run tests

```
npm run test
```

## License
[The MIT License (MIT)](https://github.com/faker-javascript/artist/blob/master/LICENSE)
Copyright (c) [Sergey Romanenko](https://github.com/Awilum)
