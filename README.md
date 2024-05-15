# wtc-measureFPS
A small class for measuring the FPS at which a page is running. Useful for throttling animations and heavy calculations on potatoes.

```sh
npm i wtc-measure-fps
```

```js
import getFPSMeasure from "wtc-measure-fps";

let fpsMeasure = getFPSMeasure();

if (fpsMeasure.average60 < 5) {
    // stop animation
}
```