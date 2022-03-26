import { useCallback, useState } from 'react';
import Indicator from './Indicator';

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

function App() {
  const [indicators, setIndicators] = useState(window.fpiIndicators.sort(sortNameAsc));

  const handleSortNameAscClick = useCallback(
    () => {
      const newIndicators = [...indicators];
      newIndicators.sort(sortNameAsc);
      setIndicators(newIndicators);
    }, [indicators],
  );

  const handleSortNameDecClick = useCallback(
    () => {
      const newIndicators = [...indicators];
      newIndicators.sort(sortNameDec);
      setIndicators(newIndicators);
    }, [indicators],
  );

  const handleSortCommunityAscClick = useCallback(
    () => {
      const newIndicators = [...indicators];
      newIndicators.sort(sortCommunityAsc);
      setIndicators(newIndicators);
    }, [indicators],
  );

  const handleSortCommunityDecClick = useCallback(
    () => {
      const newIndicators = [...indicators];
      newIndicators.sort(sortCommunityDec);
      setIndicators(newIndicators);
    }, [indicators],
  );

  return (
    <>
    <div>
      <button onClick={handleSortNameAscClick}>Sort Name Asc</button>
      <button onClick={handleSortCommunityAscClick}>Sort Community Asc</button>
      <button>Sort Ecological Asc</button>
      <button>Sort Economic Asc</button>
    </div>
    <div>
      <button onClick={handleSortNameDecClick}>Sort Name Dec</button>
      <button onClick={handleSortCommunityDecClick}>Sort Community Dec</button>
      <button>Sort Ecological Dec</button>
      <button>Sort Economic Dec</button>
    </div>
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
