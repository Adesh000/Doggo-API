import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";
import { useState } from "react";

const Register = () => {
    const [input, setInput] = useState({
        name: "",
        email: "",
        password: "",
    });

    const navigate = useNavigate();
    //store value in local storage

    const handleRegister = (e) => {
        e.preventDefault();
        localStorage.setItem("user", JSON.stringify(input));
        navigate("/login");
    };

    return (
        <div className="main">
            <form onSubmit={handleRegister}>
                <h2>REGISTER</h2>
                <label htmlFor="userName">Name</label>
                <input
                    type="text"
                    name="name"
                    id="userName"
                    value={input.name}
                    onChange={(e) =>
                        setInput({ ...input, [e.target.name]: e.target.value })
                    }
                />
                <br />
                
                <label htmlFor="userEmail">Email</label>
                <input
                    type="email"
                    id="userEmail"
                    name="email"
                    onChange={(e) =>
                        setInput({ ...input, [e.target.name]: e.target.value })
                    }
                    value={input.email}
                />
                <br />
                <label htmlFor="userPassword">Password</label>
                <input
                    type="text"
                    id="userPassword"
                    name="password"
                    onChange={(e) =>
                        setInput({ ...input, [e.target.name]: e.target.value })
                    }
                    value={input.password}
                />
                <br />
                <button type="submit" className="submit-btn">
                    Register
                </button>
                <br />
                <div className="line">
                    <p>
                        Already have an account ?{" "}
                        <Link to="/login">
                            <span>Login here</span>
                        </Link>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Register;
