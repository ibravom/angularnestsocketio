# Music Playback Project

This project loads a music playlist that allows users to play the songs and interact in real time with likes and count plays in real time. The project is divided into two main parts: the frontend developed in Angular and the backend developed in NestJS.

## Project Structure

The repository is organized into two main subdirectories:

- `relaxing-sound-app/`: Contains the Angular client source code that handles the user interface.
- `relaxing-sound-app-backend/`: Contains the NestJS server source code that manages the logic, database, and real-time communication.

## Technologies Used

- **Frontend**: Angular, Material, Socket.IO-client
- **Backend**: NestJS, TypeORM, MySQL, Socket.IO

## Main Features

- **Music Playback**: Users can listen to songs through the browser.
- **Real-Time Likes**: Users can like songs, and the count is updated in real time for all connected users.
- **Play Count**: The number of plays for each song is tallied and updated in real time.

## Installation and Execution

### Prerequisites

- Node.js
- Package manager npm or yarn
- MySQL (or adjust the settings for another database management system compatible with TypeORM)

### Environment Configuration

Before running the applications, it is necessary to set up the required environment variables. Refer to the specific `README.md` files in the `relaxing-sound-app/` and `relaxing-sound-app-backend/` folders for a detailed guide on the necessary environment variables.

### Installation Instructions

To get the project up and running, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/ibravom/prueba-fitco
   cd relaxing-sound-app
