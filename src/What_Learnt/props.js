// const foodData = [
//   {
//     id: 1,
//     name: "Local Banku",
//     ingredients: "water, pan, okay, red",
//     Photo: "assets/ban.jpg",
//     price: 10,
//     soldOut: false,
//   },
//   {
//     id: 2,
//     name: "Rice Ball",
//     ingredients: "Rice, water, pan, okay, red",
//     Photo: "assets/banku.png",
//     price: 15,
//     soldOut: false,
//   },
//   {
//     id: 3,
//     name: "Local Tilapia",
//     ingredients: "Fresh, water, pan, okay, red",
//     Photo: "assets/tila.jpeg",
//     price: 50,
//     soldOut: false,
//   },
//   {
//     id: 4,
//     name: "Ewo kple",
//     ingredients: "corn dough, water, pan, okay, red",
//     Photo: "assets/saus.jpg",
//     price: 30,
//     soldOut: false,
//   },
//   {
//     id: 5,
//     name: "Local Fufu",
//     ingredients: "Cassava, water, pan, okay, red",
//     Photo: "assets/ok.jpg",
//     price: 0.5,
//     soldOut: false,
//   },
//   {
//     id: 6,
//     name: "Korkonte",
//     ingredients: "cassava, water, pan, okay, red",
//     Photo: "assets/img.jpg",
//     price: 70,
//     soldOut: true,
//   },
// ];

export default function App() {
  return (
    <div className="container">
      <NavBav />
      <Pattern />
      {/* <Header /> */}
      {/* <Menu />
      <Profile /> */}
      {/* <Footer /> */}
    </div>
  );
}

function NavBav() {
  return (
    <div className="navBar">
      <Logo />
      <Links />
      <SocialMedia />
    </div>
  );
}

function Logo() {
  return (
    <div className="logo">
      <h2>Logo</h2>
    </div>
  );
}

function Links() {
  return (
    <div className="Links">
      <ul className="links">
        <li>
          <a href="x">Home</a>
        </li>
        <li>
          <a href="x">About Us</a>
        </li>
        <li>
          <a href="x">Service</a>
        </li>
        <li>
          <a href="x">Portfolio</a>
        </li>
        <li>
          <a href="x">Contacts</a>
        </li>
      </ul>
    </div>
  );
}

function SocialMedia() {
  return (
    <div className="socials">
      <a href="x">
        <img src="assets/ban.jpg" alt="logo" />
      </a>
      <a href="x">
        <img src="assets/ban.jpg" alt="logo" />
      </a>
      <a href="x">
        <img src="assets/ban.jpg" alt="logo" />
      </a>
      <a href="x">
        <img src="assets/ban.jpg" alt="logo" />
      </a>
      <a href="x">
        <img src="assets/ban.jpg" alt="logo" />
      </a>
    </div>
  );
}

function Pattern() {
  return (
    <div className="pattern">
      <PatList
        img="assets/w4.jpg"
        alt="wills"
        bg="gold"
        name="Owusu William"
        text="I am Owusu William, I am very cool. I acmmdjI am Owusu William, I am
            very cool. I acmmdj I am Owusu William, I am very cool. I acmmdj"
        about="About Me"
        pre="Pre-School"
      />
      <PatList
        img="assets/faith.jpg"
        alt="wills"
        name="Ankorah Faith"
        bg="gold"
        text="I am very pretty and lucky girl, I am very cool. I acmmdjI am Owusu William, I am
            very cool. I acmmdj I am Owusu William, I am very cool. I acmmdj"
        about="About Me"
        pre="Hobbies"
      />
      <PatList
        name="Mary Precious"
        bg="gold"
        img="assets/NURSE.jpg"
        alt="wills"
        text="Nurse have drained my vein, I am very cool. I acmmdjI am Owusu William, I am
            very cool. I acmmdj I am Owusu William, I am very cool. I acmmdj"
        about="About Me"
        pre="Pre-School"
      />
    </div>
  );
}

function PatList(props) {
  return (
    <div className="patern-list">
      <div className="item">
        <img src={props.img} alt={props.alt} />
        <h3 style={{ backgroundColor: props.bg }}>{props.name}</h3>
        <div items>
          <p>{props.text}</p>
          <h3 className="details">
            <a href="x">{props.about}</a>
            <a href="x">{props.pre}</a>
          </h3>
        </div>
      </div>
    </div>
  );
}

// function Header() {
//   return <h1 className="header">Local Food Company</h1>;
// }

// function Menu() {
//   return (
//     <div className="menu">
//       <h2>Our Menu</h2>
//       <div className="me">
//         {foodData.map((food) => (
//           <Banku foodObj={food} key={food.name} />
//         ))}
//         {/* <Banku
//           name="Local Banku"
//           photoName="assets/ban.jpg"
//           price="20.oo"
//           ingredients="dough, water, corn, pan etc"
//         />
//         <Banku
//           name="Rice Ball"
//           photoName="assets/ok.jpg"
//           price="10.oo"
//           ingredients="water, rice, pan etc"
//         />
//         <Banku
//           name="Tilapia"
//           photoName="assets/tp.jpg"
//           price="30.oo"
//           ingredients="water, rice, pan etc"
//         /> */}
//       </div>
//     </div>
//   );
// }

// function Banku(props) {
//   return (
//     <div className={`food ${props.foodObj.soldOut ? "sold-out" : ""}`}>
//       <img src={props.foodObj.Photo} alt={props.name} />
//       <h3>{props.foodObj.name}</h3>
//       <h4>{props.foodObj.ingredients}</h4>
//       <p>{props.foodObj.soldOut ? "SOLD OUT" : props.foodObj.price}</p>
//     </div>
//   );
// }

// function Profile() {
//   return (
//     <div className="card">
//       <ProfilePho />
//       <Details />
//       <SkillList skill="HTML + CSS" bgs="red" colo="white" />
//       <SkillList skill="JavaScript" bgs="white" />
//       <SkillList skill="Python" bgs="#4cc" />
//       <SkillList skill="Mark up Language" bgs="orange" />
//     </div>
//   );
// }

// function ProfilePho() {
//   return (
//     <div className="imgs">
//       <img src="assets/w4.jpg" alt="photos" />
//     </div>
//   );
// }

// function Details() {
//   return (
//     <div>
//       <div className="data">
//         <h4>Owusu William</h4>
//         <p>
//           Profile is always me ai djh Ajjf I will BE goinhProfile is always me
//           ai djh Ajjf I will BE goinhProfile is always me ai djh Ajjf I will BE
//           goinhProfile is always me ai djh Ajjf I will BE goinh
//         </p>
//       </div>
//     </div>
//   );
// }

// function SkillList(colors) {
//   return (
//     <div className="skill-list">
//       <div
//         className="skill"
//         style={{ backgroundColor: colors.bgs, color: colors.colo }}
//       >
//         <div>{colors.skill}</div>
//       </div>
//     </div>
//   );
// }

// function Footer(props) {
//   const hour = new Date().getHours();
//   const openHour = 12;
//   const closeHour = 22;
//   const isOpen = hour <= openHour && hour <= closeHour;
//   return (
//     <div>
//       {isOpen && `we are open until ${closeHour}:00 or order online`}
//       <button>Order Now</button>
//     </div>
//   );
// }
