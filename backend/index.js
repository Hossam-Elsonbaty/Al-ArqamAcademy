import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
dotenv.config()
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;
app.get('/', (request, response) => {
  console.log(request);
  return response.status(234).send('Welcome To MERN Stack Tutorial');
});

app.listen(PORT, () => {
  connectDB();
  console.log(`App is listening to port`);
});
