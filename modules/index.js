const { get } = require("http");

get("http://www.google.com", (res) => {
  res.on("data", (chunk) => {
    console.log(chunk, "data");
  });
  res.on("end", () => {
    console.log("No More Data");
  });
});
