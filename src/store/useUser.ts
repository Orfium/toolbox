import { create } from 'zustand';
import { type User } from '~/contexts';

type Store = {
  user?: User;
  setUser: (user: User | undefined) => void;
  reset: () => void;
};

const initialState = {
  user: undefined,
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const useUser = create<Store>()((set, __get) => ({
  ...initialState,
  setUser: (user: User | undefined) => set(() => ({ user })),
  reset: () => {
    set({ ...initialState });
  },
}));

export default useUser;
