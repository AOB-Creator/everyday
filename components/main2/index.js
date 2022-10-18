import styles from "./main2.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

function Main2() {
  return (
    <div className={styles.main2}>
      <div className={styles.topmain2}>
        <div className={styles.topside}></div>
        <div className={styles.botside}></div>
      </div>
      <div className={styles.bottommain2}>
        <div className={styles.carousely}>
          <div className={styles.left_carousely}>
            <p>Trots op onze klanten</p>
          </div>
          <div className={styles.right_carousely}></div>
        </div>
      </div>
      <div className={styles.cards}></div>
    </div>
  );
}

export default Main2;
