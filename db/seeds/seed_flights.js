/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

const flights = [
  {
    night_hours: 2,
    day_hours: 3,
    aircraft: 'Cessna 172',
    description: 'Cross-country flight training with instructor',
    date: '2026-01-12',
    start_location: 'Los Angeles, CA',
    end_location: 'San Diego, CA',
    role: 'student'
  },
  {
    night_hours: 1,
    day_hours: 4,
    aircraft: 'Piper PA-28',
    description: 'Solo practice flight focusing on navigation',
    date: '2026-01-10',
    start_location: 'San Diego, CA',
    end_location: 'El Centro, CA',
    role: 'pilot'
  },
  {
    night_hours: 3,
    day_hours: 0,
    aircraft: 'Diamond DA40',
    description: 'Touch-and-go practice for takeoffs and landings',
    date: '2026-01-08',
    start_location: 'San Francisco, CA',
    end_location: 'San Francisco, CA',
    role: 'student'
  },
  {
    night_hours: 3,
    day_hours: 1,
    aircraft: 'Cessna 182',
    description: 'Night cross-country flight with navigation instruments',
    date: '2026-01-09',
    start_location: 'Sacramento, CA',
    end_location: 'Redding, CA',
    role: 'pilot'
  },
  {
    night_hours: 0,
    day_hours: 5,
    aircraft: 'Piper PA-28',
    description: 'Solo flight to practice emergency procedures',
    date: '2026-01-07',
    start_location: 'San Diego, CA',
    end_location: 'Los Angeles, CA',
    role: 'student'
  }
];



exports.seed = async function(knex) {
  await knex('flights').del();
  await knex('flights').insert(flights);
};