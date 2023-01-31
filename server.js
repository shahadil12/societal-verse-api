const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");

const auth = require("./src/routes/auth");

dotenv.config();
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/", auth);

app.listen(process.env.PORT, () => {
  console.log(`Server running at ${process.env.PORT}...`);
});
