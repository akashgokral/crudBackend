const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const router = require("./Routes/userDetails");

require("dotenv").config();

app.use(express.json());
app.use(cors());
app.use(router);



const port = process.env.PORT || 5000;
const uri = process.env.DB_URL

app.listen(5000, console.log(` Server running on port ${port}`));

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Mongo DB connection successful"))
    .catch((err) => console.log("Mongo DB connection failed", err.message));