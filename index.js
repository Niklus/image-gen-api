const express = require("express");
const cors = require("cors");

const app = express();
const corsOptions = {
  origin: "https://image-gen.deno.dev",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/openai", require("./routes/openaiRoutes"));

module.exports = app;
