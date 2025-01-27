import axios from 'axios';
import { toaster } from '../components/Toaster';
import { Album } from '../types';
import { API_BASE_URL } from './../config';

const GENERIC_ERROR = 'Something went wrong. Please Try again';

export const api = {
	getAlbums: async (count = 8): Promise<Album[]> => {
		try {
			const result = await axios.get<Album[]>(`${API_BASE_URL}/albums`);
			return result.data;
		} catch (e) {
			toaster.create({
				type: 'error',
				title: GENERIC_ERROR,
			});
			return [];
		}
	},
};
