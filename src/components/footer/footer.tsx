import "./Footer.css";

function Footer() {
  return (
    <div className={"footer"}>
        <div className="icons">
            <a href="https://www.linkedin.com/in/tatiana-triukhova-437718212/"><img className="icon" src="linkedIn.svg" alt="linkedIn"/></a>
            <a href="https://github.com/TatianaTriukhova"><img className="icon" src="github.svg" alt="github"/></a>
            <a href="mailto:tatiana.triukhova@gmail.com"><img className="icon" src="email.svg" alt="email"/></a>
        </div>
    </div>
  );
}

export default Footer;
