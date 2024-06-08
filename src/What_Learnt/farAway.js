function FarAways() {
  return (
    <div className="trips">
      <Logo />
      <Form />
      <PackList />
      <Stats />
    </div>
  );
}

function Logo() {
  return (
    <div>
      <h2 className="header"> 🌴FAR AWAY💼</h2>
    </div>
  );
}
function Form() {
  return (
    <div className="form">
      <h2>What do you need for your 💕 trip</h2>
    </div>
  );
}

function PackList() {
  return (
    <div className="pack">
      <h3>PackList</h3>
    </div>
  );
}

function Stats() {
  return (
    <div>
      <footer>All right reserved</footer>
    </div>
  );
}

export default FarAways;
