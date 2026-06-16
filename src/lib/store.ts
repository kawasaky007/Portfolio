import { create } from 'zustand';

interface AnimationStore {
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
}

export const useAnimationStore = create<AnimationStore>((set) => ({
  isLoading: false,
  setIsLoading: (value) => set({ isLoading: value }),
  isDarkMode: true,
  setIsDarkMode: (value) => set({ isDarkMode: value }),
}));
