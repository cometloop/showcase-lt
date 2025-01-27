import { Image } from '@chakra-ui/react';

export const Logo: React.FC = () => {
	return (
		<Image
			src='https://i.imgur.com/zbpHyIQ.png'
			boxSize='42px'
			fit='cover'
			alt='Lean Techniques'
		/>
	);
};
