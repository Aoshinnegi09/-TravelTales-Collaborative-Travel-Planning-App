const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', // replace with your password
    database: 'traveltales'
});

app.get('/trips', (req, res) => {
    db.query('SELECT * FROM Trip', (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
});

app.post('/trip', (req, res) => {
    const { title, created_by } = req.body;
    db.query('INSERT INTO Trip (title, created_by) VALUES (?, ?)', [title, created_by], (err, result) => {
        if (err) return res.status(500).send(err);
        res.json({ trip_id: result.insertId });
    });
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
