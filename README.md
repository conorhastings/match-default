### match-default

<img src="https://travis-ci.org/conorhastings/match-default.svg?branch=master" />

Pass in a string, and object contain functions that could possibly match string + a default function. Made because I think this looks really nice with redux.

### use

`npm i --save match-default`

```js
import match from 'match-default';
const data = match('string', {
	a: () => 'nice',
	b: () => 'cool',
	string: () => 'woo',
	_: () => ''
});
```