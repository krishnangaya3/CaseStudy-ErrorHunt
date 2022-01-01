const mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost:27017/Library');
//Part #1, Point 5
mongoose.connect('mongodb+srv://gaya3:gaya397@cluster0.bjgsw.mongodb.net/Library?retryWrites=true&w=majority');
const Schema = mongoose.Schema;


const BookSchema = new Schema({
    title : String,
    author: String,
    image: String,
    about: String
});

const bookdata = mongoose.model('bookdata',BookSchema);

module.exports = bookdata;