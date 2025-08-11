import express from 'express';
import dotenv from 'dotenv';

dotenv.config();  // Simplified config

const app = express();
const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.send('Hello World!');
   console.log(`Server running at http://localhost:${port}`);
});

// Export the Express app for Vercel
export default app;