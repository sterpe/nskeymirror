# nsKeyMirror

### Install
	npm install nskeymirror

### API
	Object: function (obj [, namespace]) {}

### Example
```javascript
var nsKeyMirror = require('nskeymirror');

var keys = nsKeyMirror({
	foo: 0,
	bar: 0,
	baz: 0
}, "quux");
/*
 * {
 *   foo: "foo@quux",
 *   bar: "bar@quux",
 *   baz: "baz@quux"
 * }
 */
```
