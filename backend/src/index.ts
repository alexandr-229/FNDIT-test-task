import cors from 'cors';
import express from 'express';
import { config } from 'dotenv';

config();

const PORT = process.env.PORT;

const app = express();

app.use(cors())
app.use(express.json())

app.listen(PORT, () => {
	console.log(`App running on port ${PORT}`)
})
