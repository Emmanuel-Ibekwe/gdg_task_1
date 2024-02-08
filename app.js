const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const authRoutes = require("./routes/auth");

dotenv.config();
const app = express();
const { PORT } = process.env;

app.use(bodyParser.json());

app.use("/api/v1", authRoutes);

app.use((error, req, res, next) => {
  if (process.env.NODE_ENV === "development") {
    console.log(error);
  }
  const message = error.message || "Server error";
  const status = error.status || 500;
  res.status(status).json({ message: message });
});
app.listen(PORT, () => {
  console.log(`server running at port: ${PORT}`);
});
