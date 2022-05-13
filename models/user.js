const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, minlength: 3, maxlength: 200, unique: true },
    salary: { type: Number, required: true },
    designation: { type: String, required: true },
});

const User = mongoose.model("users", userSchema)
exports.User = User;