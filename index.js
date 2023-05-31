import express from 'express';
import cors from 'cors';
import MahasiswaRoute from './routes/mahasiswaroutes.js';
const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());
app.use(MahasiswaRoute);

app.listen(PORT, () => {
  console.log(`Server up and running on port ${PORT}`);
});