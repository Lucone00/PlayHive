import ps5Controller from "../../assets/PS5-Controller-Transparent.png";
import xboxController from "../../assets/xbox-controller.png";
import nesController from "../../assets/nes-controller.png";
import './LoginControllers.css'

const LoginControllers = () => {
  return (
    <>
      <div className="controllers-container">
        <img className="ps5-controller fade-in" src={ps5Controller} />
        <img className="xbox-controller fade-in" src={xboxController} />
        <img className="nes-controller fade-in" src={nesController} />
      </div>
    </>
  );
};

export default LoginControllers;
