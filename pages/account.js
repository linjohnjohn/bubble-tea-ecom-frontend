import Head from 'next/head';
import { useContext } from 'react';
import Loader from '../components/Loader';
import { Orders } from '../components/Orders';
import { withAuth } from '../components/withAuth';

import AuthContext from '../context/AuthContext';

const account = () => {
    const { user, logoutUser } = useContext(AuthContext);

    return (
        <div className="stack-l mt-8" style={{ "--space": "var(--s4)" }}>
            <Head>
                <title>Account Page</title>
                <meta name="description" content="View your orders" />
            </Head>

            <section>
                <div className="stack-l items-start">
                    <h2 className="h3">Profile</h2>
                    <p>Welcome back {user.email}</p>
                    <button className="btn btn-red" onClick={logoutUser}>Logout</button>
                </div>
            </section>

            <section>
                <div className="stack-l">
                    <h2 className="h3">Your Orders</h2>
                    <Orders />
                </div>
            </section>
        </div>
    )
}

export default withAuth(account);
