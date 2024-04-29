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
            <img src="assets/ban.jpg" alt="bank" />
            <span></span>
            <p>Permanent Color Kits</p>
          </div>
          <div className="pro">
            <img src="assets/ban.jpg" alt="bank" />
            <span></span>
            <p>Permanent Color Kits</p>
          </div>
          <div className="pro" style={{ backgroundColor: "orangered" }}>
            <img src="assets/ban.jpg" alt="bank" />
            <span></span>
            <p>Local goods</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeColor;
