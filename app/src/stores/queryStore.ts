import { create } from 'zustand';

interface QueryState {
	searchQuery: string;
	setSearchQuery: (query: string) => void;
}

export const useQueryStore = create<QueryState>((set) => ({
	searchQuery: '',
	setSearchQuery: (query) => set({ searchQuery: query }),
}));

export const useSetSearchQuery = () => useQueryStore((x) => x.setSearchQuery);

export const useSearchQuery = () => useQueryStore((x) => x.searchQuery);
