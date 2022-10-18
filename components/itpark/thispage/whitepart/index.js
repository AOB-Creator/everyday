import Link from "next/link";
import styles from "./white.module.scss";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

function WhitePart() {
  return (
    <div className={styles.white}>
      <div className={styles.textwhite}>
        <h3>Ontwikkelingen</h3>
        <p>
          De wereld staat nooit stil. Het team van Every Day® dus ook niet. Volg
          hier onze tips & updates!
        </p>
        <Link href={"/"}>
          <a className={styles.link}>
            <HiOutlineArrowNarrowRight className={styles.linkicons} />
            <span>read more</span>
          </a>
        </Link>
      </div>
    </div>
  );
}
export default WhitePart;
