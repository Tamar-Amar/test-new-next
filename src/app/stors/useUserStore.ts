import {create} from 'zustand';

interface UserStoreState {
  count: number;
  incrementHopsa: () => void;
  incrementDownload: () => void;
  resetCounts: () => void;
}

const useUserStore = create<UserStoreState>((set) => ({
  count: 0,
  incrementHopsa: () => set((state) => ({ count: state.count + 1 })),
  incrementDownload: () => set((state) => ({ count: state.count -1 })),
  resetCounts: () => set({ count: 0 }),
}));

export default useUserStore;
