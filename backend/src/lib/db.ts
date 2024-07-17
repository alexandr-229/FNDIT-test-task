import { connect } from 'mongoose';

export const connectDB = async () => {
	try {
		const url = process.env.MONGO_URI;
		if (!url) {
			throw new Error('Add MONGO_URI to the env file')
		}

		await connect(url);
		console.log('DB connected')
	} catch (error) {
		console.log('Failed to connect to the DB:', error);
	}
};
