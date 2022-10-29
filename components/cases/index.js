import styles from "./cases.module.scss";
import SixCases from "../sixcases";
import LetsWork from "../letswork";
import Case3 from "../case3";

function Cases() {
  let casescard = [
    {
      id: 2,
      logo: "https://www.every-day.nl/app/uploads/2022/09/VroTech.svg",
      image:
        "https://co10.nevseoboi.com.ua/posts/2011-06/1307265776_big-gun-wallpapers-3-299_www.nevseoboi.com.ua.jpg",
      title: "VroTech",
      description: "Professionalisering van merk, beeldtaal en online platform",
    },
    {
      id: 234,
      logo: "https://www.every-day.nl/app/uploads/2022/08/Mason-Garments.svg",
      image: "https://www.fonstola.ru/images/201311/fonstola.ru_134681.jpg",
      title: "Mason Garments",
      description: "Professionalisering van merk, beeldtaal en online platform",
    },
    {
      id: 25,
      logo: "https://www.every-day.nl/app/uploads/2022/09/NXTBUY-2.svg",
      image:
        "https://co10.nevseoboi.com.ua/posts/2011-06/1307265734_big-gun-wallpapers-3-297_www.nevseoboi.com.ua.jpg",
      title: "VroTech",
      description: "Professionalisering van merk, beeldtaal en online platform",
    },
    {
      id: 4,
      logo: "https://www.every-day.nl/app/uploads/2022/09/Touchfix.svg",
      image:
        "https://img3.goodfon.com/original/2880x1800/2/ee/military-gun-assault-rifle.jpg",
      title: "VroTech",
      description: "Professionalisering van merk, beeldtaal en online platform",
    },
    {
      id: 5,
      logo: "https://www.every-day.nl/app/uploads/2022/09/NXTBUY-2.svg",
      image: "https://wallpapercave.com/wp/wp5438832.jpg",
      title: "VroTech",
      description: "Professionalisering van merk, beeldtaal en online platform",
    },
    {
      id: 6,
      logo: "https://www.every-day.nl/app/uploads/2022/09/CultuurCompaan.svg",
      image: "https://s1.1zoom.ru/b5050/729/375388-sepik_2048x1152.jpg",
      title: "VroTech",
      description: "Professionalisering van merk, beeldtaal en online platform",
    },
  ];
  let weapons = [
    {
      id: 1,
      logo: "https://www.every-day.nl/app/uploads/2022/09/VroTech.svg",
      image:
        "https://glimageurl.golocall.com/golocal-post/image/314712_bhandarigunhouse1565409582.jpeg",
      title: "VroTech",
      description: "Professionalisering van merk, beeldtaal en online platform",
    },
    {
      id: 2,
      logo: "https://www.every-day.nl/app/uploads/2022/09/VroTech.svg",
      image:
        "https://www.wallpaperbetter.com/wallpaper/292/258/537/assault-rifle-2K-wallpaper.jpg",
      title: "VroTech",
      description: "Professionalisering van merk, beeldtaal en online platform",
    },
    {
      id: 3,
      logo: "https://www.every-day.nl/app/uploads/2022/09/VroTech.svg",
      image:
        "https://cdn.fishki.net/upload/post/201408/09/1292425/1_image_0087.jpg",
      title: "VroTech",
      description: "Professionalisering van merk, beeldtaal en online platform",
    },
    {
      id: 4,
      logo: "https://www.every-day.nl/app/uploads/2022/09/VroTech.svg",
      image:
        "https://www.wallpaperup.com/uploads/wallpapers/2015/05/16/688077/47dbc6726e58e7ca6707958592b93143-1400.jpg",
      title: "VroTech",
      description: "Professionalisering van merk, beeldtaal en online platform",
    },
    {
      id: 5,
      logo: "https://www.every-day.nl/app/uploads/2022/09/VroTech.svg",
      image: "https://www.fonstola.ru/images/201311/fonstola.ru_134681.jpg",
      title: "VroTech",
      description: "Professionalisering van merk, beeldtaal en online platform",
    },
    {
      id: 6,
      logo: "https://www.every-day.nl/app/uploads/2022/09/VroTech.svg",
      image:
        "https://img1.goodfon.com/original/2880x1800/4/71/ar-15-oruzhie-shturmovaia-vintovka-stil-pistolet-shlem.jpg",
      title: "VroTech",
      description: "Professionalisering van merk, beeldtaal en online platform",
    },
  ];
  return (
    <div className={styles.cases}>
      <Case3 />
      <SixCases carddata={casescard} title="Onze cases" />
      <LetsWork />
      <SixCases carddata={weapons} title="Weapons" />
    </div>
  );
}

export default Cases;
