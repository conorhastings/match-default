module.exports = function(argument1, argument2) {
  if (arguments.length === 2) {
    return match(argument1, argument2);
  }
  else if (arguments.length === 1 && typeof argument1 === 'string') {
    return function(object) {
      return match(argument1, object);
    }
  }
  else if (arguments.length === 1 && typeof argument1 === 'object' && !Array.isArray(argument1)) {
    return function(string) {
      return match(string, argument1);
    }
  }
  else {
    throw new Error('invalid number of arguments, must provide 1 or 2 arguments, you have provided ' + arguments.length);
  }
}

function match(string, object) {
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