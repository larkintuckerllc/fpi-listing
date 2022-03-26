import Indicator from './Indicator';

function App() {
  console.log(window.fpiIndicators);
  return (
    <>
    {window.fpiIndicators.map((indicator) => (
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
