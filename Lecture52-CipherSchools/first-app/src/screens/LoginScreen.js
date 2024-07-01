import isEmail from "validator/lib/isEmail";
import { loginUserApi } from "../api/user-api";
import { useState } from "react";
import { loginUser } from "../utils/loginUtil";
import { useNavigate } from "react-router-dom";
// installing axios
const LoginScreen = () => {

  const [credentials, setCredentials] = useState({ email: "", password: "" });

  // helps in navigating from one page to another 
  const navigate = useNavigate();

  const credentialValidator = ({ email, password }) => {
    if (isEmail(email) && password?.length >= 8) {
      return true;
    }
    return false;
  };

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
    if (!credentialValidator(credentials)) {
      return;
    }
    await loginUser({ ...credentials });
    navigate("/to-do");
    } catch(err){
      console.error(`Invalid credentials`);
    }
    

  }

  return (
    <div className="screen">
      <h1 className="ui heading center">Login</h1>
      <div>
        <form className="ui form" onSubmit={handleSubmit}>
          <div className="field">
            <label>Email</label>
            <input type="email" name="email" placeholder="email..." onChange={handleChange} value={credentials.email} />
          </div>
          <div className="field">
            <label>Password</label>
            <input type="password" name="password" placeholder="password..." minLength={8} onChange={handleChange} value={credentials.password} />
          </div>
          <button className="ui button" type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default LoginScreen;
