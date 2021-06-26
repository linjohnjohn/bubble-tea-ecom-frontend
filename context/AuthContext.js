import { createContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { UserAPI } from '../utils/api';

const AuthContext = createContext();

export const AuthProvider = (props) => {
    const [user, setUser] = useState(null);
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
        }
    }

    const checkUserLoggedIn = async () => {
        try {
            const user = await UserAPI.getCurrentUser();

            if (user) {
                setUser(user);
            }
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(async () => {
        await checkUserLoggedIn();
        setIsLoading(false);
    }, []);

    return <AuthContext.Provider value={{ user, isLoading, setUser, logoutUser }}>
        {props.children}
    </AuthContext.Provider>
}

export default AuthContext