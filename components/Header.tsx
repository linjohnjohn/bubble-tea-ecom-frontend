import React, { useContext } from 'react';
import { IoCart, IoPersonCircleSharp } from 'react-icons/io5';
import Link from 'next/link';

import AuthContext from '../context/AuthContext';
import CartContext from '../context/CartContext';

const Header = () => {
  const { user } = useContext(AuthContext);
  const { itemCount } = useContext(CartContext);

  return (
    <header className="bg-yellow-100 bg-opacity-80">
      <nav className="max-w-screen-xl mx-auto">
        <div className="p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">

          {/* Logo Section */}
          <Link href="/">
            <a className="text-center text-4xl text-yellow-700 font-bold">
              {'Grandpa\'s Tea'}
            </a>
          </Link>

          <ul className="cluster-l text-yellow-900" style={{ '--space': 'var(--s0)', '--justify': 'center' } as React.CSSProperties}>
            <li>
              <Link href="/">Our Menu</Link>
            </li>
            <li>
              {user ? (
                <Link href="/account">
                  <a>
                    <IoPersonCircleSharp className="icon" />
                  </a>
                </Link>
              )
                : <Link href="/login">Login</Link>}
            </li>
            <li className="relative">
              <Link href="/cart">
                <a>
                  <IoCart className="icon" />
                  <span className="bg-yellow-600 text-white rounded-full w-4 text-sm text-center absolute top-0 right-0">
                    {itemCount}
                  </span>
                </a>
              </Link>
            </li>
          </ul>
        </div>

      </nav>
    </header>
  );
};

export default Header;
