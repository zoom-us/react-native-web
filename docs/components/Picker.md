# Picker

Renders the native `<select>` component.

## Props

### ...ViewProps

### children: ?Array<Picker.Item>

The items to display in the picker.

```
<Picker>
  <Picker.Item label="Goblet of Fire" />
  <Picker.Item label="Order of the Phoenix" />
</Picker>
```

### enabled: ?boolean

If set to `false`, the picker will be disabled, i.e., the user will not be able
to make a selection.

### onValueChange: ?(itemValue, itemIndex) => void

Callback for when an item is selected. This is called with the value and index
prop of the item that was selected.   

### selectedValue: ?string

Select the item with the matching value.

### style: ?style

```
{
  ...ViewProps.style
  color: color
}
```

### testID: ?string

Used to locate this view in end-to-end tests.


# Picker.Item

Individual selectable item in a `Picker`.

## Props

### color: ?color

Color of the item label. (Limited by browser support.)

### label: string

Text to display for this item.

### testID: ?string

Used to locate this view in end-to-end tests.

### value: ?number | string

The value to be passed to the picker's `onValueChange` callback when this item
is selected.
