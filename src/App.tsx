import { useState } from 'react';
import styles from './App.module.css';
import poweredImage from './assets/powered.png';
import arrowImage from './assets/leftarrow.png';
import { TypeLevel, calculateImc, levels } from './helpers/imc';
import { LevelInfo } from './components/LevelInfo';

export function App() {
  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);
  const [showLevel, setShowLavel] = useState<TypeLevel | null>(null);

  function handleCalculateButton() {
    if (!heightField && !weightField) {
      alert('Digite todos os campos');
    } else {
      setShowLavel(calculateImc(heightField, weightField));
    }
  }

  function handleBackButton() {
    setShowLavel(null);
    setHeightField(0);
    setWeightField(0);
  }

  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={poweredImage} width={150} />
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftside}>
          <h1>Calcule o seu IMC</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis,
            reprehenderit. Illo laboriosam sunt modi suscipit quas rerum debitis error.
          </p>

          <input
            type="number"
            placeholder="Digite a sua altura. Ex: 1.5 metros (em métros)"
            value={heightField > 0 ? heightField : ''}
            onChange={(event) => {
              setHeightField(Number(event.target.value));
            }}
            disabled={showLevel ? true : false}
          />

          <input
            type="number"
            placeholder="Digite o seu peso. Ex: 76.5 (em kilos)"
            value={weightField > 0 ? weightField : ''}
            onChange={(event) => {
              setWeightField(Number(event.target.value));
            }}
            disabled={showLevel ? true : false}
          />

          <button onClick={handleCalculateButton} disabled={showLevel ? true : false}>
            Calcular
          </button>
        </div>

        <div className={styles.rightside}>
          {!showLevel ? (
            <div className={styles.grid}>
              {levels.map((level, index) => {
                return <LevelInfo key={index} level={level} />;
              })}
            </div>
          ) : (
            <div className={styles.rightBig}>
              <div className={styles.rightArrow} onClick={handleBackButton}>
                <img src={arrowImage} width={30} />
              </div>
              <LevelInfo level={showLevel} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
