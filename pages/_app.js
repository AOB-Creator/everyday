import Navigationbar from "../components/navigationbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navigationbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
