# View

View is the fundamental UI building block. It is a component that supports
style, layout with flexbox, and accessibility controls. It can be nested inside
another View and has 0-to-many children of any type.

Also, refer to React Native's documentation about the Gesture Responder System.

NOTE: View currently transfers all other props to the rendered HTML element.

## Props

### accessibilityLabel: ?string

Overrides the text that's read by a screen reader when the user interacts with
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
type. For example, marking a touchable view with an accessibilityRole of button.
(This is implemented using ARIA roles.)  

### accessible: ?boolean

When `true`, indicates that the view is an accessibility element (i.e.,
focusable) and groups its child content. By default, all the touchable elements
and elements with `accessibilityRole` of `button` and `link` are accessible.
(This is implemented using `tabindex`.)

### children: ?element

Child content.

### hitSlop: ?object

This defines how far a touch event can start away from the view (in pixels).
Typical interface guidelines recommend touch targets that are at least 30 - 40
points/density-independent pixels.

For example, if a touchable view has a height of 20 the touchable height can be
extended to 40 with hitSlop.

```js
<View hitSlop={{top: 10, bottom: 10, left: 0, right: 0}} />
```

### importantForAccessibility: 'auto' | 'no' | 'no-hide-descendants' | 'yes'

A value of `no` will remove the element from the tab flow.

A value of `no-hide-descendants` will hide the element and its children from
assistive technologies. (This is implemented using `aria-hidden`.)

### nativeID: ?string

Used to locate this view from any native DOM code, or to define accessibility
relationships. This is rendered to the native `id` DOM attribute.

### onBlur: ?function

### onContextMenu: ?function

### onFocus: ?function

### onLayout: ?function

Invoked on mount and layout changes with `{ nativeEvent: { layout: { x, y,
width, height } } }`, where `x` and `y` are the offsets from the parent node.

### onMoveShouldSetResponder: ?function => boolean

Does this view want to "claim" touch responsiveness? This is called for every
touch move on the View when it is not the responder.

### onMoveShouldSetResponderCapture: ?function => boolean

If a parent View wants to prevent a child View from becoming responder on a
move, it should have this handler return true.

### onResponderGrant: ?function

The View is now responding to touch events. This is the time to highlight and
show the user what is happening. For most touch interactions, you'll simply want
to wrap your component in `TouchableHighlight` or `TouchableOpacity`.

### onResponderMove: ?function

The user is moving their finger.

### onResponderReject: ?function

Another responder is already active and will not release it to the View asking
to be the responder.

### onResponderRelease: ?function

Fired at the end of the touch.

### onResponderTerminate: ?function

The responder has been taken from the View.

### onResponderTerminationRequest: ?function

Some other View wants to become responder and is asking this View to release its
responder. Returning true allows its release.

### onStartShouldSetResponder: ?function => boolean

Does this view want to become responder on the start of a touch?

### onStartShouldSetResponderCapture: ?function => boolean

If a parent View wants to prevent a child View from becoming the responder on a
touch start, it should have this handler return true.

### pointerEvents: ?enum('auto', 'box-only', 'box-none', 'none') = 'auto'

Controls whether the View can be the target of touch events. The enhanced
pointerEvents modes provided are not part of the CSS spec, therefore,
pointerEvents is excluded from style. box-none preserves pointer events on the
element's children; box-only disables pointer events on the element's children.

### style: ?style

```
{
  ...CSSCustomProperties,
  alignContent: string,
  alignItems: string,
  alignSelf: string,
  animationDelay: string, // web-only
  animationDirection: string, // web-only
  animationFillMode: string, // web-only    
  animationKeyframes: Array<Object|string>, // web-only
  animationIterationCount: number | "infinite", // web-only
  animationPlayState: string, // web-only
  animationTimingFunction: string, // web-only
  backfaceVisibility: string,
  backgroundAttachment: string, // web-only
  backgroundBlendMode: string, // web-only
  backgroundClip: string, // web-only
  backgroundColor: color,
  backgroundImage: string, // web-only
  backgroundOrigin: string, // web-only
  backgroundPosition: string, // web-only
  backgroundRepeat: string, // web-only
  backgroundSize: string, // web-only
  borderColor: color,
  borderBottomColor: color,
  borderEndColor: color,
  borderLeftColor: color,
  borderRightColor: color,
  borderStartColor: color,
  borderTopColor: color,
  borderRadius: number | string,
  borderBottomEndRadius: number | string,
  borderBottomLeftRadius: number | string,
  borderBottomRightRadius: number | string,
  borderBottomStartRadius: number | string,
  borderTopEndRadius: number | string,
  borderTopLeftRadius: number | string,
  borderTopRightRadius: number | string,
  borderTopStartRadius: number | string,
  borderStyle: string,
  borderBottomStyle: string,
  borderEndStyle: string,
  borderLeftStyle: string,
  borderRightStyle: string,
  borderStartStyle: string,
  borderTopStyle: string,
  borderWidth: number | string,
  borderBottomWidth: number | string,
  borderEndWidth: number | string,
  borderLeftWidth: number | string,
  borderRightWidth: number | string,
  borderStartWidth: number | string,
  borderTopWidth: number | string,
  bottom: number | string,
  boxShadow: string, // web-only
  boxSizing: string, // web-only
  clip: string, // web-only
  cursor: string, // web-only
  direction: string,
  display: string,
  end: number | string,
  filter: string, // web-only
  flex: number,
  flexBasis: string,
  flexDirection: string,
  flexGrow: number,
  flexShrink: number,
  flexWrap: string,
  gridAutoColumns: string, // web-only
  gridAutoFlow: string, // web-only
  gridAutoRows: string, // web-only
  gridColumnEnd: string, // web-only
  gridColumnGap: string, // web-only
  gridColumnStart: string, // web-only
  gridRowEnd: string, // web-only
  gridRowGap: string, // web-only
  gridRowStart: string, // web-only
  gridTemplateColumns: string, // web-only
  gridTemplateRows: string, // web-only
  gridTemplateAreas: string, // web-only
  height: number | string,
  justifyContent: string,
  left: number | string,
  margin: number | string,
  marginBottom: number | string,
  marginEnd: number | string,
  marginHorizontal: number | string,
  marginLeft: number | string,
  marginRight: number | string,
  marginStart: number | string,
  marginTop: number | string,
  marginVertical: number | string,
  maxHeight: number | string,
  maxWidth: number | string,
  minHeight: number | string,
  minWidth: number | string,
  opacity: number,
  order: number,
  outlineColor: color, // web-only
  outlineOffset: number | string, // web-only
  outlineStyle: string, // web-only
  outlineWidth: number | string, // web-only
  overflow: string,
  overflowX: string, // web-only
  overflowY: string, // web-only
  overscrollBehavior: "auto" | "contain" | "none", // web-only
  overscrollBehaviorX: "auto" | "contain" | "none", // web-only
  overscrollBehaviorY: "auto" | "contain" | "none", // web-only
  padding: number | string,
  paddingBottom: number | string,
  paddingEnd: number | string,
  paddingHorizontal: number | string,
  paddingLeft: number | string,
  paddingRight: number | string,
  paddingStart: number | string,
  paddingTop: number | string,
  paddingVertical: number | string,
  perspective: string, // web-only
  perspectiveOrigin: string, // web-only
  position: string,
  right: number | string,
  shadowColor: color,
  shadowOffset: { height: number | string, width: number | string },
  shadowOpacity: number,
  shadowRadius: number | string,
  start: number | string,
  touchAction: string, // web-only
  top: number | string,
  transform: Array<Object>,
  transformOrigin: string, // web-only
  transformStyle: "flat" | "preserve-3d", // web-only
  transitionDelay: string, // web-only
  transitionDuration: string, // web-only
  transitionProperty: string, // web-only
  transitionTimingFunction: string, // web-only
  userSelect: string, // web-only
  visibility: string, // web-only
  width: number | string,
  willChange: string, // web-only
  zIndex: number
}
```

### testID: ?string

Used to locate this view in end-to-end tests. The test ID is rendered to a
`data-testid` DOM attribute.
