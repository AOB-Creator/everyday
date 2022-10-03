import Link from "next/link";
import styles from "./right.module.scss";
import { BsEnvelope } from "react-icons/bs";
import { BsTelephoneOutbound } from "react-icons/bs";
function RightEmail() {
  return (
    <div className={styles.rightpart}>
      <div className={styles.email}>
        <Link href={"mailto:alpamisomirbekov630@gmail.com"}>
          <a>
            <BsEnvelope />
          </a>
        </Link>
      </div>
      <div className={styles.phone}>
        <a href={"tel:+998913934469"}>
          <a>
            <BsTelephoneOutbound />
          </a>
        </a>
      </div>
    </div>
  );
}
export default RightEmail;
