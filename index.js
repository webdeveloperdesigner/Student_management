const express = require('express');
const app = express();
const studentRoutes = require('./routes/students');
const db = require('./database/db');

app.use(express.json());


app.get('/', (req, res) => {
  res.send('Welcome to the Student Management API');
});

app.use('/students', studentRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
