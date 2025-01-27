'use client';

import {
	ChakraProvider,
	createSystem,
	defaultConfig,
	SystemConfig,
} from '@chakra-ui/react';
import { ColorModeProvider, ColorModeProviderProps } from './ColorMode';

const system = createSystem(defaultConfig);

export function Provider(
	props: ColorModeProviderProps & { configs?: SystemConfig[] }
) {
	const { configs, ...rest } = props;

	return (
		<ChakraProvider value={system}>
			<ColorModeProvider {...rest} />
		</ChakraProvider>
	);
}
