const express = require('express');
const fs = require('fs');
const path = require('path');
const db = 'db/db.json';
const app = express();
const PORT = process.env.PORT || 3000;

// PARSING, STATIC AND ROUTES
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));

let dataNotes = [];

// GET
app.get('/api/notes', (req, res) => {
    const files = fs.readFileSync(db, 'utf8');
    res.json(JSON.parse(file));
});

// POST


// DELETE
app.delete('/api/notes/:id', (req, res) => {
    fs.readFile(db, 'utf-8', (err, data) => {
        if(err) throw err;
        let id = req.params.id;
    })
})


// HTML GET ROUTES

