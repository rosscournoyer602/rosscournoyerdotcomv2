import { S3_BUCKET } from './config';

export const imageRequest = (
	key: string,
	width: number,
	height: number,
	additionalEdits: object = {}
) => {
	const imageRequest = JSON.stringify({
		bucket: S3_BUCKET,
		key,
		edits: {
			resize: {
				width,
				height,
				fit: 'cover'
			},
			...additionalEdits
		}
	});
	return btoa(imageRequest);
};
