import Navbar from '../components/Navbar';
import Pie from '../components/Pie';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Pie />
    </>
    ) 
}

export default MyApp
