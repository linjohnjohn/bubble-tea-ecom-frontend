import Head from 'next/head';
import { useContext, useState } from 'react';

import AuthContext from '../context/AuthContext'


const login = () => {
    const [loginState, setLoginState] = useState("login");

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { loginUser, registerUser } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (loginState === 'login') {
            loginUser(email, password);
        } else {
            registerUser(email, password)
        }
    }

    return (
        <div className="mt-8">
            <Head>
                <title>Login</title>
                <meta name="description" content="Login here to make your purchase" />
            </Head>

            <h2 className="my-8 text-center">{loginState === 'login' ? 'Login' : 'Register'}</h2>
            <form className="stack-l mx-auto max-w-screen-md" onSubmit={handleSubmit}>
                <input
                    className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="Email Address"
                />
                <input
                    className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder="Password"
                />
                <button className="btn btn-brown" type="submit">{loginState === 'login' ? 'Log In' : 'Register'}</button>
                <button
                    type="button"
                    className="btn btn-brown"
                    onClick={() => {
                        if (loginState === 'login') {
                            setLoginState('register')
                        } else {
                            setLoginState('login')
                        }
                    }}
                >{loginState === 'login' ? 'Sign up' : 'Already have an account?'}</button>
            </form>
        </div>
    )
}

export default login
