import Quotes from "./Quotes";
import LoginForm from "./LoginForm";
import LoginControllers from "./LoginControllers";
import "./MainLogin.css";
import chocobo from '../../assets/chocobo.png'

const MainLogin = () => {
  return (
    <>
      <div className="login-main">
        <div className="login-header">
          <div className="login-logo">
            <p className="login-title">PlayHive</p>
          </div>
        </div>
        <div className="login-body">
          <div className="login-quotes">
            <Quotes />
            <div className="controllers-images">
              <LoginControllers />
            </div>
          </div>
          <div className="login-form">
            <LoginForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainLogin;
