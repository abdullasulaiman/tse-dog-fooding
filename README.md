# TSE-Dog-Fooding Application


### Installation

#### Requirements
- [Node.js](https://nodejs.org/en/) version _>=16.0.0_
- [yarn](https://yarnpkg.com/)
- [git](https://git-scm.com/)

#### To go with the latest version do the following

Development mode
```
yarn install && yarn start
```

Production mode
```
yarn install && yarn build
```

#### How to analyze the bundle size
```
yarn install && yarn build --stats
```

And then use the [webpack-bundle-analyzer](https://www.npmjs.com/package/webpack-bundle-analyzer) to open _build/bundle-stats.json_.



