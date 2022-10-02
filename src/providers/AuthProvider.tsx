import React from 'react';
import { login, signup, refreshTokens } from '@/auth';

interface AuthProviderValue {
  login: (email: string, password: string) => Promise<void>
  signup: (email: string) => Promise<void>
  refreshTokens: () => Promise<void>
}

export const authProviderValue: AuthProviderValue = {
  login,
  signup,
  refreshTokens,
};

const AuthContext = React.createContext(authProviderValue);

AuthContext.displayName = 'AuthContext';

export const AuthProvider = AuthContext.Provider;

export const useAuth = (): AuthProviderValue => React.useContext(AuthContext);
