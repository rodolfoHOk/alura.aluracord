import { useContext } from 'react';
import { AuthContext } from './auth';

export function useAuth() {
  return useContext(AuthContext);
}
