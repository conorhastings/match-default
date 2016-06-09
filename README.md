### match-default

<img src="https://travis-ci.org/conorhastings/match-default.svg?branch=master" />

Pass in a string, and object contain functions that could possibly match string + a default function denoted with the _ key. Made because I think this looks really nice with redux.

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

### Currying

The function can also be curried by passing in a single argument, a string or an object. if passing in a string, a function will be returned expecting an object argument. In the more common case, just passing in an object, a function will be returned expecting a single argument of a string.

```js
  import match from 'match-default';
  const matcher = match('cool');
  const myMatch = matcher({cool: () => 'wow', _: () => {}});
  console.log(myMatch) // myMatch === 'wow'
  ```

  ```js
  import match from 'match-default';
  const matcher = match({cool: () => 'wow', _: () => {}});
  const myMatch = matcher('cool');
  console.log(myMatch) //myMatch === 'wow'
  ```
