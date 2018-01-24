var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var NoteSchema = new Schema({
    text: String,

}, { timestamps: true })

mongoose.model('Note', NoteSchema);