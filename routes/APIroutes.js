// GET /api/notes should read the db.json file and 
// return all saved notes as JSON.

// POST /api/notes should receive a new note to save on the request body, 
// add it to the db.json file, and then return the new note to the client. 
// find a way to give each note a unique id when it's saved 
// (look into npm packages that could do this for you).
const { v4: uuidv4 } = require('uuid');
const router = require('express').Router();

const {
  addNotes,
//   notesId,
//   removeNotes,
  validateNotes
} = require('../lib/notetaker.js');

const { notes } = require('../develop/db/db.json');

router.get('/notes', (req, res) => {
    res.json(notes);
  });
  
//   router.delete('/notesArray/:id', (req, res) => {
//     const result = notesId(req.params.id, notesArray);
//     const readNote = JSON.parse(fs.readFileSync("./db/db.json"));
//     const writeNote = fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify({notes: noteArray}, null, 2));

//     if (result) {
//       res.json(result);
//       writeNote;
//     } else {
//       res.send(404);
//     }
//   });

  router.post('/notes', (req, res) => {
    //requested newNotes
    const newNotes = req.body;
    //using npm pacakge uuid to assign a unique id to each one of the newNotes generated 
    newNotes.id = uuidv4();
    //reading data from the db.json file 
    const data = JSON.parse(fs.readFileSync("../develop/db/db.json"));
    //pushing newNotes into the db.json file (data)
    data.push(newNotes);

    //if does not equal newNotes (title, text, number) responds error 404
    if (!validateNotes (newNotes)) {
      res.status(400).send('Please enter a note with proper, title, text, and id');
    } else {
        //else addedNotes calls on the addNotes function for writing the file and 
        //calls on const newNotes for reading the notes, responds with the addedNote
      const addedNotes = addNotes( noteTaker, newNotes);
      res.json(addedNotes);
    }
  });

  module.exports = router;
  