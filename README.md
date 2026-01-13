# FlightLog API

A RESTful API for logging, tracking, and managing flight records.  
Designed to support features such as flight history, aircraft details, and pilot logs.

## Tech Stack
- Node.js
- Express
- PostgreSQL
- Knex.js
- dotenv (for environment variables)


## Deployed Link
[FlightLog API](https://flight-log-api.vercel.app/api/flights)  

## Getting Started

1. Clone the repository:
   ```
   git clone

2. Install dependencies:
   ```
   npm install

3. Setup environment variables in a .env file:
    ```
    PORT=5000
    DB_HOST=localhost
    DB_USER=your_db_user
    DB_PASSWORD=your_db_password
    DB_NAME=flight_log
    DB_PORT=5432

4. Run migrations and seeds for development:
    ```
    npx knex migrate:latest --env development
    npx knex seed:run --env development

5. Start the server:
    ```
    npm start

## Flights API Endpoints

- `POST /api/flights` – Create a flight  
- `GET /api/flights` – Get all flights  
- `DELETE /api/flights/:id` – Delete a flight by ID

