function HomeColor() {
  return (
    <>
      <div className="home-ceal" id="products">
        <h5>DISCOVER OUR PRODUCTS</h5>
        <h2>Colour, Conceal, & Skin Care</h2>
        <h6>
          Let a world leading skin colour expert <mark>" Codies "</mark> help
          create natural, <br /> glossy, modern hair that feels like you
        </h6>

        <div className="img-products">
          <div className="pro" style={{ backgroundColor: "purple" }}>
            <img src="assets/pro3/anti-age.png" alt="anti-aging" />
            <span></span>
            <h3>Anti-Aging facial oil</h3>
            <p>Codies beauty channel, anti aging facial oil.</p>
          </div>
          <div className="pro">
            <img src="assets/pro3/facial.png" alt="bank" />
            <span></span>
            <h3>Carrot facial soap</h3>
            <p>Codies beauty channel, carrot facial soap.</p>
          </div>
          <div className="pro" style={{ backgroundColor: "orangered" }}>
            <img src="assets/pro3/black.png" alt="bank" />
            <span></span>
            <h3>African Black Soap</h3>
            <p>Codies beauty channel, anti aging facial oil.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeColor;
