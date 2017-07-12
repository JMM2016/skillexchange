// Controller for our notes
// ========================

var Note = require("../models/Note");
var makeDate = require("../scripts/date");

module.exports = {
  get: function(data, cb) {
    // Find all notes with the headline id from the article we passed
    Note.find({
      _headlineId: data._id
    }, cb);
  },
  // Save a note
  // Export this function as "save" (data = note info, cb = callback)
  save: function(data, cb) {

    // Make a newNote with the note model, saving the apropos info
    var newNote = {
      _headlineId: data._id,
      date: makeDate(),
      noteText: data.noteText
    };

    // Save the newNote we made to mongoDB with mongoose's save function
    Note.create(newNote, function(err, doc) {
      // Log any errors
      if (err) {
        console.log(err);
      }
      // Or just log the doc we saved
      else {
        console.log(doc);
        // Place the log back in this callback function
        // so it can be used with other functions asynchronously
        cb(doc);
      }
    });
  },
  delete: function(data, cb) {
    // Remove a Note using mongoose and our note Model,
    // searching by the article's id
    Note.remove({
      _id: data._id
    }, cb);
  }
};