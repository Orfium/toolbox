import create from 'zustand';
import { persist } from 'zustand/middleware';

type Store = {
  token: string | undefined;
  setToken: (token: string | undefined) => void;
};
const useRequestToken = create(
  persist<Store>(
    (set, get) => ({
      token: undefined,
      setToken: (token) => set(() => ({ token })),
    }),
    {
      name: 'requestToken',
    }
  )
);

export default useRequestToken;
