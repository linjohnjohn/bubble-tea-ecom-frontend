import 'tailwindcss/tailwind.css';

import '../styles/globals.css';
import '../styles/every-layout.css';
import '../styles/typography.css';

import { QueryClient, QueryClientProvider } from 'react-query';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { AuthProvider } from '../context/AuthContext';
import { CartProvider } from '../context/CartContext';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <CartProvider>
          <Header />
          <main className="max-w-screen-xl mx-auto mb-8 px-4 sm:px-8">
            <Component {...pageProps} />
          </main>
          <Footer />
        </CartProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
