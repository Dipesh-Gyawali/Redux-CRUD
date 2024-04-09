import { useDispatch } from "react-redux";
import "./_login.scss";
import { logIn } from "../action/action";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    dispatch(logIn());

    navigate("/");
  };
  return ( 
    <>
      <div className="login-container">
        <div className="text-password-container">
          <input type="email" placeholder=" Enter your email" />
          <input type="password" placeholder=" Enter your password" />
          <button onClick={handleLogin}>Log in</button>
        </div>
      </div>
    </>
  );
};
