import { useState } from "react";

const messages = [
  "Learn it with all thy strengh",
  "Apply for jobs",
  "Invest it into your busiiness",
];

function App() {
  const [step, setStep] = useState(1);

  function handleNext() {
    if (step < 3) setStep(step + 1);
  }
  function handlePrevious() {
    if (step > 1) setStep(step - 1);
  }
  return (
    <div className="steps">
      <div className="numbers">
        <div className={step >= 1 ? "active" : ""}>1</div>
        <div className={step >= 2 ? "active" : ""}>2</div>
        <div className={step >= 3 ? "active" : ""}>3</div>
      </div>

      <div className="messages">
        Step {step}:{messages[step - 1]}
      </div>

      <div className="button">
        <button
          style={{ backgroundColor: "aqua", color: "black" }}
          onClick={handlePrevious}
        >
          Previous
        </button>
        <button
          style={{ backgroundColor: "aqua", color: "black" }}
          onClick={handleNext}
        >
          Next
        </button>
      </div>

      <h2>
        Progress: <progress value={"65"} max={"100"}></progress>65%
      </h2>
      <p>
        For <mark style={{ color: "red" }}>William</mark>
      </p>
      <meter optimum={"40"} value={"50"} high={"80"} max={"100"}>
        85%
      </meter>
    </div>
  );
}

export default App;
