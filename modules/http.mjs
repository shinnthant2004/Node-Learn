import { send } from "./request.mjs";
import { read } from "./response.mjs";

const MakeRequest = () => {
  send();
  return read();
};

const result = MakeRequest();

console.log(result);
