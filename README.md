# <p align = "center">🚀 React Magic Spinners.</p>

<div align = "center">
<video src = "https://github.com/kavindu-mane/react-magic-spinners/blob/main/rms_cover.mp4" alt = "cover"/>
</div>

<video width="320" height="240" controls>
  <source src="video.mov" type="video/mp4">
</video>

<div align = "center">
<img alt="GitHub top language" src="https://img.shields.io/github/languages/top/kavindu-mane/react-magic-spinners">
<img alt="npm bundle size" src="https://img.shields.io/bundlephobia/min/react-magic-spinners">
<img alt="npm" src="https://img.shields.io/npm/v/react-magic-spinners?label=npm%20version">
<br/>
<img alt="GitHub" src="https://img.shields.io/github/license/kavindu-mane/react-magic-spinners?color=success">
<img alt="npm" src="https://img.shields.io/npm/dt/react-magic-spinners">
</div>

<br/>
<div align = "center">
<a href = "https://www.kavindu.me/projects/react-magic-spinners" alt = "demo" ><img src = "https://img.shields.io/badge/_DEMO_-%2303C988.svg?style=for-the-badge&&logoColor=white" alt = "demo"/></a>
 </div>
 
## Installation
_Install with npm:_

```bash
npm i react-magic-spinners
```

_Install with bun:_

```bash
bun add react-magic-spinners
```

_Install with yarn:_

```bash
yarn add react-magic-spinners
```

_Install with pnpm:_

```bash
pnpm add react-magic-spinners
```

## Usage
 _Import the spinner components:_

```javascript
import { BeatLoader } from "react-magic-spinners";
```
Now you can use both components like bellow.

 _Use with default styles:_
 
 ```jsx
<BeatLoader/>
 ```

   _Use with props:_
 
 ```jsx
<BeatLoader
  dotsSize={"2rem"}
  duration={2}
  dotsCount = {3}
  iterationCount = "infinity"
/>
```

## Available Spinners
 * BarLoader
 * BeatLoader
 * BounceLoader
 * CircleLoader
 * ClimbingBoxLoader
 * ClipLoader
 * GridLoader
 * Writer
  
## Props

<details>
<summary>BarLoader</summary>

| Name            | Description                     | Default    | Required | Data Type           |
|-----------------|---------------------------------|------------|----------|---------------------|
| width           | Width of the loader             | `200`      | No       | number or string    |
| height          | Height of the loader            | `10`       | No       | number or string    |
| duration        | Duration of the animation       | `3`        | No       | number              |
| color           | Color of the loader             | `#d20062`  | No       | string              |
| trackColor      | Color of the loader's track     | `#d2006260`| No       | string              |
| iterationCount  | Number of animation iterations  | `infinite` | No       | number or string    |
| style           | CSS styles                      | `undefined`| No       | React.CSSProperties |
| className       | CSS class name                  | `undefined`| No       | string              |
| isRoundCap      | Whether the loader has round cap| `true`     | No       | boolean             |

</details>


<details>
<summary>BeatLoader</summary>

| Name               | Description                     | Default     | Required | Data Type           |
|--------------------|---------------------------------|-------------|----------|---------------------|
| dotsSize           | Size of the dots                | `16`        | No       | number or string    |
| duration           | Duration of the animation       | `0.5`       | No       | number              |
| color              | Color of the loader             | `#d20062`   | No       | string              |
| iterationCount     | Number of animation iterations  | `infinite`  | No       | number or string    |
| style              | CSS styles                      | `undefined` | No       | React.CSSProperties |
| className          | CSS class name                  | `undefined` | No       | string              |
| margin             | Margin between the dots         | `4`         | No       | number or string    |
| dotsCount          | Number of dots in the loader    | `3`         | No       | number              |

</details>


<details>
<summary>BounceLoader</summary>

| Name               | Description                       | Default     | Required | Data Type           |
|--------------------|-----------------------------------|-------------|----------|---------------------|
| size               | Size of the loader                | `64`        | No       | number or string    |
| duration           | Duration of the animation         | `2`         | No       | number              |
| color              | Color of the loader               | `#d20062`   | No       | string              |
| iterationCount     | Number of animation iterations    | `infinite`  | No       | number or string    |
| style              | CSS styles                        | `undefined` | No       | React.CSSProperties |
| className          | CSS class name                    | `undefined` | No       | string              |
| isBorderOnly       | Whether the loader is border only | `false`     | No       | boolean             |
| borderWidth        | Width of the border               | `2`         | No       | number              |

</details>

<details>
<summary>CircleLoader</summary>

| Name               | Description                     | Default     | Required | Data Type           |
|--------------------|---------------------------------|-------------|----------|---------------------|
| size               | Size of the loader              | `112`       | No       | number or string    |
| borderWidth        | Width of the border             | `1`         | No       | number              |
| circleCount        | Number of circles in the loader | `5`         | No       | number              |
| duration           | Duration of the animation       | `1`         | No       | number              |
| color              | Color of the loader             | `#d20062`   | No       | string              |
| iterationCount     | Number of animation iterations  | `infinite`  | No       | number or string    |
| style              | CSS styles                      | `undefined` | No       | React.CSSProperties |
| className          | CSS class name                  | `undefined` | No       | string              |
| isCentered         | Whether the loader is centered  | `false`     | No       | boolean             |

</details>

<details>
<summary>ClimbingBoxLoader</summary>

| Name               | Description                     | Default     | Required | Data Type           |
|--------------------|---------------------------------|-------------|----------|---------------------|
| size               | Size of the loader              | `16`        | No       | number              |
| duration           | Duration of the animation       | `2`         | No       | number              |
| color              | Color of the loader             | `#d20062`   | No       | string              |
| iterationCount     | Number of animation iterations  | `infinite`  | No       | number or string    |
| style              | CSS styles                      | `undefined` | No       | React.CSSProperties |
| className          | CSS class name                  | `undefined` | No       | string              |

</details>

<details>
<summary>ClipLoader</summary>

| Name               | Description                     | Default     | Required | Data Type           |
|--------------------|---------------------------------|-------------|----------|---------------------|
| size               | Size of the loader              | `32`        | No       | number              |
| borderWidth        | Width of the border             | `2`         | No       | number              |
| duration           | Duration of the animation       | `1`         | No       | number              |
| color              | Color of the loader             | `#d20062`   | No       | string              |
| iterationCount     | Number of animation iterations  | `infinite`  | No       | number or string    |
| style              | CSS styles                      | `undefined` | No       | React.CSSProperties |
| className          | CSS class name                  | `undefined` | No       | string              |

</details>

<details>
<summary>GridLoader</summary>

| Name               | Description                     | Default             | Required | Data Type           |
|--------------------|---------------------------------|---------------------|----------|---------------------|
| dotsSize           | Size of the dots                | `16`                | No       | number or string    |
| duration           | Duration of the animation       | `1`                 | No       | number              |
| color              | Color of the loader             | `#d20062`           | No       | string              |
| backgroundColor    | Background color of the loader  | `transparent`       | No       | string              |
| iterationCount     | Number of animation iterations  | `infinite`          | No       | number or string    |
| style              | CSS styles                      | `undefined`         | No       | React.CSSProperties |
| className          | CSS class name                  | `undefined`         | No       | string              |
| margin             | Margin between the dots         | `3`                 | No       | number or string    |
| rows               | Number of rows in the grid      | `3`                 | No       | number              |
| columns            | Number of columns in the grid   | `3`                 | No       | number              |

</details>

<details>
<summary>Writer</summary>

| Name               | Description                     | Default             | Required | Data Type           |
|--------------------|---------------------------------|---------------------|----------|---------------------|
| text               | Text to be written              | `Hello`             | No       | string              |
| fontSize           | Font size of the text           | `5rem`              | No       | number or string    |
| fontFamily         | Font family of the text         | `Arial`             | No       | string              |
| fontWeight         | Font weight of the text         | `600`               | No       | number or string    |
| width              | Width of the loader             | `500`               | No       | number              |
| height             | Height of the loader            | `200`               | No       | number              |
| backgroundColor    | Background color of the loader  | `transparent`       | No       | string              |
| duration           | Duration of the animation       | `3`                 | No       | number              |
| iterationCount     | Number of animation iterations  | `infinite`          | No       | number or string    |
| style              | CSS styles                      | `undefined`         | No       | React.CSSProperties |
| className          | CSS class name                  | `undefined`         | No       | string              |

_If you need change writer text color.add this line to your css file_

```css
 --rms-writer-color: your color;
```

</details>


## License

[![View License](https://img.shields.io/github/license/kavindu-mane/react-magic-spinners?color=success)](LICENSE)
