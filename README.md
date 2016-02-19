### match-default

Pass in a string, and object contain functions that could possibly match string + a default function. Made because I think this looks really nice with redux.

### use

```js
import match from 'match-default';
const data = match('string', {
	a: () => 'nice',
	b: () => 'cool',
	string: () => 'woo',
	_: () => ''
});
```