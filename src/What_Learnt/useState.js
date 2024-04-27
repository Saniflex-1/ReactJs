import { useState } from "react";

const messages = [
  "Learn it with all thy strengh",
  "Apply for jobs",
  "Invest it into your busiiness",
];

function UseState(isGood) {
  const [step, setStep] = useState(1);

  function handleNext() {
    if (step < 3) setStep((s) => s + 1);
  }
  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }

  const [isOepn, setIsOpen] = useState(true);
  function toggleButton() {
    setIsOpen((is) => !is);
  }

  // Counter
  const [count, setCount] = useState(0);

  function addNext() {
    if (count < 9) setCount((c) => c + 1);
  }
  function addPre() {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  return (
    <>
      <button
        style={{
          color: "olive",
          marginLeft: "500px",
          fontSize: "2rem",
          marginTop: "20px",
        }}
        onClick={toggleButton}
      >
        &times;
      </button>
      {isOepn && (
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

          <h2 style={{ color: "white", fontSize: "2.5rem" }}>{count}</h2>
          <button
            onClick={addNext}
            style={{ margin: "10px", color: "olive" }}
            class={count > 2 ? "isGoodS" : ""}
          >
            Increments {isGood && "👌"}
          </button>
          <button onClick={addPre}> Previous</button>
        </div>
      )}
    </>
  );
}

export default UseState;
