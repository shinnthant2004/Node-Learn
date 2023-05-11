const request = require("./request");
const response = require("./response");

const MakeRequest = () => {
  request.send();
  return response.read();
};

const result = MakeRequest();

console.log(result);
