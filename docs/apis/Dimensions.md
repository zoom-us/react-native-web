# Dimensions

Note: dimensions may change (e.g., due to device rotation) so any rendering
logic or styles that depend on these constants should try to call this function
on every render, rather than caching the value.

## Methods

### static get: (dimension: string) => Object

Get a dimension (e.g., `window` or `screen`).

```
const { height, width } = Dimensions.get('window')
```

### static set: (dimensions: ?{[key:string]: any}) => void

This should only be called server-side with an estimate for initial dimensions
to be used when pre-rendering pages on the server.

### static addEventListener: (type: string, handler: function) => void

Add an event handler. Supported events:

* `change`: Fires when a property within the `Dimensions` object changes. The argument to the event handler is an object with `window` and `screen` properties whose values are the same as the return values of `Dimensions.get('window')` and `Dimensions.get('screen')`, respectively.

### static removeEventListener: (type: string, handler: function) => void

Remove an event handler.
