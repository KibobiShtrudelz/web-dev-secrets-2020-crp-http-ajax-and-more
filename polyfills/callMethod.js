const foo = function() {
  console.log(this);
};

foo();

const bar = {};

foo.call(bar);
