import { Spinner, VStack } from '@chakra-ui/react';

export const Loading: React.FC = () => {
	return (
		<VStack w='full'>
			<Spinner size='lg' />
		</VStack>
	);
};
