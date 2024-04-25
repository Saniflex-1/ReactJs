import UseState from "./Components/useState";
// import StdudentID from "./Components/props.learner";

import NavBars from "./Components/nav.links";

function App() {
  return (
    <div>
      <NavBars />
      {/* <StdudentID /> */}

      <div className="down">
        <UseState />
      </div>
    </div>
  );
}
export default App;
