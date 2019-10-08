# ScrollView

A scrollable View that provides integration with the touch-locking responder
system. ScrollView's must have a bounded height: either set the height of the
view directly (discouraged) or make sure all parent views have bounded height
(e.g., transfer `{ flex: 1}` down the view stack).

## Props

### ...ViewProps

### contentContainerStyle: ?style

These styles will be applied to the scroll view content container which wraps all of the child views.

### horizontal: ?boolean = false

When `true`, the scroll view's children are arranged horizontally in a row instead of vertically in a column.

### keyboardDismissMode: ?enum('none', 'on-drag') = 'none'

Determines whether the keyboard gets dismissed in response to a scroll drag.

* `none` (the default): drags do not dismiss the keyboard.
* `on-drag`: the keyboard is dismissed when a drag begins.
* `interactive` (not supported on web; same as `none`)

### onContentSizeChange: ?function

Called when scrollable content view of the `ScrollView` changes. It's implemented using the `onLayout` handler attached to the content container which this `ScrollView` renders.

### onScroll: ?function

Fires at most once per frame during scrolling. The frequency of the events can
be controlled using the `scrollEventThrottle` prop.

Invoked on scroll with the following event:

```js
{
  nativeEvent: {
    contentOffset: { x, y },
    contentSize: { height, width },
    layoutMeasurement: { height, width }
  }
}
```

### pagingEnabled: ?boolean = false

When `true`, the scroll view snaps to individual items in the list when scrolling.

### scrollEnabled: ?boolean = true

When `false`, the content does not scroll.

### scrollEventThrottle: ?number = 0

This controls how often the scroll event will be fired while scrolling (as a
time interval in ms). A lower number yields better accuracy for code that is
tracking the scroll position, but can lead to scroll performance problems. The
default value is 0, which means the scroll event will be sent only once each
time the view is scrolled.

### stickyHeaderIndices: ?Array<number>

An array of child indices determining which children get docked to the top of
the screen when scrolling. For example, passing `stickyHeaderIndices=0` will cause
the first child to be fixed to the top of the scroll view. This property is not
supported in conjunction with horizontal.

## Instance methods

### getInnerViewNode: () => node

Returns a reference to the underlying content container DOM node within the `ScrollView`.

### getScrollableNode: () => node

Returns a reference to the underlying scrollable DOM node.

### getScrollResponder: () => ScrollResponder

Returns a reference to the underlying scroll responder, which supports
operations like `scrollTo`. All `ScrollView`-like components should implement
this method so that they can be composed while providing access to the
underlying scroll responder's methods.

### scrollTo: (options: { x: number = 0; y: number = 0; animated: boolean = true }) => void

Scrolls to a given `x`, `y` offset (animation depends on browser support for `scroll-behavior`).

### scrollToEnd: (options: { animated: boolean = true }) => void

Scrolls to the end of the scroll view.
