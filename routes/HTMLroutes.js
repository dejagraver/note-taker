const express = require('express');
const router = express.Router();
const path = require('path');

// GET /notes should return the notes.html file.
router.get('/notes', (req, res)=>{
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

// GET * should return the index.html file.
router.get('*', (req, res)=>{
    console.log(path.join(__dirname, '../public/index.html'))
    res.sendFile(path.join(__dirname, '../public/index.html'));
});


router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router;