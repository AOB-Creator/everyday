import styles from "./motion.module.scss";

import { VscArrowRight } from "react-icons/vsc";
import { BiRightArrowAlt, BiLeftArrowAlt } from "react-icons/bi";
import { ImArrowRight2 } from "react-icons/im";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { useEffect, useState } from "react";
import Link from "next/link";

const MotionCards = function () {
  let cardsdata = [
    {
      logo: "https://www.every-day.nl/app/uploads/2021/04/Group-183.svg",
      image:
        "https://www.every-day.nl/app/uploads/2021/04/0._Playdome_Tumb_highlight.jpg",
      title: "Playdome",
      description: "Branding, Webdesign & campagnes ",
    },
    {
      logo: "https://www.every-day.nl/app/uploads/2021/04/Linksome-2.svg",
      image:
        "https://www.every-day.nl/app/uploads/2021/04/new-Uitgelichte-afbeelding-staand-820x1050.jpg",
      title: "Linksome",
      description: "More than 5000+ users ",
    },
    {
      logo: "https://www.every-day.nl/app/uploads/2019/11/TB-logo-3.svg",
      image:
        "https://www.every-day.nl/app/uploads/2019/11/Thumb-Verticaal@2x-2.jpg",
      title: "TB Expertise",
      description: "More than 5000+ users ",
    },
    {
      logo: "https://www.every-day.nl/app/uploads/2020/10/peeters-logo2.svg",
      image:
        "https://www.every-day.nl/app/uploads/2022/06/Thumb-Verticaal-1.jpg",
      title: "Modoc",
      description: "Branding, Webdesign & campagnes ",
    },
    {
      logo: "https://www.every-day.nl/app/uploads/2020/10/C-Cinema-2.svg",
      image:
        "https://www.every-day.nl/app/uploads/2020/10/Tumb_peeters-staand.jpg",
      title: "Modoc",
      description: "Branding, Webdesign & campagnes ",
    },
    {
      logo: "https://www.every-day.nl/app/uploads/2019/10/5.svg",
      image: "https://www.every-day.nl/app/uploads/2022/06/Thumb-Verticaal.jpg",
      title: "Modoc",
      description: "Branding, Webdesign & campagnes ",
    },
    {
      logo: "https://www.every-day.nl/app/uploads/2019/08/Stripelight-logo-1.svg",
      image: "https://www.every-day.nl/app/uploads/2021/11/Group-281.jpg",
      title: "Modoc",
      description: "Branding, Webdesign & campagnes ",
    },
    {
      logo: "https://www.every-day.nl/app/uploads/2019/08/ginnekengin.svg",
      image:
        "https://www.every-day.nl/app/uploads/2019/08/Stripelight_hero-1-820x1050.jpg",
      title: "Modoc",
      description: "Branding, Webdesign & campagnes ",
    },
  ];

  let [pernum, setPernumber] = useState(3.5);
  useEffect(() => {
    if (window.outerWidth > 1000) {
      setPernumber(3.5);
    } else if (window.outerWidth < 1000 && window.outerWidth > 700) {
      setPernumber(3);
    } else if (window.outerWidth < 700 && window.outerWidth > 400) {
      setPernumber(2);
    } else if (window.outerWidth < 400 && window.outerWidth > 200) {
      setPernumber(1);
    }
  }, []);
  return (
    <div className={styles.swiperpart}>
      <div className={styles.title}>
        <div className={styles.left}>Succesverhalen</div>
        <Link href="/" className={styles.left}>
          <a>
            <VscArrowRight className={styles.icons} />
            <span>One world government</span>
          </a>
        </Link>
      </div>
      <Swiper
        className={styles.swiperfull}
        spaceBetween={20}
        loop={true}
        slidesPerView={pernum}
        autoplay={true}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {cardsdata.map((item, index) => {
          return (
            <SwiperSlide key={index} className={styles.swipercard}>
              <img src={item.logo} className={styles.logo} alt="" />
              <img className={styles.image} src={item.image} alt="" />
              <div className={styles.cover}>
                <div className={styles.textleft}>{item.title}</div>
                <div className={styles.textright}>
                  <span>
                    <ImArrowRight2 className={styles.icons} />
                  </span>{" "}
                  {item.description}
                </div>
              </div>
            </SwiperSlide>
          );
        })}
        <div className={`${styles.btncarousel} ${styles.btnleft}`}>
          <BiLeftArrowAlt />
        </div>
        <div className={`${styles.btncarousel} ${styles.btnright}`}>
          <BiRightArrowAlt />
        </div>
      </Swiper>
    </div>
  );
};
export default MotionCards;
