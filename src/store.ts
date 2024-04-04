import { create } from 'zustand';

type State = {
  messages: string[];
  addMessage: (msg: string) => void;
};

export const useStore = create<State>((set) => ({
  messages: [],
  addMessage: (msg) => set((state) => ({ messages: [...state.messages, msg] })),
}));