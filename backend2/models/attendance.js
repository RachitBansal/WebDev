const mongoose = require('mongoose')

const Schema = mongoose.Schema
const Attendance = new Schema({
    name: String,
    attendance: String
});

const AttModel = mongoose.model("User", Attendance)