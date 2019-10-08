# Clipboard

Clipboard gives you an interface for setting to the clipboard. (Getting
clipboard content is not supported on web.)

## Methods

### static isAvailable: () => boolean

Determines whether the browser environment supports Clipboard at all.

### static setString: (string) => boolean

Copies a string to the clipboard. On web, some browsers may not support copying
to the clipboard, therefore, this function returns a boolean to indicate if the
copy was successful.

### static getString: ()

Not properly supported on Web. Returns a `Promise` of an empty string.
