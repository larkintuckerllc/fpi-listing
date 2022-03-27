import { useCallback, useState } from 'react';
import Indicator from './Indicator';
import "./App.css";

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
    <>
    <div>
      <button onClick={handleSortNameClick}>Sort Name</button>
      <button onClick={handleSortCommunityClick}>Sort Community</button>
      <button onClick={handleSortEcologicalClick}>Sort Ecological</button>
      <button onClick={handleSortEconomicClick}>Sort Economic</button>
    </div>
    <div>{ascending ? 'ASCENDING' : 'DESCENDING'}</div>
    <div>{column}</div>
    {indicators.map((indicator) => (
      <Indicator
        community={indicator.community}
        ecological={indicator.ecological}
        economic={indicator.economic}
        key={indicator.id}
        name={indicator.name}
      />
    ))}
    </>
  );
}

export default App;
