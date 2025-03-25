const express = require('express');
const router = express.Router();
const db = require('../database/db');

// Get all students
router.get('/', (req, res) => {
  db.query('SELECT * FROM students', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

// Add a student
router.post('/', (req, res) => {
  const { name, age, grade } = req.body;
  db.query('INSERT INTO students (name, age, grade) VALUES (?, ?, ?)', [name, age, grade], (err, results) => {
    if (err) return res.status(500).send(err);
    res.json({ message: 'Student added', id: results.insertId });
  });
});

module.exports = router;
