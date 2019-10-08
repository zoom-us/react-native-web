# Image

An accessible image component with support for image resizing, default image, and child content.

## Props

### ...ViewProps

### blurRadius: ?number

The blur radius of the blur filter added to the image.

### defaultSource: ?Source

An image to display as a placeholder while downloading the final image off the network.

```
type Source = { uri: string, width: number, height: number }
```

### draggable: ?boolean = false

When `true`, the image will be draggable. (Web-only)

### onError: ?function

Invoked on load error with ``{nativeEvent: {error}}``.

### onLoad: ?function

Invoked when load completes successfully.

### onLoadEnd: ?function

Invoked when load either succeeds or fails.

### onLoadStart: ?function

Invoked on load start.

### resizeMode: ?ResizeMode = 'cover';

Determines how to resize the image when the frame doesn't match the raw image dimensions.

```
type ResizeMode = 'center' | 'contain' | 'cover' | 'none' | 'repeat' | 'stretch';
```

### source: ?Source

`uri` is a string representing the resource identifier for the image, which could be an http address or a base64 encoded image.

```
type Source = { uri: string, width: number, height: number }
```

### style: ?style

```
{
  ...ViewProps.style
  resizeMode: ResizeMode
  tintColor: Color
}
```

## Methods

### static getSize: (uri: string, success: (width, height) => {}, failure: function) => void

Retrieve the width and height (in pixels) of an image prior to displaying it.
This method can fail if the image cannot be found, or fails to download.

(In order to retrieve the image dimensions, the image may first need to be
loaded or downloaded, after which it will be cached. This means that in
principle you could use this method to preload images, however it is not
optimized for that purpose, and may in future be implemented in a way that does
not fully load/download the image data.)

### static prefetch: (url: string) => Promise

Prefetches a remote image for later use by downloading it.
