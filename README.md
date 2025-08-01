# Vehicle Rental Platform

This project is a vehicle rental platform built with Node.js and Express, utilizing SQLite as the database. The platform allows users to manage vehicles, clients, and rentals efficiently.

## Features

1. **Vehicle Management**
   - Add vehicles to the available list.
   - List all available vehicles.
   - Search for a specific vehicle.
   - Search for vehicles by brand.

2. **Client Management**
   - Register clients to the platform.
   - List all registered clients.
   - Search for a specific client.

3. **Rental Management**
   - Rent vehicles to registered clients.
   - List clients who have rented a specific vehicle.
   - List vehicles rented by a specific client.
   - Handle the return of rented vehicles.

## Project Structure

```
vehicle-rental-platform
├── src
│   ├── app.js                # Entry point of the application
│   ├── controllers           # Contains controllers for vehicles, clients, and rentals
│   ├── models                # Contains models for vehicle, client, and rental data
│   ├── routes                # Contains route definitions for the API
│   └── database              # SQLite database file
├── package.json              # NPM configuration file
├── README.md                 # Project documentation
└── .gitignore                # Git ignore file
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd vehicle-rental-platform
   ```

3. Install the dependencies:
   ```
   npm install
   ```

## Usage

1. Start the application:
   ```
   npm start
   ```

2. The API will be available at `http://localhost:3000`.

## API Endpoints

- **Vehicles**
  - `POST /vehicles` - Add a new vehicle
  - `GET /vehicles` - List all available vehicles
  - `GET /vehicles/search` - Search for a specific vehicle
  - `GET /vehicles/brand` - Search for vehicles by brand

- **Clients**
  - `POST /clients` - Register a new client
  - `GET /clients` - List all registered clients
  - `GET /clients/search` - Search for a specific client

- **Rentals**
  - `POST /rentals` - Rent a vehicle to a client
  - `GET /rentals/vehicle/:id` - List clients who rented a specific vehicle
  - `GET /rentals/client/:id` - List vehicles rented by a specific client
  - `PUT /rentals/return` - Handle the return of a rented vehicle

## License

This project is licensed under the MIT License.