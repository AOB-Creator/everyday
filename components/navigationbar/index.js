import Link from "next/link";
import styles from "./navbar.module.scss";
import { GrProjects, GrCertificate } from "react-icons/gr";
import { FaQq, FaGripLines, FaArrowRight } from "react-icons/fa";
import { useState } from "react";

function Navigationbar() {
  let [activenav, setactivenav] = useState(true);
  let [exist, setExist] = useState(true);

  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.nav}>
          <div className={styles.logo}>
            <Link href={"/"}>
              <a>
                <img
                  src="https://www.every-day.nl/app/themes/everyday/dist/images/everyday-logo.svg"
                  alt=""
                />
              </a>
            </Link>
          </div>
          <ul
            className={
              activenav
                ? `${styles.menus}`
                : `${styles.activenavs} ${styles.menus}`
            }
          >
            <li className={styles.active}>
              <Link href="/cases">Cases 🚀</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/">targets 🎯</Link>
            </li>
            <li>
              <Link href="/">Vocatures</Link>
            </li>
            <li>
              <Link href="/">Over</Link>
            </li>
            <li>
              <Link href="/">Shop</Link>
            </li>
            <li>
              <Link href="/">Contact</Link>
            </li>
            <div
              className={exist ? ` ${styles.btn}` : `${styles.btn}`}
              onClick={() => {
                setExist(!exist);
                setactivenav(!activenav);
              }}
            >
              <FaArrowRight className={styles.btnicons} />
            </div>

            <div className={styles.start}>
              <Link href="/">Start intake</Link>
            </div>
          </ul>
          <div
            className={
              exist ? `${styles.btn1}` : `${styles.btn1no} ${styles.btn1}`
            }
            onClick={() => {
              setactivenav(!activenav);
              setExist(!exist);
            }}
          >
            <FaGripLines className={styles.btnicons1} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Navigationbar;
