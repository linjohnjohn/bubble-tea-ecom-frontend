import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { UserAPI } from '../utils/api';

const ForgetPasswordForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<{
    email: string
  }>();

  const forgotPasswordMutation = useMutation<any, Error, string>((email) => UserAPI.forgotPassword(email));

  const onSubmit = handleSubmit((data) => {
    const { email } = data;
    forgotPasswordMutation.mutate(email);
  });

  return (
    <>
      <h2 className="my-8 text-center">Forgot Password</h2>
      {forgotPasswordMutation.isSuccess
        ? <p className="text-center">{'Check your inbox, we\'ve sent a reset password link to your email.'}</p>
        : (
          <form className="stack-l" onSubmit={onSubmit}>
            {/* @todo fix error messages */}
            {forgotPasswordMutation.isError && <p className="text-red-500">{forgotPasswordMutation.error.message}</p>}
            <input
              className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              {...register('email', {
                required: 'Email is required',
              })}
              disabled={forgotPasswordMutation.isLoading}
              placeholder="Email"
            />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}

            <button className="btn btn-green" disabled={forgotPasswordMutation.isLoading} type="submit">Forgot Password</button>
          </form>
        )}
    </>
  );
};

const ResetPasswordForm = ({ code }) => {
  const passwordRef = useRef({});

  const {
    register, handleSubmit, formState: { errors }, watch,
  } = useForm<{
    password: string,
    confirmPassword: string
  }>();
  passwordRef.current = watch('password', '');

  const resetPasswordMutation = useMutation<any, Error, {
    password: string,
    passwordConfirmation: string,
    code: string
  }>(UserAPI.resetPassword);

  const onSubmit = handleSubmit((data) => {
    const { password, confirmPassword } = data;
    resetPasswordMutation.mutate({ password, code, passwordConfirmation: confirmPassword });
  });

  return (
    <>
      <h2 className="my-8 text-center">Reset Password</h2>
      {resetPasswordMutation.isSuccess
        ? (
          <p className="text-center">
            {'Your password was updated successfully! '}
            <Link href="/login">
              <a className="link">
                Login Here
              </a>
            </Link>
          </p>
        )
        : (
          <form className="stack-l" onSubmit={onSubmit}>
            {resetPasswordMutation.isError && <p className="text-red-500">{resetPasswordMutation.error.message}</p>}
            <input
              className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 8,
                  message: 'Password must have at least 8 characters',
                },
              })}
              disabled={resetPasswordMutation.isLoading}
              placeholder="Password"
            />
            {errors.password && <p className="text-red-500">{errors.password.message}</p>}

            <input
              className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              {...register('confirmPassword', {
                validate: (value) => value === passwordRef.current || 'Passwords must match',
              })}
              disabled={resetPasswordMutation.isLoading}
              placeholder="Confirm Password"
            />
            {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword.message}</p>}

            <button className="btn btn-green" disabled={resetPasswordMutation.isLoading} type="submit">Reset Password</button>
          </form>
        )}
    </>
  );
};

const resetPassword = () => {
  const router = useRouter();
  const { code } = router.query;

  return (
    <div className="mt-8 mx-auto max-w-screen-md">
      <Head>
        <title>Reset Password</title>
        <meta name="description" content="Login here to make your purchase" />
      </Head>

      {code ? <ResetPasswordForm code={code} /> : <ForgetPasswordForm />}
    </div>
  );
};

export default resetPassword;
