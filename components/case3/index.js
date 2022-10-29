import styles from "./case3.module.scss";

function Case3() {
  let card3 = [
    {
      image:
        "https://cw10.wallmix.net/posts/2011-06/1307265737_big-gun-wallpapers-3-301_www.nevseoboi.com.ua.jpg",
      logo: "https://www.every-day.nl/app/uploads/2022/08/Mason-Garments.svg",
      title: "Mason Garments",
      descr: "Nothing beats good insights",
    },
    {
      image: "https://www.fonstola.ru/images/201311/fonstola.ru_134681.jpg",
      logo: "https://www.every-day.nl/app/uploads/2020/10/peeters-logo2.svg",
      title: "Modoc",
      descr: "Nothing beats good insights",
    },
    {
      image:
        "https://co10.nevseoboi.com.ua/posts/2011-06/1307265734_big-gun-wallpapers-3-297_www.nevseoboi.com.ua.jpg",
      logo: "https://www.every-day.nl/app/uploads/2021/11/carcollect.svg",
      title: "Car Collect",
      descr: "4000 cards have been sold!!",
    },
  ];
  return (
    <section className={styles.sect1}>
      <div className={styles.top}></div>
      <div className={styles.bottom}></div>
      <div className={styles.cards}>
        <div className={`${styles.container} ${styles.cardspart}`}>
          {card3.map((item, index) => {
            return (
              <div key={index} className={styles.card}>
                <img src={item.logo} className={styles.logo} alt="" />
                <img src={item.image} alt="" className={styles.img} />
                <div className={styles.text}>
                  <p>{item.title}</p>
                  <p>{item.descr}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Case3;
