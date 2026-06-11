import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import { connect } from 'mongoose';
import notesRoutes from './routes/notesRoutes.js';
import { connectDB } from './config/db.js';
import rateLimiter from './middleware/rateLimiter.js';


dotenv.config();


const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors()); // Enable CORS for all routes 
app.use(express.json()); // To parse JSON bodies 
app.use(rateLimiter); // Apply rate limiter middleware to all routes 


app.use("/api/notes", notesRoutes);


connectDB().then(() => {
  app.listen(PORT, () => {
  console.log('Server is running on port:', PORT);
});
});

