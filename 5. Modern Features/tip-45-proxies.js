"use strict";

// Proxy objects
const target = {
  name: "John",
  age: 30,
};

const handler = {
  get: function (target, prop) {
    console.log(`Accessing property: ${prop}`);
    return target[prop];
  },
  set: function (target, prop, value) {
    console.log(`Setting property: ${prop} = ${value}`);
    target[prop] = value;
    return true;
  },
};

const proxy = new Proxy(target, handler);
proxy.name; // ✅ Logs: "Accessing property: name"
proxy.age = 31; // ✅ Logs: "Setting property: age = 31"
