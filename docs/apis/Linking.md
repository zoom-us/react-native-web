# Linking

Linking gives you a general interface for securely opening external URLs from JavaScript.

## Methods

### canOpenURL: (url) => Promise<true>

### getInitialURL: () => Promise<string>

### openURL: (url: string) => Promise<>

Try to open the given url in a secure fashion. The method returns a `Promise`
object. If the url opens, the promise is resolved. If not, the promise is
rejected.
