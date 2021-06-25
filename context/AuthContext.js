import { createContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { API_URL } from '../utils/urls'
import { UserAPI } from '../utils/api';

const AuthContext = createContext();

let magic;

export const AuthProvider = (props) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();

    /**
     * Adds email to user
     * @param {string} identifier
     * @param {string} password
     */
    const loginUser = async (identifier, password) => {
        try {
            const { user } = await fetch(`${API_URL}/auth/local`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify({ identifier, password })
            }).then(res => res.json());

            setUser(user);
            router.push('/');
        } catch (err) {
            setUser(null);
        }
    }

    /**
     * Register user
     * @param {string} email
     * @param {string} password
     */
    const registerUser = async (email, password) => {
        try {
            const { user } = await fetch(`${API_URL}/auth/local/register`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify({ email, username: email, password })
            }).then(res => res.json());

            setUser(user);
            router.push('/');
        } catch (err) {
            setUser(null);
        }
    }

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

    return <AuthContext.Provider value={{ user, isLoading, loginUser, logoutUser, registerUser }}>
        {props.children}
    </AuthContext.Provider>
}

export default AuthContext