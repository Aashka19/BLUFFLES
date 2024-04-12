const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, "Please add the user name"]
        },
        roll_number: {
            type: String,
            required: [true, "Please add the user roll number"],
            unique: [true, "Roll number already registered"]
        },
        email: {
            type: String,
            required: [true, "Please add the user email address"],
            unique: [true, "Email address already taken"]
        },
        phone: {
            type: String,
            required: [true, "Please add the user phone number"]
        },
        branch: {
            type: String,
            required: [true, "Please add user branch"]
        },
        password: {

            type: String,
            required: [true, "Please add user password"]
        }
    },
    {
        timestamp:  true
    }
);

 module.exports = mongoose.model("User", userSchema);