Array.prototype.forEach = function(callback, argThis) {
  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }

  const len = this.length;

  for (var i = 0; i < len; i++) {
    callback.call(argThis, this[i], i, this);
  }
};

const arr = ["milk", "honey", "shugar"];

arr.forEach(function(item, idx) {
  console.log(this);
  console.log(item, idx);
}, arr);
