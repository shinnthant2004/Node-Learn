const internals = require("./internals/index");

const MakeRequest = () => {
  internals.send();
  return internals.read();
};

const result = MakeRequest();

console.log(result);
