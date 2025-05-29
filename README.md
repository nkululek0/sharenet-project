# Vue Sharenet Project

## Installation
Please run `npm install` on this current root directory and <b>also</b> run `npm install` in the following directories:
- ./frontend
- ./backend

Once `npm install` is ran at all 3 places, navigate to the `/backend` and create an `.env` file where the following variables are created:
- `SERVER_PORT` (Refers to the server port that the backend will be ran)
- `DB` (Refers to the database schema, <b>Please ensure that this this schema already exists on the database you plan on running this application on</b>)
- `DB_USER` (Refers to the username of the database)
- `DB_PASSWORD` (Refers to the password of the database user)
- `DB_HOST` (Refers to the host/location where database is running)
- `DB_PORT` (The port of which the database is running on)

## Running The Project
Navigate back to the project's main root directory (where this `README.md` file is located) and run the following command to execute the entire project:
- `npm start`