function HomeColor() {
  return (
    <>
      <div className="home-ceal" id="products">
        <h5>DISCOVER OUR PRODUCTS</h5>
        <h2>Colour, Conceal, & Skin Care</h2>
        <h6>
          Let a world leading skin colour expert{" "}
          <a href="/">
            <mark> Codies </mark>
          </a>
          help create natural, <br /> glossy, modern hair that feels like you
        </h6>

        <div className="img-products">
          <div className="pro" style={{ backgroundColor: "purple" }}>
            <ProDetails
              proName="Anti-Aging facial oil"
              proImg="assets/pro3/anti-age.png"
              proDetails="Codies beauty channel, anti aging facial oil."
              proAlt="anti-aging"
            />
          </div>
          <div className="pro">
            <ProDetails
              proName="Carrot facial soap"
              proImg="assets/pro3/facial.png"
              proDetails="Codies beauty channel, carrot facial soap."
              proAlt="Carrot facial soap"
            />
          </div>

          <div className="pro" style={{ backgroundColor: "orangered" }}>
            <ProDetails
              proName="African Black Soap"
              proImg="assets/pro3/black.png"
              proDetails="Codies beauty channel, anti aging facial oil."
              proAlt="African Black Soap"
            />
          </div>
          <div className="pro" style={{ backgroundColor: "purple" }}>
            <ProDetails
              proName="Carrot facial soap"
              proImg="assets/pro3/facial.png"
              proDetails="Codies beauty channel, anti aging facial oil."
              proAlt="African Black Soap"
            />
          </div>
        </div>
      </div>
    </>
  );
}

function ProDetails(props) {
  return (
    <>
      <img src={props.proImg} alt={props.proAlt} />
      <span></span>
      <h3>{props.proName}</h3>
      <p>{props.proDetails}</p>
    </>
  );
}

export default HomeColor;
