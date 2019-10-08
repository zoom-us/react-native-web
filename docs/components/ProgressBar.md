# ProgressBar

Display an activity progress bar.

## Props

### ...ViewProps

### color: ?string = #1976D2

Color of the progress bar.

### indeterminate: ?boolean = true

Whether the progress bar will show indeterminate progress.

### progress: ?number

The progress value (between 0 and 1).

### trackColor: ?string = 'transparent'

Color of the track bar.

## Notes

Custom sizes can be created using `style`.

```js
<ProgressBar
  style={{ borderRadius: 10, height: 10 }}
  trackColor="#D1E3F6"
/>
```
