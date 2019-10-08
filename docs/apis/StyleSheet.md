# StyleSheet

The StyleSheet abstraction converts predefined styles to (vendor-prefixed) CSS
without requiring a compile-time step. Styles that cannot be resolved outside of
the render loop (e.g., dynamic positioning) are usually applied as inline
styles.

## Methods

### compose: (style1, style2) => style

Combines two styles such that `style2` will override any styles in `style1`. If
either style is falsy, the other one is returned without allocating an array,
saving allocations and maintaining reference equality for PureComponent checks.

```
StyleSheet.compose(style1, style2);
```

### create: (obj: {[key: string]: any}) => Object

Each key of the object passed to `create` must define a style object. The
returned object replaces style objects with IDs

```
const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  },
  title: {
    fontSize: 19,
    fontWeight: 'bold',
  }
})
```

### flatten: (style) => Object

Lookup a style object by ID or flatten an array of styles into a single style
object.

```js
StyleSheet.flatten(styles.listItem);
StyleSheet.flatten([styles.listItem, styles.selectedListItem]);
```

## Properties

### absoluteFill: number

A very common pattern is to create overlays with position absolute and zero
positioning, so `absoluteFill` can be used for convenience and to reduce
duplication of these repeated styles.

```js
<View style={StyleSheet.absoluteFill} />
```

### absoluteFillObject: object

Sometimes you may want `absoluteFill` but with a couple tweaks -
`absoluteFillObject` can be used to create a customized entry in a `StyleSheet`

```js
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'transparent',
    top: 10
  }
});
```

### hairlineWidth: number

Enables borders of just one physical pixel on retina screens, otherwise it is
equal to a CSS value of 1px.
