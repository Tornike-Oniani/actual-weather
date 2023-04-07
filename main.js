const express = require("express");
const routes = require("./adapters/express/routes");

const app = express();
app.use(express.json());

app.use(express.static("public"));

app.use("/", routes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
