import Link from "next/link";
import styles from "./busi.module.scss";
import { BsArrowRight } from "react-icons/bs";

function Bussines() {
  const cardinfo = [
    {
      id: 0,
      title: "Branding",
      descr:
        "Het bouwen van een sterk merk. Onderscheidend, herkenbaar en consistent.",
      link: "/",
    },
    {
      id: 1,
      title: "Campagnes",
      descr:
        "Het bouwen van een sterk merk. Onderscheidend, herkenbaar en consistent.",
      link: "/",
    },
    {
      id: 2,
      title: "Websites",
      descr:
        "Het bouwen van een sterk merk. Onderscheidend, herkenbaar en consistent.",
      link: "/",
    },
    {
      id: 3,
      title: "Digital Development",
      descr:
        "Het bouwen van een sterk merk. Onderscheidend, herkenbaar en consistent.",
      link: "/",
    },
    {
      id: 4,
      title: "E-Commerce",
      descr:
        "Het bouwen van een sterk merk. Onderscheidend, herkenbaar en consistent.",
      link: "/",
    },
    {
      id: 5,
      title: "Online Marketing",
      descr:
        "Het bouwen van een sterk merk. Onderscheidend, herkenbaar en consistent.",
      link: "/",
    },
  ];

  return (
    <div className={styles.business}>
      <div className={styles.leftbuss}>
        <div className={styles.text}>Our every day business</div>
        <div className={styles.cards}>
          {cardinfo.map((item, index) => {
            return (
              <div key={index} className={styles.card}>
                <h2>{item.title}</h2>
                <p>{item.descr}</p>
                <Link href={`${item.link}`}>
                  <a className={styles.iconsa}>
                    <BsArrowRight className={styles.icons} />
                    <span>Read More</span>
                  </a>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.rightbuss}>
        <div className={styles.top}></div>
        <div className={styles.bottom}></div>
      </div>
    </div>
  );
}

export default Bussines;
