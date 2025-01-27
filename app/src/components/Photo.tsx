import { Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { Photo as PhotoType } from '../types';

type PhotoProps = {
	item: PhotoType;
};

export const Photo: React.FC<PhotoProps> = ({ item }) => {
	const { title, url, photoId } = item;
	return (
		<VStack
			w='full'
			gap={2}
			justify='start'
			alignItems='start'
			data-testid={`photo-id-${photoId}`}
		>
			<Image w='full' h={'200px'} src={url} alt={title} />
			<Text fontSize='md' fontWeight='semibold'>
				{title}
			</Text>
		</VStack>
	);
};
