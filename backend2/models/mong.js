const mongoose = require('mongoose')

const Schema = mongoose.Schema
const BlogPost = new Schema({
    title: String,
    body: String,
    date: Date,
    category: String
});

const BlogModel = mongoose.model("User", BlogPost)