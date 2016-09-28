'use strict'

function __extend(target, source, propNames) {
  if (!source) return target;
  if (propNames) {
    propNames.forEach(function (propName) {
      target[propName] = source[propName];
    });
  } else {
    for (var propName in source) {
      if (__hasOwnProperty(source, propName)) {
        target[propName] = source[propName];
      }
    }
  }
  return target;
}

function parentClass () {
    
    this.test = function () {
        console.log('I am the dad');
    };

    this.nestedCall = function () {
        this.test();
    };

}

var instance = new parentClass();

function childClass () {
    this.name = "Child";
}

// childClass.prototype.__proto__ = instance;
// childClass.prototype.constructor = childClass;

var childInstance = new childClass();
childInstance.test = function () {
    console.log('I am the child');
};

__extend(childInstance, instance, ['nestedCall']);

console.log('hello');

instance.nestedCall();

childInstance.test();
childInstance.nestedCall();