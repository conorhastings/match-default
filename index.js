module.exports = function(string, object) {
  if (!string || !object) {
    throw new Error('must provide string and object arguments');
  }
  if (!object._ || typeof object._ !== 'function') {
    throw new Error('must provide default function case');
  }
  var fn = object[string] || object._;
  return fn();
}