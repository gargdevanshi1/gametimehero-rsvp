# Gametime Hero RSVP Service

A scalable, production-ready service for managing RSVP responses for events.

## Features

- **RSVP Updates:**  
  Add or update a player's RSVP status (Yes, No, Maybe).
  
- **Attendee Information:**  
  Retrieve confirmed attendees.
  
- **RSVP Status Counting:**  
  Retrieve counts for total, confirmed, and declined RSVP responses.
  
- **Production-Ready:**  
  
## Technologies Used

- **TypeScript**
- **Express**
- **Node.js**
- **ts-node & nodemon**
- **body-parser**
  
Structured to be integrated in real-world application with scope for future enhancements (e.g., database integration, authentication).

## API Endpoints

### Health Check
- **GET `/`**
    Returns a simple message indicating the API is up and running.

### RSVP Endpoints

#### **POST `/rsvp`**
- **Description:**
  Create or update an RSVP entry.

#### **GET `/rsvp/confirmed`**
- **Description:**
  Retrieves all players with a confirmed RSVP (i.e., where the status is "Yes").

#### **GET `/rsvp/counts`**
- **Description:**
  Returns counts of total RSVP entries, as well as counts for confirmed and declined responses.



