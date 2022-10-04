import Link from "next/link";
import styles from "./footer.module.scss";

function Footer() {
  return (
    <div className={styles.footer_page}>
      <div className={styles.highlight}>
        <div className={styles.lefthigh}>
          <h1>Direct weten waar jouw online kansen liggen?</h1>
          <p>
            In de intake vertellen we je alle ins en outs van onze aanpak,
            kansen voor jouw merk en succesverhalen van eerdere projecten.
            Iedereen is welkom. Stap eens binnen. Het kan zomaar je leven
            veranderen.
          </p>
          <div className={styles.boxes}>
            <ul>
              <li>
                <Link href={"mailto:"}>alpamisomirbekov630@gmail.com</Link>
              </li>
              <li>
                <Link href={"tel+998913934469"}>993934469</Link>
              </li>
            </ul>
            <ul>
              <li>Karakalpakstan Republic, UZ</li>
              <li>Nukus city, Nayman 118</li>
              <li>Omirbekov Alpamis</li>
            </ul>
            <ul>
              <li>ITPARK</li>
              <li>API</li>
              <li>Auesbaev Dauletyar</li>
            </ul>
          </div>
        </div>
        <div className={styles.righthigh}>
          <div className={styles.toph}></div>
          <div className={styles.bottomh}></div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.footer}>
          <div className={styles.top}>
            <img
              src="https://www.every-day.nl/app/themes/everyday/dist/images/everyday-logo.svg"
              alt=""
            />
          </div>
          <div className={styles.bottom}>
            <div className={styles.left}>
              <Link href={"/"}>Algemene voorwaarden</Link>
              <Link href={"/"}>Privacy statement</Link>
              <Link href={"/"}>Disclaimer</Link>
            </div>
            <div className={styles.right}>
              <Link href={"/"}>
                <img
                  src="https://www.every-day.nl/app/themes/everyday/dist/images/logo-dda-wit.png"
                  alt=""
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
