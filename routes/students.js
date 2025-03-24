const express = require('express');
const router = express.Router();
const db = require('../database/db');


router.get('/', (req, res) => {
    db.query('SELECT * FROM students', (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(results);
        }
    });
});


router.post('/', (req, res) => {
    const { name, age, grade } = req.body;
    db.query('INSERT INTO students (name, age, grade) VALUES (?, ?, ?)', 
             [name, age, grade], 
             (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ message: 'Student added successfully', id: results.insertId });
        }
    });
});

module.exports = router;