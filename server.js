const express = require("express");
const colors = require("colors");

const app = express();
app.get("/", (req, res) => {
  res.send("bibo");
});
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.post("/car", (req, res) => {
  let body1 = req.body;
  console.log(req.body.driss);
  res.send(req.body.driss);
});

app.listen(5000, () => {
  console.log(`Server is running on PORT 5000`.yellow.bold);
});
