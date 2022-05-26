export type AuthenticationContextProps = {
  logout: () => void;
};

export type AuthenticationProviderProps = {
  onLogout: () => void;
};
