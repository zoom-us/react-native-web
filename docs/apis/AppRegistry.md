# AppRegistry

AppRegistry is the control point for registering, running, prerendering, and unmounting all apps. App root components should register themselves with `AppRegistry.registerComponent`. Apps can be run by invoking `AppRegistry.runApplication`.

## Methods

### static getAppKeys: () => Array<string>

Returns all registered app keys

### static getApplication: (appKey: string, appParameters: ?object) => { element: ReactElement; getStyleElement: (props) => ReactElement }

Use this for server-side rendering to HTML (Web-only). Returns an object containing the given application's element and a function to get styles once the element is rendered. Additional props can be passed to the `getStyleElement` function, e.g., your CSP policy may require a `nonce` to be set on style elements.

```
const { element, getStyleElement } = AppRegistry.getApplication("MyApp");
```

### static registerComponent: (appKey: string, getComponentFunc: ComponentProvider) => void

Register a component provider under the given appKey.

```
AppRegistry.registerComponent("MyApp", () => AppComponent)
```

### static registerConfig: (config: Array<AppConfig>) => avoid

Register multiple applications. AppConfig type is:

```
{
  appKey: string;
  component: ComponentProvider;
  run?: function
}
```

### static registerRunnable: (appKey: string, run: Function) => void

Register a custom render function for an application. The function will receive
the appParameters passed to runApplication.

### static runApplication: (appKey: string, appParameters: object) => void

Runs the application that was registered under appKey. The `appParameters` must
include the `rootTag` into which the application is rendered, and optionally any
`initialProps` or render callback.

```
AppRegistry.runApplication('MyApp', {
  initialProps: {},
  rootTag: document.getElementById('react-root'),
  callback: () => { console.log('React rendering has finished') }
})
```

### static setComponentProviderInstrumentationHook: (componentProvider: func) => Component

### static setWrapperComponentProvider: (appParameters: object) => Component

### static unmountApplicationComponentAtRootTag: (rootTag: HTMLElement) => void

To "stop" an application when a view should be destroyed, call
`AppRegistry.unmountApplicationComponentAtRootTag` with the tag that was passed
into `runApplication`.
