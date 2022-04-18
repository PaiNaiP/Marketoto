const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const config = require("./config.js");
const path = require("path");

const userRoutes = require("./Routes/user.js");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.set("view options", { layout: false });
console.log(path.resolve());
app.use(express.static(path.resolve() + "/"));

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: "." });
});

app.get("/login", (req, res) => {
  res.sendFile("authx.html", { root: "." });
});
app.get("/registration", (req, res) => {
  res.sendFile("registration.html", { root: "." });
});

app.use("/api", userRoutes.routes);

app.listen(config.port, () =>
  console.log(`Server is listening on port ${config.port}`)
);
