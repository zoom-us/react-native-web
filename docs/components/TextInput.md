# TextInput

Accessible single- and multi-line text input via a keyboard. Supports features
such as auto-complete, auto-focus, placeholder text, and event callbacks. Note:
some props are exclusive to or excluded from `multiline`.

## Props

### ...ViewProps

### autoCapitalize: ?enum('characters', 'none', 'sentences', 'words') = 'sentences'

Automatically capitalize certain characters (only available in Chrome and iOS Safari).

* `characters`: Automatically capitalize all characters.
* `none`: Completely disables automatic capitalization.
* `sentences`: Automatically capitalize the first letter of sentences.
* `words`: Automatically capitalize the first letter of words.

### autoComplete: ?string

Indicates whether the value of the control can be automatically completed by the
browser. [Accepted values](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input).

### autoCorrect: ?boolean = true

Automatically correct spelling mistakes. (Only available in iOS Safari.)

### autoFocus: ?boolean = false

If `true`, focuses the input on `componentDidMount`. Only the first form element
in a document with `autofocus` is focused.

### blurOnSubmit: ?boolean

If `true`, the text field will blur when submitted. The default value is `true`
for single-line fields and `false` for multiline fields. Note, for `multiline`
fields setting `blurOnSubmit` to `true` means that pressing return will blur the
field and trigger the `onSubmitEditing` event instead of inserting a newline
into the field.

### clearTextOnFocus: ?boolean = false

If `true`, clears the text field automatically when focused.

### defaultValue: ?string

Provides an initial value that will change when the user starts typing. Useful
for simple use-cases where you don't want to deal with listening to events and
updating the value prop to keep the controlled state in sync.

### editable: ?boolean = true

If `false`, text is not editable (i.e., read-only).

### keyboardType: "default" | "email-address" | "numeric" | "phone-pad" | "search" | "url" | "web-search" = "default"

Determines which keyboard to open on devices with a virtual keyboard. Safari iOS requires an ancestral `<form action>` element to display the `search` keyboard). (Not available when `multiline` is `true`.)

### maxLength: ?number

Limits the maximum number of characters that can be entered.

### multiline: ?boolean = false

If `true`, the text input can be multiple lines.

### numberOfLines: ?number

Sets the number of lines for a multiline `TextInput`. (Requires `multiline` to be `true`.)

### onBlur: ?function

Callback that is called when the text input is blurred.

### onChange: ?function

Callback that is called when the text input's text changes.

### onChangeText: ?function

Callback that is called when the text input's text changes. The text is passed as an argument to the callback handler.

### onContentSizeChange: ?function

Callback that is called when the text input's content size changes. This will be
called with `{ nativeEvent: { contentSize: { width, height } } }`. Only called
for multiline text inputs.

### onFocus: ?function

Callback that is called when the text input is focused.

### onKeyPress: ?function

Callback that is called when a key is pressed. This will be called with `{
nativeEvent: { key: keyValue } }` where `keyValue` is `Enter`, `Backspace`,
`Tab`, `Arrow{Up,Right,Down,Left}` for respective keys and the typed-in
character otherwise including `' '` for space. Modifier keys (e.g., `shiftKey`)
are also included in the `nativeEvent`. Fires before `onChange` callbacks.

### onLayout: ?function

Invoked on mount and layout changes with `{x, y, width, height}`.

### onSelectionChange: ?function

Callback that is called when the text input's selection changes. This will be
called with `{ nativeEvent: { selection: { start, end } } }`.

### onSubmitEditing: ?function

Callback that is called when the keyboard's submit button is pressed. When `multiline={true}`, this is only called if `blurOnSubmit={true}`.

### placeholder: ?string

The string that will be rendered in an empty `TextInput` before text has been entered.

### placeholderTextColor: ?color

The text color of the placeholder string.

### returnKeyType: 'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send'

Specifies what action label (or icon) to present for the enter key on virtual
keyboards. Maps to the `enterkeyhint` attribute on web.

### secureTextEntry: ?boolean = false

If `true`, the text input obscures the text entered so that sensitive text like
passwords stay secure. (Not available when `multiline` is `true`.)

### selection: ?{ start: number, end: ?number }

The start and end of the text input's selection. Set start and end to the same
value to position the cursor.

### selectTextOnFocus: ?boolean = false

If `true`, all text will automatically be selected on focus.

### spellCheck: ?boolean

If `false`, disables spell-check style (i.e. red underlines). The default value
is inherited from `autoCorrect`. (Only available in supporting browsers).

### style: ?style

```js
{
  ...TextProps.style
  resize: string, // web-only
}
```

### value: ?string

The value to show for the text input. TextInput is a controlled component, which means the native value will be forced to match this prop if provided. Read about how [React form components](https://reactjs.org/docs/forms.html) work. To prevent user edits to the value set `editable={false}`.

## Instance methods

### blur: () => void

Blur the underlying DOM input.

### clear: () => void

Clear the text from the underlying DOM input.

### focus: () => void

Focus the underlying DOM input.

### isFocused: () => boolean

Returns `true` if the input is currently focused; `false` otherwise.
