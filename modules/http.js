const { send } = require("./request");
const response = require("./response");

const { text } = require("./request");

const MakeRequest = () => {
  send();
  return response.read();
};

const result = MakeRequest();

console.log(result);
