import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";

const Login = () => {
    const [userData, setUserData] = useState({
        email: "",
        password: "",
    });

    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const loggedUser = JSON.parse(localStorage.getItem("user"));
        if (
            userData.email === loggedUser.email &&
            userData.password === loggedUser.password
        ) {
            localStorage.setItem("loggedIn", true);
            navigate("/");
        } else {
            alert("Wrong user credentials");
        }
    };

    return (
        <div className="main">
            <form onSubmit={handleLogin}>
                <h2>LOGIN</h2>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    onChange={(e) =>
                        setUserData({
                            ...userData,
                            [e.target.name]: e.target.value,
                        })
                    }
                    value={userData.email}
                />
                <br />
                <label htmlFor="password">Password</label>
                <input
                    type="text"
                    id="password"
                    name="password"
                    onChange={(e) =>
                        setUserData({
                            ...userData,
                            [e.target.name]: e.target.value,
                        })
                    }
                    value={userData.password}
                />
                <br />
                <button type="submit" className="submit-btn">
                    Login
                </button>
                <br />
                <div className="line">
                    <p>
                        Don't have any account ?{" "}
                        <Link to="/register">
                            <span>Register</span>
                        </Link>{" "}
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Login;
