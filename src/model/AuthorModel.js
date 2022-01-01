const mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost:27017/Library');
//Part #1, Point 5
mongoose.connect('mongodb+srv://gaya3:gaya397@cluster0.bjgsw.mongodb.net/Library?retryWrites=true&w=majority');
const Schema = mongoose.Schema;


const AuthorSchema = new Schema({
    title : String,
    image: String,
    about: String
});

const authordata = mongoose.model('authordata',AuthorSchema);

module.exports = authordata;