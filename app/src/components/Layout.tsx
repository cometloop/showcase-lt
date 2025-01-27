import { Box } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
	return (
		<Box maxW='400px' mx='auto' p={5} className='dark'>
			{children}
		</Box>
	);
};
