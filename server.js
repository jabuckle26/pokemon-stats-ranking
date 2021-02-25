const express = require("express");
const connectDB = require("./config/db");

const app = express();
connectDB();

//Init Middleware
// This line lets us get the data in the routes
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("API running"));

//Define Routes
app.use("/api/pokemon", require("./routes/api/pokemon"));

app.use(express.static("client/build"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
