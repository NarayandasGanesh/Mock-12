const mongoose = require("mongoose")

//schema

const userSchema = mongoose.Schema({
    name : String,
    email : String,
    password : String
})

const userModel = mongoose.model("user", userSchema)

module.exports = {
    userModel
}