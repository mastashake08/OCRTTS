# ocrtts

[![NPM](https://nodei.co/npm/@mastashake08/ocrtts.png)](https://nodei.co/npm/ocrtts/)

[![NPM version](https://img.shields.io/npm/v/@mastashake08/ocrtts.svg)](https://www.npmjs.com/package/ocrtts)


## Installation

```sh
npm install @mastashake08/ocrtts
```

## Usage

```javascript
import { OcrTTS } from '@mastashake08/ocrtts'

const ocrtts = new OcrTTS()

ocrtts.readText(image) //image can come from stream or uploaded file , etc

```

## Support

- [Patreon](https://patreon.com/mastashake08)

## License

[MIT](https://github.com/mastashake08/ocrtts/blob/master/LICENSE)

# API Reference

## Classes

<dl>
<dt><a href="#OcrTTS">OcrTTS</a></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#readText">readText(image)</a> ⇒ <code>VoidFunction</code></dt>
<dd></dd>
</dl>

<a name="OcrTTS"></a>

## OcrTTS
**Kind**: global class  
<a name="readText"></a>

## readText(image) ⇒ <code>VoidFunction</code>
**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| image | <code>Blob</code> \| <code>ImageData</code> \| <code>HTMLElement</code> | ImageSource to perform OCR on. |

