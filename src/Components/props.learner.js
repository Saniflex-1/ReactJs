import { useState } from "react";
import PropType from "prop-types";

const pro = ["Biscuit", "Choco", "gum"];

function Students() {
  return (
    <div>
      <StudentDetails name="William" Age={27} gender="Male" isStudent={true} />
      <StudentDetails name="Premper" Age={21} gender="Male" isStudent={false} />
      <StudentDetails name="Faith" Age={24} gender="Female" isStudent={true} />
      <StudentDetails />
    </div>
  );
}

function StudentDetails(props) {
  const [product, setProduct] = useState(1);
  function setProducts() {
    if (product < 3) {
      setProduct((s) => s + 1);
    }
  }
  return (
    <div className="students">
      <h2>Name: {props.name}</h2>
      <p>Age: {props.Age}</p>
      <p>Gender: {props.gender}</p>
      <p>Student: {props.isStudent ? "Yes" : "No"}</p>
      <button onClick={setProducts}>ChangeProduct</button>
      <p>product: {pro[product - 1]}</p>
    </div>
  );
}

StudentDetails.protoType = {
  nane: PropType.string,
  Age: PropType.number,
  isStudent: PropType.bool.isRequired,
};

StudentDetails.defaultProps = {
  name: "guestName",
  Age: 0,
  gender: "notSet",
  isStudent: "no",
};

export default Students;
