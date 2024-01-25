import create from 'zustand';
import { persist } from 'zustand/middleware';

type RequestTokenStore = {
  token: string | undefined;
  setToken: (token: string | undefined) => void;
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const useRequestToken = create(
  persist<RequestTokenStore>(
    (set, __get) => ({
      token: undefined,
      setToken: (token) => set(() => ({ token })),
    }),
    {
      name: 'requestToken',
    }
  )
);

export default useRequestToken;
