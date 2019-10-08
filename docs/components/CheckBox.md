# CheckBox

This is a controlled component that requires an `onValueChange` callback that
updates the value prop in order for the component to reflect user actions. If
the `value` prop is not updated, the component will continue to render the
supplied `value` prop instead of the expected result of any user actions.

## Props

### ...ViewProps

### color: ?color

Customize the color of the checkbox. (Web-only)

### disabled: ?boolean = false

If true, the user won't be able to interact with the checkbox.

### onChange: ?function

Invoked with the event when the value changes.

### onValueChange: ?function

Invoked with the new value when the value changes.

### value: ?boolean = false

The value of the checkbox. If `true` the checkbox will be checked.

## Notes

The checkbox size can be controlled by changing the `height` and `width` style
properties.
