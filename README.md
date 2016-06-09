### match-default

<img src="https://travis-ci.org/conorhastings/match-default.svg?branch=master" />

Pass in a string, and object contain functions that could possibly match string + a default function denoted with the _ key. Made because I think this looks really nice with redux.

### use

`npm i --save match-default`

```js
import match from 'match-default';
const data = match({
	a: () => 'nice',
	b: () => 'cool',
	string: () => 'woo',
	_: () => ''
}, 'string');
```

### Currying

The function can also be curried by passing in a single argument of an object. A function will be returned expecting a single argument of a string to match against the provided object.

  ```js
  import match from 'match-default';
  const matcher = match({cool: () => 'wow', _: () => {}});
  const myMatch = matcher('cool');
  console.log(myMatch) //myMatch === 'wow'
  ```
