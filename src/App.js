// import UseState from "./Components/useState";
// import StdudentID from "./Components/props.learner";

import NavBars from "./Components/nav.links";
import HomePage from "./Components/home";
import HomeColor from "./Components/home.color";
import WhatClienntsSays from "./Components/clientSays";

function App() {
  return (
    <div>
      <NavBars />
      <HomePage />
      <HomeColor />
      <WhatClienntsSays />

      {/* <div>
        <HomePage />
      </div>

      <div>
        <HomeColor />
      </div>

      <div>
        <WhatClienntsSays />
      </div> */}
    </div>
  );
}
export default App;
