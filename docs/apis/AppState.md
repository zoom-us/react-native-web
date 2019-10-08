# AppState

AppState can tell you if the app is in the foreground or background, and notify
you when the state changes. States: `active` (the app is running in the
foreground), `background` (the app is running in the background, i.e., the user
has not focused the app's tab).

## Properties

### static isAvailable

Determines whether the browser environment supports `AppState`.

### static currentState

Returns the current state of the app: "active" or "background".

## Methods

### static addEventListener: (type: string, handler: Function) => void

Add a handler to AppState changes by listening to the `change` event type and
providing the handler. The handler is called with the app state value.

### static removeEventListener: (type: string, handler: Function) => void

Remove a handler by passing the `change` event type and the handler.
