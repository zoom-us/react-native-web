# Switch

This is a controlled component that requires an `onValueChange` callback that updates the value prop in order for the component to reflect user actions. If the value prop is not updated, the component will continue to render the supplied value prop instead of the expected result of any user actions.

## Props

### ...ViewProps

### activeThumbColor: ?color = #009688

The color of the thumb grip when the switch is turned on. (Web-only)

### activeTrackColor: ?color = #A3D3CF

The color of the track when the switch is turned on. (Web-only, equivalent to React Native's `onTintColor`)

### disabled: ?boolean = false

If `true`, the user won't be able to interact with the switch.

### onValueChange: ?function

Invoked with the new value when the value changes.

### thumbColor: ?color = #FAFAFA

The color of the thumb grip when the switch is turned off. (Web-only, equivalent to React Native's `thumbTintColor`)


### trackColor: ?color = #939393

The color of the track when the switch is turned off. (Web-only, equivalent to React Native's `tintColor`)

### value: ?boolean = false

The value of the switch. If `true` the switch will be turned on.

## Notes

Custom sizes can be created using styles.

```
<Switch style={{ height: 30 }} />
```
