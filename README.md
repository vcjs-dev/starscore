# starscore

A star-score library for web app.

# Features

- Create star-score component via **SVG**.
- Support for custom icons.
- Not relying on any third-party libraries.
- Support typescript.

# Installation

```bash
# pnpm
$ pnpm add starscore

# yarn
$ yarn add starscore

# npm
$ npm i starscore
```

# Usage

1. Imports style.

```ts
import 'starscore/lib/style.css'
```

2. Create a star-score instance.

```html
<div id="starscore-container"></div>
```

```ts
import { createStarscore } from 'starscore'

const starscoreInstance = createStarscore({
  container: '#starscore-container'
})
```

# Options

| Prop | Type | Default Value | Description |
| :---: | :---: | :---: | :---: |
| `container` | `string`,`HTMLElement` | `''` | Specify the container of star-score. |

# APIs

# CHANGE LOGS

See [change log](./CHANGELOG.md) here.