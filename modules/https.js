const request = require("./request");
const response = require("./response");

const { text } = require("./request");

const MakeRequest = () => {
  request.send();
  return response.read();
};

const result = MakeRequest();

console.log(require.cache);
