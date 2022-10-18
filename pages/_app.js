import Navigationbar from "../components/navigationbar";
import Footer from "../components/footer";
import "../styles/globals.css";
import { motion, useScroll, useSpring } from "framer-motion";

function MyApp({ Component, pageProps }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <>
      <motion.div className="progress-bar" style={{ scaleX }} />
      <Navigationbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
