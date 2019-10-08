# Text

Text is component for displaying text. It supports style, basic touch handling,
and inherits typographic styles from ancestor elements.

Text is unique relative to layout: child elements use text layout ("inline")
rather than flexbox layout. This means that elements inside of a Text are not
rectangles, as they wrap when reaching the edge of their container.

NOTE: Text currently transfers all other props to the rendered HTML element.

## Props

### accessibilityLabel: ?string

Overrides the text that is read by a screen reader when the user interacts with
the element. (This is implemented using `aria-label`.)

### accessibilityLiveRegion: 'assertive' | 'none' | 'polite'

Indicates to assistive technologies whether to notify the user when the view
changes. The values of this attribute are expressed in degrees of importance.
When regions are specified as polite (recommended), updates take low priority.
When regions are specified as assertive, assistive technologies will interrupt
and immediately notify the user. (This is implemented using `aria-live`.)

### accessibilityRole: ?roles

Allows assistive technologies to present and support interaction with the view
in a manner that is consistent with user expectations for similar views of that
type. For example, marking a touchable view with an `accessibilityRole` of
`button`. (This is implemented using ARIA roles.)  

### accessible: ?boolean

When `true`, indicates that the view is an accessibility element (i.e.,
focusable) and groups its child content. By default, all the touchable elements
and elements with `accessibilityRole` of `button` and `link` are accessible.
(This is implemented using `tabindex`.)

### children: ?any

Child content. Nested text components will inherit the styles of their parents
(only `backgroundColor` is inherited from non-`Text` parents).

### importantForAccessibility: 'auto' | 'no' | 'no-hide-descendants' | 'yes'

A value of `no` will remove the element from the tab flow.

A value of `no-hide-descendants` will hide the element and its children from
assistive technologies. (This is implemented using `aria-hidden`.)

### nativeID: ?string

Used to locate this view from any native DOM code, or to define accessibility
relationships. This is rendered to the native `id` DOM attribute

### numberOfLines: ?number

Truncates the text with an ellipsis after this many lines.

### onBlur: ?function

### onContextMenu: ?function

### onFocus: ?function

### onLayout: ?function

Invoked on mount and layout changes, where `x` and `y` are the offsets from the parent node.

```
{ nativeEvent: { layout: { x, y, width, height } } }
```

### onPress: ?function

Called when the `Text` is pressed.

### selectable: ?boolean

When `false`, the text is not selectable.

### style: ?style

```
{
  ...ViewProps.style,
  color: color,
  fontFamily: string,
  fontFeatureSettings: string, // web-only
  fontSize: number | string,
  fontStyle: string,
  fontVariant: Array<string>,
  fontWeight: string,
  letterSpacing: string,
  lineHeight: string,
  textAlign: "center" | "end" | "inherit" | "justify" | "justify-all" | "left" | "right" | "start",
  textAlignVertical: string,
  textDecorationColor: color,
  textDecorationLine: string,
  textDecorationStyle: string,
  textIndent: string, // web-only
  textOverflow: string, // web-only
  textRendering: string, // web-only
  textShadowColor: color,
  textShadowOffset: { height: number, width: number },
  textShadowRadius: number | string,
  textTransform: string,
  unicodeBidi: string, // web-only
  whiteSpace: string,
  wordBreak: "normal" | "break-all" | "break-word" | "keep-all", // web-only
  wordWrap: string, // web-only
  writingDirection: string
}
```

### testID: ?string

Used to locate this view in end-to-end tests. The test ID is rendered to a
`data-testid` DOM attribute.
