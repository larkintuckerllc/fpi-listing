import styles from './index.module.css';

const scaleWidth = value =>  100 * ((value - 1) / 4);

const scaleColor = value =>  {
  if (value <= 1.5) return '#ff0000';
  if (value <= 2.0) return '#ff5050';
  if (value <= 2.5) return '#ff7c80';
  if (value <= 3) return '#ff9999';
  if (value <= 3.5) return '#ffcc99';
  if (value <= 4) return '#ffff99';
  if (value <= 4.5) return '#66ff66';
  return '#00cc00';
};

function Indicator({ community, ecological, economic, link, name }) {
  return (
    <div className={styles.root} >
      <div className={styles.title}><a href={link} target="_blank" rel="noreferrer">{name}</a></div>
      <div className={styles.indicator}>
        <div className={styles.indicator__title}>Ecological</div>
        <div className={styles.indicator__value}>
          <div
            className={styles.indicator__value__scale}
            style={{backgroundColor: scaleColor(ecological), width: `${scaleWidth(ecological)}%`}}
          >
          </div>
        </div>
      </div>
      <div className={styles.indicator}>
        <div className={styles.indicator__title}>Economic</div>
        <div className={styles.indicator__value}>
          <div
            className={styles.indicator__value__scale}
            style={{backgroundColor: scaleColor(economic), width: `${scaleWidth(economic)}%`}}
          >
          </div>
        </div>
      </div>
      <div className={styles.indicator}>
        <div className={styles.indicator__title}>Community</div>
        <div className={styles.indicator__value}>
          <div
            className={styles.indicator__value__scale}
            style={{backgroundColor: scaleColor(community), width: `${scaleWidth(community)}%`}}
          >
          </div>
        </div>
      </div>
    </div>
  );
}

export default Indicator;
