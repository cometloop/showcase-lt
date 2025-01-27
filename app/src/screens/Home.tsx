import { Box, VStack } from '@chakra-ui/react';
import { MdNoPhotography } from 'react-icons/md';
import { EmptyState } from '../components/Empty';
import { Loading } from '../components/Loading';
import { Navbar } from '../components/Navbar';
import { Photo } from '../components/Photo';
import { useAlbums } from '../hooks/useAlbums';

export const Home = () => {
	const { isLoading, filteredResults } = useAlbums();

	return (
		<Box data-testid='home'>
			<Navbar />

			{isLoading && <Loading data-testid='loading' />}

			{!isLoading && filteredResults.length >= 1 && (
				<VStack data-testid='photo-results' gap={5}>
					{filteredResults.map((x) => {
						return <Photo item={x} key={x.photoId} />;
					})}
				</VStack>
			)}

			{!isLoading && filteredResults.length === 0 && (
				<EmptyState
					data-testid='no-results'
					icon={<MdNoPhotography />}
					title='No results found'
					description='Try searching for something different'
				/>
			)}
		</Box>
	);
};
