import { useCallback, useState } from 'react';
import Indicator from './Indicator';
import "./App.css";
import styles from './App.module.css';

const sortNameAsc = (a, b) => {
  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  return 0;
};

const sortNameDec = (a, b) => {
  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();
  if (nameA < nameB) {
    return 1;
  }
  if (nameA > nameB) {
    return -1;
  }
  return 0;
};

const sortCommunityAsc = (a, b) => a.community - b.community;

const sortCommunityDec = (a, b) => b.community - a.community;

const sortEcologicalAsc = (a, b) => a.ecological - b.ecological;

const sortEcologicalDec = (a, b) => b.ecological - a.ecological;

const sortEconomicAsc = (a, b) => a.economic - b.economic;

const sortEconomicDec = (a, b) => b.economic - a.economic;

function App() {
  const [indicators, setIndicators] = useState(window.fpiIndicators.sort(sortNameAsc));
  const [column, setColumn] = useState('name');
  const [ascending, setAscending] = useState(true);

  const handleSortNameClick = useCallback(
    () => {
      const newIndicators = [...indicators];
      let newAscending = true;
      if (!ascending || column !== 'name' ) {
        newIndicators.sort(sortNameAsc);
        newAscending = true;
      } else {
        newIndicators.sort(sortNameDec);
        newAscending = false;
      }
      setColumn('name');
      setAscending(newAscending);
      setIndicators(newIndicators);
    }, [indicators, column, ascending],
  );

  const handleSortCommunityClick = useCallback(
    () => {
      const newIndicators = [...indicators];
      newIndicators.sort(sortNameAsc);
      let newAscending = true;
      if (!ascending || column !== 'community' ) {
        newIndicators.sort(sortCommunityAsc);
        newAscending = true;
      } else {
        newIndicators.sort(sortCommunityDec);
        newAscending = false;
      }
      setColumn('community');
      setAscending(newAscending);
      setIndicators(newIndicators);
    }, [indicators, column, ascending],
  );

  const handleSortEcologicalClick = useCallback(
    () => {
      const newIndicators = [...indicators];
      newIndicators.sort(sortNameAsc);
      let newAscending = true;
      if (!ascending || column !== 'ecological' ) {
        newIndicators.sort(sortEcologicalAsc);
        newAscending = true;
      } else {
        newIndicators.sort(sortEcologicalDec);
        newAscending = false;
      }
      setColumn('ecological');
      setAscending(newAscending);
      setIndicators(newIndicators);
    }, [indicators, column, ascending],
  );

  const handleSortEconomicClick = useCallback(
    () => {
      const newIndicators = [...indicators];
      newIndicators.sort(sortNameAsc);
      let newAscending = true;
      if (!ascending || column !== 'economic' ) {
        newIndicators.sort(sortEconomicAsc);
        newAscending = true;
      } else {
        newIndicators.sort(sortEconomicDec);
        newAscending = false;
      }
      setColumn('economic');
      setAscending(newAscending);
      setIndicators(newIndicators);
    }, [indicators, column, ascending],
  );

  return (
    <div className={styles.root}>
      <div className={styles.root__title}>FPI Listing</div>
      <div className={styles.root__controls}>
        <span onClick={handleSortNameClick} className={styles.root__controls__button}>
          Name
          {column === 'name' && ascending && <div className={styles.arrowUp}></div>}
          {column === 'name' && !ascending && <div className={styles.arrowDown}></div>}
        </span>
        <span onClick={handleSortEcologicalClick} className={styles.root__controls__button}>
          Ecological
          {column === 'ecological' && ascending && <div className={styles.arrowUp}></div>}
          {column === 'ecological' && !ascending && <div className={styles.arrowDown}></div>}
        </span>
        <span onClick={handleSortEconomicClick} className={styles.root__controls__button}>
          Economic
          {column === 'economic' && ascending && <div className={styles.arrowUp}></div>}
          {column === 'economic' && !ascending && <div className={styles.arrowDown}></div>}
        </span>
        <span onClick={handleSortCommunityClick} className={styles.root__controls__button}>
          Community
          {column === 'community' && ascending && <div className={styles.arrowUp}></div>}
          {column === 'community' && !ascending && <div className={styles.arrowDown}></div>}
        </span>
      </div>
      {indicators.map((indicator) => (
        <Indicator
          community={indicator.community}
          ecological={indicator.ecological}
          economic={indicator.economic}
          key={indicator.id}
          link={indicator.link}
          name={indicator.name}
        />
      ))}
    </div>
  );
}

export default App;
