import { model, Schema } from 'mongoose';

const PostSchema = new Schema({
	creator: {
		type: String,
		required: true
	},
	title: {
		type: String,
		required: true
	},
	publishDate: {
		type: String,
		required: true
	},
	content: {
		type: String,
		required: true
	},
	categories: {
		type: [String],
		required: true
	},
});

export const PostModel = model('posts', PostSchema);
