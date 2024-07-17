import cors from 'cors';
import express from 'express';
import { config } from 'dotenv';
import { connectDB } from './lib/db';
import { router } from './modules';

config();

const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', router)

const bootstrap = async () => {
	await connectDB();
	app.listen(PORT, () => {
		console.log(`App running on port ${PORT}`)
	});
};

bootstrap();
