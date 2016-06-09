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
  assert.throws(() => match('string', {a: () => ""}), 'must provide default function case with _ object key');
  assert.end();
});

test('it should throw if default is not a function', assert => {
  assert.throws(
    () => match('string', {a: () => "", _: "s"}), 
    'default case must be a function, provided type is: string'
  );
  assert.end();
});

test('default should be called if no match', assert => {
  assert.ok(match('string', {a: () => "", _: () => "cool"}) === "cool", "default func called");
  assert.end();
});

test('should call matched function if there is a match', assert => {
  assert.ok(match('string', {string: () => "cool", _: () => ""}) === "cool", "matched func called");
  assert.end();
});

test('should throw if object has match but match is not a function', assert => {
  assert.throws(
    () => match('string', {string: "i am a string", _: () => ""}), 
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

test('it should return a function if given single string argument', assert => {
  const matcher = match('string');
  assert.ok(typeof matcher === 'function', 'typeof matcher is a function');
  assert.end();
});

test('it should return a function if given single object argument', assert => {
  const matcher = match({cool: () => "cool", _: () => {}});
  assert.ok(typeof matcher === 'function', 'typeof matcher is a function');
  assert.end();
});

test('should match with originally passed in string and currently passed in obj', assert => {
  const matcher = match('cool');
  const myMatch = matcher({cool: () => "cool", _: () => {}});
  assert.equal(myMatch, 'cool', 'returns correct return from matched string');
  assert.end();
});

test('it should return a function if given single object argument', assert => {
  const matcher = match({cool: () => "cool", _: () => {}});
  const myMatch = matcher('cool');
   assert.equal(myMatch, 'cool', 'returns correct return from matched string');
  assert.end();
});