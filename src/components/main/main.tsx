import "./Main.css";

function Main() {
  return (
    <div className="mainContainer">
      <a id={"main"} className="buffer"></a>
      <div className="imgWrapper">
        <img
          className="backgroundImg"
          src="background1.jpg"
          alt="Background image"
        ></img>
      </div>
      <div className="mainContent">
        <div className="pictureWrapper">
          <img className="picture" src="la.jpg" alt="Picture"></img>
        </div>
        <div className="info">
          <span className="infoName">Tatiana Triukhova</span>
          <span className="infoOccupation">WEB DEVELOPER</span>
          <span className="fieldHeader">Phone:</span>
          <span className="fieldContent">(+32) 474162767</span>
          <span className="fieldHeader">Email:</span>
          <a href="mailto:tatiana.triukhova@gmail.com" className="fieldContent">
            tatiana.triukhova@gmail.com
          </a>
          <span className="fieldHeader">Websites:</span>
          <a
            href="https://github.com/TatianaTriukhova"
            className="fieldContent"
          >
            Github
          </a>
          <a
            href="https://linkedin.com/in/tatiana-triukhova-437718212/"
            className="fieldContent"
          >
            Linkedin
          </a>
        </div>
      </div>
      <div className="introSection">
        <h2>Hello! I am Tatiana</h2>
        <p>
          Web developer always open to opportunities to push my boundaries
          further, contribute to the projects that matter and get inspired by
          talented people
        </p>
      </div>
    </div>
  );
}

export default Main;
