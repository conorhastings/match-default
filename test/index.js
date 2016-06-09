var test = require('tape');
var match = require ("../index");

test('it should throw if no arguments are provided', assert => {
  assert.throws(
    () => match(), 
    'invalid number of arguments, must provide 1 or 2 arguments, you have provided 0'
  );
  assert.end();
});

test('it should throw if no default is provided', assert => {
  assert.throws(() => match({a: () => ""}, 'string'), 'must provide default function case with _ object key');
  assert.end();
});

test('it should throw if default is not a function', assert => {
  assert.throws(
    () => match({a: () => "", _: "s"}, 'string'), 
    'default case must be a function, provided type is: string'
  );
  assert.end();
});

test('default should be called if no match', assert => {
  assert.ok(match({a: () => "", _: () => "cool"}, 'string') === "cool", "default func called");
  assert.end();
});

test('should call matched function if there is a match', assert => {
  assert.ok(match({string: () => "cool", _: () => ""}, 'string') === "cool", "matched func called");
  assert.end();
});

test('should throw if object has match but match is not a function', assert => {
  assert.throws(
    () => match({string: "i am a string", _: () => ""}, 'string'), 
    'matched argument must be a function for key string. provided type is: string'
  );
  assert.end();
});

test('it should throw if more than 2 arguments are provided', assert => {
  assert.throws(
    () => match('string', {_: () => {}}, 'what ami'),
     'invalid number of arguments, must provide 1 or 2 arguments, you have provided 3'
  );
  assert.end();
});

test('it should throw if receiving a single string argument', assert => {
  assert.throws(
    () => match('string'), 
    'to curry function, single argument must be an object. provided type is: string'
  )
  assert.end();
});

test('it should return a function if given single object argument', assert => {
  const matcher = match({cool: () => "cool", _: () => {}});
  assert.ok(typeof matcher === 'function', 'typeof matcher is a function');
  assert.end();
});

test('it should return a function if given single object argument and match string against that obj', assert => {
  const matcher = match({cool: () => "cool", _: () => {}});
  const myMatch = matcher('cool');
   assert.equal(myMatch, 'cool', 'returns correct return from matched string');
  assert.end();
});