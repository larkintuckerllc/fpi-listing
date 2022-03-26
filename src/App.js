function App() {
  return (
    <>
    {window.fpiIndicators.map((indicator) => <div key={indicator.id}>{indicator.name}</div>)}
    </>
  );
}

export default App;
