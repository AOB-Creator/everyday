import Link from "next/link";
import styles from "./white.module.scss";
import { BsArrowRight } from "react-icons/bs";

function WhitePlace() {
  return (
    <div className={styles.whitepart}>
      <div className={`${styles.whiter} ${styles.container}`}>
        <div className={`${styles.whiterbox}`}>
          <h1>
            Wij zijn Every Day <sup>®</sup>. Een{" "}
            <span>
              <Link href={"/"}>creatief digitaal bureau</Link>
            </span>{" "}
            dat zichzelf elke dag opnieuw wil bewijzen. De digitale wereld staat
            nooit stil, morgen is weer anders dan vandaag. Met een slimme
            combinatie van creativiteit, strategie en techniek helpen wij onze
            ambitieuze opdrachtgevers te groeien. Ons team bestaat uit de beste
            online <Link href={"/"}>campagnes</Link> ,
            <Link href={"/"}>websites</Link>, professionals op het gebied van{" "}
            <Link href={"/ok"}>branding</Link>,{" "}
            <Link href={"/"}>campagnes</Link> ,<Link href={"/"}>websites</Link>,{" "}
            <Link href={"/"}>online marketing</Link> ,{" "}
            <Link href={"/"}>e-commerce</Link> en digital development.
          </h1>

          <Link href={"/"}>
            <a className={styles.moredetail}>
              <BsArrowRight className={styles.moreicons} />
              <span>More details</span>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default WhitePlace;
