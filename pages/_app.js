import '@/styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';
import { Alert } from '@/components/Alert';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Alert />
    </>
  );
}
