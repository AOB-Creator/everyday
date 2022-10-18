import styles from "./itpark.module.scss";
import Main from "../../components/main/index";
import RightEmail from "../../components/rightemail";
import VideoMain from "../../components/videomain";
import { createContext, useContext, useState } from "react";
import Main2 from "../main2/index";
import WhitePlace from "./thispage/whiteplace";
import Bussines from "./thispage/everydaybussiness";
import WhitePart from "./thispage/whitepart";
import MotionCards from "../motionpage";

let ProvData = createContext();
function Itpark() {
  let [visible, setVisible] = useState(false);

  return (
    <ProvData.Provider value={{ visible, setVisible }}>
      <div className={styles.itpark}>
        <Main />
        <div className={styles.fixed}>
          <RightEmail className={styles.rightfixed} />
        </div>
        {visible ? (
          <div className={styles.video}>
            <VideoMain />
          </div>
        ) : (
          <></>
        )}
      </div>
      <Main2 />
      <WhitePlace />
      <Bussines />
      <WhitePart />
      <MotionCards />
    </ProvData.Provider>
  );
}

export { Itpark, ProvData };
