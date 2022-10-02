import styles from "./main2.module.scss";
// core version + navigation, pagination modules:
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Main2() {
  return (
    <div className={styles.main2}>
      <div className={styles.topmain2}>
        <div className={styles.topside}></div>
        <div className={styles.botside}></div>
      </div>
      <div className={styles.bottommain2}>
        <div className={styles.carousel}>
          <div className={styles.left_carousel}>
            <p>Trots op onze klanten</p>
          </div>
          <div className={styles.right_carousel}></div>
        </div>
      </div>
    </div>
  );
}

export default Main2;
