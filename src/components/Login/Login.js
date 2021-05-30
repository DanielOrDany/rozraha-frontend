import React,{useState} from "react";
import "./Login.css"
import { useHistory } from "react-router-dom";

const Login = () => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory();

    const validUser = {
        name: 'testuser',
        password: '1234'
    }
    

    const handleNameChange = (event) => {
        setName(event.target.value)
    }
    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

    const handleLogin = () => {
        const isValidUsername = name === validUser.name
        const isValidPassword = password === validUser.password
        if(!isValidPassword && !isValidUsername) {
            return
        }
        history.push("/tables/books")
    }

    return (
        <div className="center">
            <h1>Login</h1>
            <form>
                <div className="txt_field">
                    <input type="text" required value={name} onChange={handleNameChange}/>
                    <span></span>
                    <label>Username</label>
                </div>
                <div className="txt_field">
                    <input type="password" required value={password} onChange={handlePasswordChange}/>
                    <span></span>
                    <label>Password</label>
                </div>
                <input type="submit"  value="Login" onClick={handleLogin}/>
            </form>
        </div>
    );
};

export default Login;
