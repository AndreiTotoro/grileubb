# GrileUBB

A web application for practicing admission exam questions for Babeș-Bolyai University.

## Features

- User authentication with Auth.js
- MongoDB database integration
- Practice questions for Mathematics and Informatics
- Track progress and statistics
- Responsive design

## Prerequisites

- Node.js (v18 or higher)
- MongoDB (local installation or MongoDB Atlas)

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/yourusername/grileubb.git
cd grileubb
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

Create a `.env.local` file in the root directory with the following variables:

```
MONGODB_URI=mongodb://localhost:27017/grileubb
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-change-in-production
```

4. Start MongoDB locally:

```bash
# Start MongoDB service
sudo service mongod start

# Or if you're using MongoDB as a Docker container
docker run -d -p 27017:27017 --name mongodb mongo:latest
```

5. Run the development server:

```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `/app` - Next.js app router pages and API routes
- `/components` - Reusable UI components
- `/lib` - Utility functions and database connection
- `/models` - MongoDB models
- `/types` - TypeScript type definitions

## Authentication

The application uses Auth.js (formerly NextAuth.js) for authentication with a credentials provider. Users can register and login with email and password.

## Database

MongoDB is used as the database with Mongoose as the ODM (Object Document Mapper). The database connection is established in `/lib/mongodb.ts`.

## License

MIT 