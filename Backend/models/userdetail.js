const mongoose = require("mongoose")
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: true,
    }
})
const userModel = mongoose.model("user_details", userSchema)
module.exports = userModel