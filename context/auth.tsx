import { createContext, ReactNode, useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

export interface User {
  id?: number;
  login: string;
  avatar_url?: string;
  html_url?: string;
  name: string;
  location?: string;
  bio?: string;
}

interface AuthContextProps {
  user: User | null;
  signInUrl: string;
  signOut: () => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthResponse {
  user: User;
  token: string;
}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: AuthProviderProps) {
  const router = useRouter();
  const [user, setUser] = useState<User>(null);

  const clientId = process.env.NEXT_PUBLIC_CLIENT_ID;
  const scope = 'read.user';
  const signInUrl = `https://github.com/login/oauth/authorize?scope=${scope}&client_id=${clientId}`;

  async function signIn(githubCode: string) {
    const response = await axios.post<AuthResponse>('/api/authenticate', {
      code: githubCode,
    });
    const { user, token } = response.data;

    localStorage.setItem('@aluracord:token', token);
    setUser(user);
  }

  function signOut() {
    localStorage.removeItem('@aluracord:token');
    setUser(null);
  }

  useEffect(() => {
    const token = localStorage.getItem('@aluracord:token');

    if (token) {
      // inserir token nas chamadas a api
    }
  }, []);

  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get('code');

    if (code) {
      router.push('/');

      signIn(code);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, signInUrl, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}
