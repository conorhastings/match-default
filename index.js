module.exports = function(object, string) {
  if (arguments.length === 2) {
    return match(object, string);
  }
  else if (arguments.length === 1 && typeof object === 'object' && !Array.isArray(object)) {
    return function(string) {
      return match(object, string);
    }
  }
  else if (arguments.length === 1) {
    throw new Error('to curry function, single argument must be an object. provided type is: ' + typeof object);
  }
  else {
    throw new Error('invalid number of arguments, must provide 1 or 2 arguments, you have provided ' + arguments.length);
  }
}

function match(object, string) {
  if (!string || !object) {
    throw new Error('must provide string and object arguments');
  }
  if (!object._) {
    throw new Error('must provide default function case with _ object key');
  }
  else if (typeof object._ !== 'function') {
    throw new Error('default case must be a function, provided type is: ' + typeof object._);
  }
  var fn = object[string];
  if (fn && typeof fn !== 'function') {
    throw new Error('matched argument must be a function for key ' + string + '. provided type is: ' + typeof fn);
  }
  else if(fn) {
    return fn();
  }
  return object._();
}