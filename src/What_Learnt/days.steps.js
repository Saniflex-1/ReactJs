import { useState } from "react";

function Days() {
  const [steps, setSteps] = useState(1);
  const [counts, setCounts] = useState(0);
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date("June 6 2024");
  date.setDate(date.getDate() + counts);

  return (
    <div>
      <div className="cent">
        <h3>
          <button onClick={() => setSteps((s) => s - 1)}>-</button> Steps:{" "}
          {steps}
          <button onClick={() => setSteps((s) => s + 1)}>+</button>
        </h3>
        <h3>
          <button onClick={() => setCounts((c) => c - steps)}>-</button> Counts:{" "}
          {counts}
          <button onClick={() => setCounts((c) => c + steps)}>+</button>
        </h3>
        <p>
          {counts === 0
            ? "Today is "
            : counts > 0
            ? `${counts} days from today is `
            : `${Math.abs(counts)} days ago was `}
        </p>
        <p>{date.toDateString()}</p>

        <h3>
          <button onClick={() => setStep((s) => s - 1)}>-</button> Steps:
          {step}
          <button onClick={() => setStep((s) => s + 1)}>+</button>
        </h3>
        <h3>
          <button onClick={() => setCount((st) => st - step)}>-</button>
          Counts: {Math.abs(count)}
          <button onClick={() => setCount((cs) => cs + step)}>+</button>
        </h3>
      </div>
    </div>
  );
}

export default Days;
