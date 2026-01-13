require('dotenv').config();
const express = require('express');
const cors = require('cors');
const knex = require('./knex');

const app = express();
app.use(cors());
app.use(express.json());

// Root
app.get('/', (req, res) => {
  res.send('Flightlog API is live! Use /api/flights for data.');
});

// GET all flights
app.get('/api/flights', async (req, res) => {
  try {
    const flights = await knex('flights').select('*');
    res.json(flights);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch flights' });
  }
});

// POST a flight
app.post('/api/flights', async (req, res) => {
  const flightFields = [
    'night_hours',
    'day_hours',
    'aircraft',
    'description',
    'date',
    'start_location',
    'end_location',
    'role'
  ];

  const flightData = {};
  for (const field of flightFields) {
    flightData[field] = req.body[field];
  }

  const missing = flightFields.filter(
    field => flightData[field] == null || flightData[field] === ''
  );

  if (missing.length) {
    return res.status(400).json({
      error: `Missing required fields: ${missing.join(', ')}`
    });
  }

  try {
    const [newFlight] = await knex('flights').insert(
      flightData,
      ['id', ...flightFields, 'created_at', 'updated_at']
    );

    res.status(201).json(newFlight);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to add flight' });
  }
});

// Delete a flight
app.delete('/api/flights/:id', async (req, res) => {
  const { id } = req.params;

  const flightFields = [
    'id',
    'night_hours',
    'day_hours',
    'aircraft',
    'description',
    'date',
    'start_location',
    'end_location',
    'role',
    'created_at',
    'updated_at'
  ];

  if (!id) {
    return res.status(400).json({ error: 'Flight id is required' });
  }

  try {
    const [deletedFlight] = await knex('flights')
      .where({ id })
      .del(flightFields); 

    if (!deletedFlight) {
      return res.status(404).json({ error: 'Flight not found' });
    }

    res.status(200).json(deletedFlight);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to delete flight' });
  }
});


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
