import styles from "./six.module.scss";
import Link from "next/link";
function SixCases(props) {
  let { carddata = [], title } = props;

  return (
    <div className={styles.cases}>
      <div className={styles.container}>
        <div className={styles.toptext}>{title}</div>
        <div className={styles.cardspart}>
          {carddata.map((item, index) => {
            return (
              <div className={styles.card} key={index}>
                <img className={styles.logo} src={item.logo} alt="" />
                <div className={styles.cover}></div>
                <img className={styles.imgs} src={item.image} alt="" />
                <div className={styles.text}>
                  <p>{item.title}</p>
                  <p>{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SixCases;
