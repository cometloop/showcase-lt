export const getRandomItems = <T>(array: T[], count: number = 3): T[] => {
	if (count <= 0) return [];
	const shuffled = [...array];
	for (let i = shuffled.length - 1; i > 0; i--) {
		const randomIndex = Math.floor(Math.random() * (i + 1));

		[shuffled[i], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[i]];
	}
	return shuffled.slice(0, Math.min(count, array.length));
};
