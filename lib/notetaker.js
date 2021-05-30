const fs = require('fs');
const path = require('path');


//DELETE /api/notes/:
//id should receive a query parameter containing the id of a note to delete. 
//In order to delete a note, 
//you'll need to read all notes from the db.json file, 
//remove the note with the given id property, 
//and then rewrite the notes to the db.json file.

// function removeNotes (storedNote, id) {
  
// }

//stored note Id starting at 0 
//incrementing by one for each time addNote is engaged
//returning to the storedNote array
function notesId(storedNote, id) {
    for (var i = 0; i < storeNote.length; i++) {
        if (storedNote[i].id == Number(id)) {
            return storedNote[i];
        }
    }
    return false;
}

//add new note to db.json through creating another array for storedNote  's
function addNotes (storedNote, note) {
//push notes into storedNote
  storedNote.push(note);
  fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    //stringify the new notes pushed into the storedNote
    //notes Array hold the the pushed notes 
    JSON.stringify({ notes: storedNote }, null, 2)
  );
  return note;
}

//validate note
//if note entry for text and title does not equal a string, return false 
function validateNotes(note) {
  if (!note.text || note.text !== 'string') {
    return false;
  }
  if (!note.title || typeof note.title !== 'string') {
    return false;
  }
  if (isNaN(note.id)) {
    return false;
  }
  return true;
}

module.exports = {
//   removeNote,
  notesId,
  addNotes,
  validateNotes
};
