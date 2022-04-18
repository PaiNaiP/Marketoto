const { axios } = require("axios");

document.getElementById("insert").addEventListener("click", function () {
  console.log(1);
  axios.post("./api/register_via_email", {
    email: "a@a.c",
    password: "1",
    name: "alex",
    dateOfBirth: 1,
    sex: "male",
  });
  console.log(a);
});
