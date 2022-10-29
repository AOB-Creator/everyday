import styles from "./servicetop.module.scss";
function ServiceTop() {
  return (
    <div className={styles.service}>
      <div className={styles.container}>
        <h3>Wij helpen ambitieuze merken groeien</h3>
        <p>
          Met een sterke <span>focus op resultaat.</span> Want daar draait het
          om. Jij wilt het beste uit jouw merk halen en de{" "}
          <span>doelstellingen bereiken.</span> Wij kunnen je daarbij helpen met
          een slimme combinatie van strategie, design en techniek.
        </p>
        <div className={styles.bot}>
          <div className={styles.bot1}>
            <img
              src="https://www.every-day.nl/app/themes/everyday/dist/images/google-icon.png"
              alt=""
            />
          </div>
          <div className={styles.bot2}>
            <div>Internetmarketing in Roosendaal</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceTop;
