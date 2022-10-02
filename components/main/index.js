import styles from "./main.module.scss";
import { GrPlay, GrPlayFill } from "react-icons/gr";
import { SiInstagram } from "react-icons/si";
import { FaFacebookF, FaTelegram } from "react-icons/fa";
import { ProvData } from "../itpark/index";
import { useContext } from "react";
function Main() {
  let { visible, setVisible } = useContext(ProvData);

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.mainpage}>
          <div className={styles.textpart}>
            <h1>World Order by Henry Kissinger</h1>
            <p>
              To achieve world government, it is necessary to remove from the
              minds of men, their individualism, loyalty to family traditions,
              national patriotism and religious dogmas.
            </p>
          </div>
          <div className={styles.bottom_place}>
            <div className={styles.leftside}>
              <GrPlayFill className={styles.lefticon} />
              <button
                onClick={() => {
                  setVisible(!visible);
                }}
              >
                Check brandmovie!
              </button>
            </div>
            <ul className={styles.rightsocials}>
              <li>
                <span></span>
                <a href="https://www.instagram.com/alpamis570632/">
                  <SiInstagram />
                </a>
              </li>
              <li>
                <span></span>
                <a href="https://www.facebook.com/alpamis.omirbekov/">
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <span></span>
                <a href="https://t.me/AlpamisOmirbekov">
                  <FaTelegram />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
