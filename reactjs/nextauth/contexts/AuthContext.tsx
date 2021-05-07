import { createContext, ReactNode, useEffect, useState } from 'react';
import Router from 'next/router';
import { destroyCookie, parseCookies, setCookie } from 'nookies';
import { api } from '../services/apiClient';

type User = {
  email: string;
  permissions: string[];
  roles: string[];
};

type SignInCredentials = {
  email: string;
  password: string;
};

type AuthContextData = {
  signIn(credentials: SignInCredentials): Promise<void>;
  user: User;
  isAuthenticated: boolean;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextData);

export function signOut() {
  destroyCookie(undefined, 'nextauth.token');
  destroyCookie(undefined, 'nextauth.refreshToken');

  Router.push('/');
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>();
  const isAuthenticated = !!user; // se tiver user, significa que esta autenticado

  useEffect(() => {
    const { 'nextauth.token': token } = parseCookies();

    if (token) {
      api
        .get('me')
        .then(response => {
          const { email, permissions, roles } = response.data;

          setUser({ email, permissions, roles });
        })
        .catch(() => {
          // soh cai aqui quando n for erro de refresh token, pois esse eh resolvido em services/api.ts
          signOut();
        });
    }
  }, []);

  async function signIn({ email, password }: SignInCredentials) {
    try {
      const response = await api.post('sessions', {
        email,
        password,
      });

      const { token, refreshToken, permissions, roles } = response.data;
      // sessionStorage -> so dura durante a session
      // localStorage -> no next nao funciona pq localStorage soh existe no browser, e nao em ssr
      // cookies -> resolve

      // setCookie -> primeiro paramentro eh o context, e quando e executado pelo browser
      // ex: login no front. Esse parametro eh undefined
      // segundo parametro eh o nome que daremos ao token, e o ultimo o token
      setCookie(undefined, 'nextauth.token', token, {
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: '/', // quais caminhos do app terao acesso ao cookie. Com '/' todo app tera acesso
      });

      setCookie(undefined, 'nextauth.refreshToken', refreshToken, {
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: '/',
      });

      setUser({ email, permissions, roles });

      api.defaults.headers['Authorization'] = `Bearer ${token}`;
    } catch (err) {
      console.log(err);
    }

    Router.push('/dashboard');
  }

  return (
    <AuthContext.Provider value={{ signIn, isAuthenticated, user }}>
      {children}
    </AuthContext.Provider>
  );
}
