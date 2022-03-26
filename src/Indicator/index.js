function Indicator({ community, ecological, economic, name }) {
  return (
    <>
      <div><b>{name}</b></div>
      <div>Community: {community}</div>
      <div>Ecological: {ecological}</div>
      <div>Economic: {economic}</div>
    </>
  );
}

export default Indicator;
