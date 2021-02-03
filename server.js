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

// let dataNotes = [];

// GET


// POST


// DELETE


// HTML GET ROUTES

