# PixelRatio

PixelRatio class gives access to the device pixel density.

## Methods

### static get: () => number

Returns the device pixel density

### static getFontScale: () => number

On web this returns the device pixel ratio

### static getPixelSizeForLayoutSize: (layoutSize: number) => number

Converts a layout size (dp) to pixel size (px). Guaranteed to return an integer number.

```
const image = getImage({
  width: PixelRatio.getPixelSizeForLayoutSize(200),
  height: PixelRatio.getPixelSizeForLayoutSize(100),
});

<Image source={image} style={{width: 200, height: 100}} />
```

### static roundToNearestPixel: (layoutSize: number) => number

Rounds a layout size (dp) to the nearest layout size that corresponds to an
integer number of pixels. For example, on a device with a PixelRatio of 3,
`PixelRatio.roundToNearestPixel(8.4) = 8.33`, which corresponds to exactly
`(8.33 * 3) = 25` pixels.
