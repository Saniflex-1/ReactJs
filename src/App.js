// import UseState from "./Components/useState";
// import StdudentID from "./Components/props.learner";

import NavBars from "./Components/nav.links";
import HomePage from "./Components/home";
import HomeColor from "./Components/home.color";

function App() {
  return (
    <div>
      <NavBars />
      <div>
        <HomePage />
      </div>

      <div style={{ marginTop: "100px" }}>
        <HomeColor />
      </div>
    </div>
  );
}
export default App;
