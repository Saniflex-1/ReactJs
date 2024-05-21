function ClientsSays() {
  return (
    <>
      <div className="clitd">
        <div className="videoDiv">
          <ClientDetails com="COMMUNITY" />
        </div>
        <div className="videDiv">
          <ClientDetails videoSRC="./assets/pro3/codio.mp4" />
        </div>

        <video src="./assets/pro3/codio.mp4" autoPlay>
          {" "}
          hello
        </video>
      </div>
    </>
  );
}

function ClientDetails(props) {
  <>
    {/* <div className="manSays">
      <h6>{props.com}</h6>
      <video src={props.videoSRC}></video>
    </div> */}

    <h1>Hello clients</h1>
  </>;
}

export default ClientsSays;
