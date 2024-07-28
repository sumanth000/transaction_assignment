const db = require('../db');

exports.createTransaction = async (req, res) => {
  const { debit, credit, amount, date } = req.body;
  try {
    const result = await db.query(
      'INSERT INTO transactions (debit, credit, amount, date) VALUES ($1, $2, $3, $4) RETURNING *',
      [debit, credit, amount, date]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};


exports.getAllTransactions = async (req, res) => {
    try {
      const result = await db.query('SELECT * FROM transactions');
      res.status(200).json(result.rows);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  };