import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';
import { api } from '../api';
import { useSearchQuery } from '../stores/queryStore';
import { Photo } from '../types';
import { getRandomItems } from '../utils';

export const useAlbums = () => {
	const query = useSearchQuery();

	const { data, ...rest } = useQuery({
		queryKey: ['albums'],
		queryFn: () => api.getAlbums(),
	});

	const allPhotos = useMemo(() => {
		const allPhotos: Photo[] = [];
		data?.forEach((x) => {
			x.photos.forEach((p) => {
				allPhotos.push(p);
			});
		});
		return allPhotos;
	}, [data]);

	const filteredResults = useMemo(() => {
		if (query === '') {
			return getRandomItems(allPhotos);
		}

		return allPhotos.filter((x) => {
			return x.title.toLowerCase().includes(query.toLowerCase());
		});
	}, [allPhotos, query]);

	return {
		allPhotos,
		filteredResults,
		query,
		...rest,
	};
};
