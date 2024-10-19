import '../styles/globals.css'; // Global CSS file
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import 'tailwindcss/tailwind.css'; // Tailwind CSS
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
