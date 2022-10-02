import Link from "next/link";
import styles from "./right.module.scss";
import { BsEnvelope } from "react-icons/bs";
import { BsTelephoneOutbound } from "react-icons/bs";
function RightEmail() {
  return (
    <div className={styles.rightpart}>
      <div className={styles.email}>
        <Link href={"/email"}>
          <a>
            <BsEnvelope />
          </a>
        </Link>
      </div>
      <div className={styles.phone}>
        <Link href={"phone"}>
          <a>
            <BsTelephoneOutbound />
          </a>
        </Link>
      </div>
    </div>
  );
}
export default RightEmail;
