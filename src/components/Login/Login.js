import React from "react";
import "./Login.css"
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div class="center">
            <h1>Login</h1>
            <form method="post">
                <div class="txt_field">
                    <input type="text" required />
                    <span></span>
                    <label>Username</label>
                </div>
                <div class="txt_field">
                    <input type="password" required />
                    <span></span>
                    <label>Password</label>
                </div>
                <Link to="/tables"><input type="submit"  value="Login" /></Link>
            </form>
        </div>
    );
};

export default Login;
