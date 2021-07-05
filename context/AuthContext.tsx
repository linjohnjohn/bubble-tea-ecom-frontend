import { createContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { UserAPI } from 'utils/api';
import { UsersPermissionsUser } from 'ts-defs/generated';

interface IAuthContext {
  user: UsersPermissionsUser | null,
  isLoading?: boolean,
  setUser: (user: UsersPermissionsUser) => void,
  logoutUser?: () => void
}

const AuthContext = createContext<IAuthContext>({
  user: null,
  setUser: () => { },
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState<UsersPermissionsUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  /**
     * logs out user
     */
  const logoutUser = async () => {
    try {
      await UserAPI.logout();
      router.push('/');
      setUser(null);
    } catch {
      console.error('Error logging out');
    }
  };

  const checkUserLoggedIn = async () => {
    try {
      const currentUser = await UserAPI.getCurrentUser();

      if (currentUser) {
        setUser(currentUser);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    checkUserLoggedIn().then(() => setIsLoading(false));
  }, []);

  return (
    <AuthContext.Provider value={{
      user, isLoading, setUser, logoutUser,
    }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
