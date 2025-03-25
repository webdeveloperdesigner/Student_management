const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: '127.0.0.1',  // Force IPv4 connection
  user: 'root',
  password: 'mysql',  // Replace with your actual MySQL password
  database: 'student_db',
  port: 3306  // Change if MySQL is running on a different port
});

connection.connect(err => {
  if (err) {
    console.error('Database connection failed:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

module.exports = connection;
