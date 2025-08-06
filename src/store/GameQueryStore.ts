import { create } from "zustand";
export interface GameQuery {
    genreId?: number;
    platformId?: number;
    sortOrder?: string;
    searchText?: string;
}

interface GameQueryStore {
    gameQuery: GameQuery;
    setSearchText: (searchtext: string) => void;
    setSortOrder: (sortOrder: string) => void;
    setPlatformId: (platformId: number) => void;
    setGenreId: (genreId: number) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
    gameQuery: {},
    setSearchText: (searchText) => set(() => ({ gameQuery: { searchText } })),
    setGenreId: (genreId) =>
        set((store) => ({ gameQuery: { ...store.gameQuery, genreId } })),
    setSortOrder: (sortOrder) =>
        set((store) => ({ gameQuery: { ...store.gameQuery, sortOrder } })),
    setPlatformId: (platformId) =>
        set((store) => ({ gameQuery: { ...store.gameQuery, platformId } })),
}));
export default useGameQueryStore;
