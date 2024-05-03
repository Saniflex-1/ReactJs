function ClientsSays() {
  return (
    <>
      <div className="clientd">
        <div className="videoDiv">
          <ClientDetails com="COMMUNITY" />
        </div>
        <div className="videoDiv">
          <ClientDetails videoSRC="./assets/pro3/codio.mp4" />
        </div>
      </div>
    </>
  );
}

function ClientDetails(props) {
  <>
    <div className="manSays">
      <h6>{props.com}</h6>
    </div>
  </>;
}

export default ClientsSays;
