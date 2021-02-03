const express = require('express');
const fs = require('fs');
const { get } = require('http');
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
app.post('/api/notes', (req, res) => {
    try {
        dataNotes = fs.readFileSync('./Develop/db/db.json', 'utf8') ;
        console.log(dataNotes);

        dataNotes = JSON.parse(dataNotes);
        req.body.id = dataNotes.length;
        dataNotes.push(req.body); //pushing user input
        dataNotes = JSON.stringify(dataNotes);

        fs.writeFile('./Develop/db/db.json', dataNotes, 'utf8', (err) => {
            if(err) throw err;
        });

        res.json(JSON.parse(dataNotes));

    } catch (err) {
        throw err;
        console.log(err);
    }
})

// DELETE
app.delete('/api/notes/:id', (req, res) => {
    try {
        dataNotes = fs.readFileSync('./Develop/db/db.json', 'utf8');
        dataNotes = JSON.parse(dataNotes);
        dataNotes = dataNotes.filter((note) => {
            return note.id = req.params.id;
        });
        dataNotes = JSON.stringify(dataNotes);
      fs.writeFile('./Develop/db/db.json', dataNotes, 'utf8', (err) => {
        if (err) throw err;
      });

      res.send(JSON.parse(dataNotes));

    } catch (err) {
      throw err;
      console.log(err);
    }
  });

// HTML GET ROUTES
app.get('/notes', (req, res) => {

})