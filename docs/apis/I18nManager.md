# I18nManager

Control and query the layout and writing direction of the application.

## Properties

### isRTL: boolean = false

Whether the application is currently in RTL mode.

### doLeftAndRightSwapInRTL: boolean = true

Whether the application swaps left/right styles in RTL mode.

## Methods

### allowRTL: (allowRTL: boolean) => void

Allow the application to display in RTL mode.

### forceRTL: (forceRTL: boolean) => void

Force the application to display in RTL mode.

### swapLeftAndRightInRTL: (flipStyles: boolean) => void

Control whether the application swaps left/right styles in RTL mode.
Applications relying on start/end styles may prefer to disable automatic
BiDi-flipping of left/right styles.

### setPreferredLanguageRTL: (isRTL: boolean) => void

Set the application's preferred writing direction to RTL. You may need to infer
the user's preferred locale on the server (from HTTP headers) and decide whether
it's an RTL language. (Web-only)
