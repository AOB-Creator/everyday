import { useContext } from "react";
import styles from "./videomain.module.scss";
import { ProvData } from "../itpark";
import { FaTimes, FaRegTimesCircle } from "react-icons/fa";
import { FiX } from "react-icons/fi";

function VideoMain(props) {
  let { visiable, setVisible } = useContext(ProvData);
  return (
    <div className={styles.videomain}>
      <button
        className={styles.times}
        onClick={() => {
          setVisible(false);
        }}
      >
        <FiX />
      </button>
      <div className={styles.content}>
        <iframe
          className={styles.fullvideo}
          src="https://www.youtube.com/embed/eKJdA7fpJUo"
          title="Henry Kissinger is A Big Time War Criminal..."
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}
export default VideoMain;
