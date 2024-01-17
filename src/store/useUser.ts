import create from 'zustand';
import { User } from '../authentication';

type Store = {
  user?: User;
  setUser: (user: User | undefined) => void;
  reset: () => void;
};

const initialState = {
  user: undefined,
};
const useUser = create<Store>()((set, __get) => ({
  ...initialState,
  setUser: (user: User | undefined) => set(() => ({ user })),
  reset: () => {
    set({ ...initialState });
  },
}));

export default useUser;
