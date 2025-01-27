import { Flex, Input } from '@chakra-ui/react';
import { useCallback, useState } from 'react';
import { useDebounce } from '../hooks/useDebounce';
import { useSetSearchQuery } from '../stores/queryStore';
import { Logo } from './Logo';

export const Navbar = () => {
	const setSearchQuery = useSetSearchQuery();
	const [val, setVal] = useState('');

	const updateQuery = useCallback(
		(q: string) => {
			setSearchQuery(q);
		},
		[setSearchQuery]
	);

	const debouncedUpdateQuery = useDebounce(updateQuery, 500);

	return (
		<Flex alignItems='center' gap={2} mb={5}>
			<Logo />
			<Input
				maxW='full'
				variant='outline'
				id='search'
				name='search'
				type='search'
				placeholder='Find a photo...'
				onChange={(e) => {
					const q = e.target.value;
					setVal(q);
					debouncedUpdateQuery(q);
				}}
				value={val}
			/>
		</Flex>
	);
};
