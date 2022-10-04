import Navigationbar from "../components/navigationbar";
import Footer from "../components/footer";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navigationbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
