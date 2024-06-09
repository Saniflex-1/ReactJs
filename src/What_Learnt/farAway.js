const initialItems = [
  {
    id: 1,
    description: "Passport",
    quantity: 2,
    packed: true,
  },
  {
    id: 2,
    description: "Socks",
    quantity: 12,
    packed: false,
  },
  {
    id: 3,
    description: "Food",
    quantity: 20,
    packed: true,
  },
];

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
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>What do you need for your 💕 trip</h2>
      <select>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input text placeholder="Item...." />
      <button>ADD</button>
    </form>
  );
}

function PackList() {
  return (
    <ul className="pack">
      {initialItems.map((item) => (
        <Item item={item} />
      ))}
    </ul>
  );
}

function Item({ item }) {
  return (
    <div className="item">
      <li>
        <span style={item.packed ? { textDecoration: "line-through" } : {}}>
          {item.quantity} {item.description} <button>❌</button>
        </span>
      </li>
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
