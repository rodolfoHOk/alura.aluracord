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
  loading: boolean;
  signIn: (login?: string) => void;
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
  const [loading, setLoading] = useState(false);

  const clientId = process.env.NEXT_PUBLIC_CLIENT_ID;
  const scope = 'read.user';

  function signIn(login?: string) {
    setLoading(true);
    let signInUrl: string = '';

    if (login) {
      signInUrl = `https://github.com/login/oauth/authorize?scope=${scope}&client_id=${clientId}&login=${login}`;
    } else {
      signInUrl = `https://github.com/login/oauth/authorize?scope=${scope}&client_id=${clientId}`;
    }

    router.push(signInUrl);
  }

  function signOut() {
    localStorage.removeItem('@aluracord:token');
    setUser(null);
  }

  async function signInApi(githubCode: string) {
    setLoading(true);
    const response = await axios.post<AuthResponse>('/api/authenticate', {
      code: githubCode,
    });
    const { user, token } = response.data;

    if (response.status === 200) {
      localStorage.setItem('@aluracord:token', token);
      setUser(user);
      router.push('/chat');
      setLoading(false);
    } else {
      console.error('Erro ao tentar autenticar usuário');
    }
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
      signInApi(code);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}
