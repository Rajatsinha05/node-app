const express = require("express");
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.json({
    msg: "working",
  });
});

app.get("/test", (req, res) => {
  res.send("testing");
});
app.post("/", (req, res) => {
  res.send(req.body);
});
app.get("/aws", (req, res) => {
  res.send({
    msg: "aws",
  });
});
app.listen(8090, () => {
  console.log("listening on port 8090");
});
