import { useContext, useEffect } from 'react';
import AuthContext from '../context/AuthContext';
import { useRouter } from 'next/router';
import Loader from './Loader';

export const withAuth = Component => {
  const Auth = (props) => {
    const { user, isLoading } = useContext(AuthContext);

    const router = useRouter();

    useEffect(() => {
      if (!user && !isLoading) {
        router.push("/login");
      }
    }, [user, isLoading]);

    // If user is not logged in after initial load phase, return login component
    if (isLoading || !user) {
      return <div className="py-20">
        <Loader></Loader>
      </div>
    }

    // If user is logged in, return original component
    return (
      <Component {...props} />
    );
  };

  // Copy getInitial props so it will run as well
  if (Component.getInitialProps) {
    Auth.getInitialProps = Component.getInitialProps;
  }

  return Auth;
};
