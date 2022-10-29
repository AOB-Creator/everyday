import Link from "next/link";
import styles from "./work.module.scss";
import { HiOutlineArrowRight } from "react-icons/hi";

function LetsWork() {
  return (
    <div className={styles.work}>
      <div className={styles.container}>
        <h1>
          Lets <br /> work
        </h1>
        <Link href="">
          <a className={styles.btn}>
            <HiOutlineArrowRight className={styles.btnicon} />
            <span>Start Intake</span>
          </a>
        </Link>
      </div>
    </div>
  );
}
export default LetsWork;
