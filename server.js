const express = require("express");
const connectDB = require("./config/db");
const path = require("path");

const app = express();
connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build/")));
}

//Define Routes
app.use("/api/pokemon", require("./routes/api/pokemon"));
