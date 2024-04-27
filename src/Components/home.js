function HomePage() {
  return (
    <>
      <div className="homeMe">
        <div className="homeCont">
          <div className="cont">
            <h1>
              Hair hacks <br />
              for women
            </h1>
            <p>
              Our game chaging semi-permanent glossing <br /> treatments that
              colours while it conditions.
            </p>
            <div className="home-shop">
              <button className="shop-btn">Shop now</button>
            </div>
          </div>
          <div className="conts">
            <img src="assets/s1.png" alt="beauty" />
          </div>
        </div>

        {/* Home footer */}
        <div className="homeFooter">
          <div className="homeFootItems">
            <p>
              Explore our colour <br /> Communities{" "}
            </p>
          </div>
          <div className="homeFootItems">
            <div
              className="foot"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                fontFamily: "poppins",
                lineHeight: "15px",
              }}
            >
              <img
                src="assets/w4.jpg"
                alt="wills"
                style={{
                  width: "37px",
                  borderRadius: "100px",
                  height: "37px",
                  // objectFit: "cover",
                }}
              />
              <p style={{ fontSize: "12px" }}>
                William Owusu at <br /> This Morning live
              </p>
            </div>
          </div>
          <div className="homeFootItems">
            <p>Connect with our Communitues</p>
          </div>
          <div className="homeFootItems">
            <p>Connect with our Communitues</p>
          </div>
          <div className="homeFootItems">
            <p>Connect with our Communitues</p>
          </div>

          <div className="codies">
            <p>
              Natural Beauty comes from <span>Codies Store</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
