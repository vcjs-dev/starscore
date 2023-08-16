<p align="center">
  <a href="https://www.npmjs.org/package/starscore">
    <img src="https://img.shields.io/npm/v/starscore.svg">
  </a>
  <a href="https://npmcharts.com/compare/starscore?minimal=true">
    <img src="https://img.shields.io/npm/dm/starscore.svg">
  </a>
  <br>
</p>

# Starscore

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
| `initialValue` | `number` | `0` | Set a initialization score. |
| `size` | `number`, `string` | `20px` | Icon size. |
| `gutter` | `string`, `number` | `4px` | Icon gutter. |
| `color` | `string` | `#ee0a24` | Selected color. |
| `voidColor` | `string` | `#c8c9cc` | Void color. |
| `disabledColor` | `string` | `#c8c9cc` | Disabled color. |
| `type` | `string` | `'star'` | Specify this to use a built-in icon. You can use `star` or `heart`. |
| `icon` | `string` | - | Specify this to change SVG string of the selected icon. |
| `voidIcon` | `string` | - | Specify this to change SVG string of the void icon. |
| `clearable` | `boolean` | `false` | Whether to allow clear when click again. |
| `readonly` | `boolean` | `false` | Whether to be readonly. |
| `disabled` | `boolean` | `false` | Whether to disable score. |
| `allowHalf` | `boolean` | `false` | Whether to allow half star. |
| `showDescription` | `boolean` | `false` | Whether to show current score description. |
| `descriptionColor` | `string` | `#909399` | Specify this to change the color of current score description. |
| `descriptionFontSize` | `string`, `number` | `13px` | Specify this to change the `font-size` of current score description. |
| `scoreDetails` | `Function` | `() => ''` | Specify this to custom the desctiption content of current score. `currentScore: number` is the only parameter. |
| `onChange` | `Function` | - | Event triggered when the current score changes. `(currentScore: number) => void` |

# APIs

## Methods of instance

## setValue

You can use it to change the **score** value after After instantiation.

```ts
starscoreInstance.setValue(5) // set 5 score
```

## getValue

You can use this to obtain the current score value.

```ts
starscoreInstance.getValue()
```

## setOptions

You can use it to change the **options** after After instantiation.

```ts
starscoreInstance.setOptions({
  disabled: true // disable the star-score
}, true)
```

> The second parameter specifies whether to re-render, defaults is `false`.

## destory

Destory the star-score instance.

```ts
starscoreInstance.destory()
```

# CHANGE LOGS

See [change log](./CHANGELOG.md) here.