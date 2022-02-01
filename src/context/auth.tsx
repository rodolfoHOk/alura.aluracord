import { createContext, ReactNode, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Toast from '../components/Toast/Toast';
import { api } from '../services/api';

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
  const [errorMessage, setErrorMessage] = useState('');

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
    const response = await api.post<AuthResponse>('/authenticate', {
      code: githubCode,
    });
    const { user, token } = response.data;

    if (response.status === 200) {
      localStorage.setItem('@aluracord:token', token);
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      setUser(user);
      router.push('/chat');
      setLoading(false);
    } else {
      setErrorMessage('Erro ao tentar autenticar usuário');
    }
  }

  function onCloseToast() {
    setErrorMessage('');
  }

  useEffect(() => {
    const token = localStorage.getItem('@aluracord:token');

    if (token) {
      api.defaults.headers.common.authorization = `Bearer ${token}`;
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
      <Toast
        success={false}
        show={!!errorMessage}
        duration={3000}
        message={errorMessage}
        onClose={onCloseToast}
      />
    </AuthContext.Provider>
  );
}
