import { Button } from '@chakra-ui/react';
import { TbError404 } from 'react-icons/tb';
import { useNavigate } from 'react-router';
import { EmptyState } from '../components/Empty';
import { routes } from '../routes';

export const NotFound = () => {
	const navigate = useNavigate();

	return (
		<EmptyState icon={<TbError404 />} title='404 Not Found'>
			<Button onClick={() => navigate(routes.home)}>Go home</Button>
		</EmptyState>
	);
};
