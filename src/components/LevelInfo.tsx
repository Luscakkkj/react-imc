import DownImage from '../assets/down.png';
import UpImage from '../assets/up.png';
import styles from './LevelInfo.module.css';
import { TypeLevel } from '../helpers/imc';

type LevelInfoProps = {
  level: TypeLevel;
};

export function LevelInfo({ level }: LevelInfoProps) {
  return (
    <div className={styles.main} style={{ backgroundColor: level.color }}>
      <div className={styles.levelIcon}>
        {level.icon === 'up' ? (
          <img src={UpImage} width={40} />
        ) : (
          <img src={DownImage} width={40} />
        )}
      </div>
      <div className={styles.levelTitle}>{level.title}</div>

      {level.userImc && (
        <div className={styles.imc}>Seu imc é de {level.userImc.toFixed(2)}</div>
      )}

      <div className={styles.levelInfo}>
        <>
          IMC está entre <strong>{level.imc[0]}</strong> e {level.imc[1]}
        </>
      </div>
    </div>
  );
}
