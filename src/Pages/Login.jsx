import { React,useState} from 'react';
import MainLogo from "../Assets/Group 3@2x.png";
import { useNavigate} from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        let credentials = {
            email: 'email@gmail.com',
            password:'password123'
        }

        if ((email == credentials.email) && (password == credentials.password)) {
            const token = 'validation123';
            sessionStorage.setItem('auth-token', token);
            navigate("/home");
        } else {
            navigate("/wrong");
        }
    }
  return (
    <div className="login_page">
      <div className="mainlogo">
        <img src={MainLogo} alt="logo" />
        <p>#We are Electric</p>
      </div>
      <div className='login-details'>
        <input type="text" placeholder="E-mail" onChange={(e)=>setEmail(e.target.value)}/>
              <input type="text" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <button className="btn" onClick={(e)=>handleSubmit(e)}>Login</button>
        <p>Forgot Password?</p>
      </div>
    </div>
  );
}

export default Login