var test = require('tape');
var match = require ("../index");

test('it should throw if no arguments are provided', assert => {
  assert.throws(() => match());
  assert.end();
});

test('it should throw if no object is provided', assert => {
  assert.throws(() => match('string'));
  assert.end();
});

test('it should throw if no default is provided', assert => {
  assert.throws(() => match('string', {a: () => ""}));
  assert.end();
});

test('it should throw if default is not a function', assert => {
  assert.throws(() => match('string', {a: () => "", _: ""}));
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
  assert.throws(() => match('string', {string: "i am a string", _: () => ""}));
  assert.end();
});