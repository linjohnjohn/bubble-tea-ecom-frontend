import Head from 'next/head';
import { useRouter } from 'next/router';
import { useContext, useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';

import AuthContext from '../context/AuthContext'
import { UserAPI } from '../utils/api';

const RegisterForm = () => {
    const password = useRef({});


    const router = useRouter();
    const { setUser } = useContext(AuthContext);

    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    password.current = watch("password", "");

    const registerMutation = useMutation(UserAPI.register, {
        onSuccess: (data) => {
            setUser(data.user);
            router.push("/");
        }
    });


    const onSubmit = (data) => {
        const { email, password } = data
        registerMutation.mutate({ email, password });
    }

    return <>
        <h2 className="my-8 text-center">Register</h2>
        <form className="stack-l" onSubmit={handleSubmit(onSubmit)}>
            <p className="text-red-500">{registerMutation.isError && 'Email is already used'}</p>
            <input
                className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                {...register("email", {
                    required: "Email is required"
                })}
                disabled={registerMutation.isLoading}
                placeholder="Email Address"
            />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}

            <input
                className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="password"
                {...register("password", {
                    required: "Password is required",
                    minLength: {
                        value: 8,
                        message: "Password must have at least 8 characters"
                    }
                })}
                disabled={registerMutation.isLoading}
                placeholder="Password"
            />
            {errors.password && <p className="text-red-500">{errors.password.message}</p>}

            <input
                className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="password"
                {...register("confirmPassword", {
                    validate: value => value === password.current || "Passwords must match"
                })}
                disabled={registerMutation.isLoading}
                placeholder="Confirm Password"
            />
            {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword.message}</p>}
            <button className="btn btn-green" disabled={registerMutation.isLoading} type="submit">Register</button>
        </form>
    </>
}

const LoginForm = () => {
    const router = useRouter();
    const { setUser } = useContext(AuthContext);

    const { register, handleSubmit, formState: { errors }, watch } = useForm();

    const loginMutation = useMutation(UserAPI.login, {
        onSuccess: (data) => {
            setUser(data.user);
            router.push("/");
        }
    });

    const onSubmit = (data) => {
        const { email, password } = data
        loginMutation.mutate({ email, password });
    }

    return <>
        <h2 className="my-8 text-center">Login</h2>
        <form className="stack-l" onSubmit={handleSubmit(onSubmit)}>
            <p className="text-red-500">{loginMutation.isError && 'Incorrect email and/or password.'}</p>
            <input
                className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                {...register("email", {
                    required: "Email is required"
                })}
                disabled={loginMutation.isLoading}
                placeholder="Email Address"
            />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
            <input
                className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="password"
                {...register("password", {
                    required: "Password is required"
                })}
                disabled={loginMutation.isLoading}
                placeholder="Password"
            />
            {errors.password && <p className="text-red-500">{errors.password.message}</p>}
            <button className="btn btn-green" disabled={loginMutation.isLoading} type="submit">Log In</button>
        </form>
    </>
}

const login = () => {
    const [loginState, setLoginState] = useState("login");

    return (
        <div className="mt-8">
            <Head>
                <title>Login</title>
                <meta name="description" content="Login here to make your purchase" />
            </Head>

            <div className="stack-l mx-auto max-w-screen-md" style={{ "--space": "var(--s1)" }}>
                {loginState === 'login' ? <LoginForm /> : <RegisterForm />}

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
                >{loginState === 'login' ? 'No account? Sign up' : 'Already have an account?'}</button>
            </div>
        </div>
    )
}

export default login
