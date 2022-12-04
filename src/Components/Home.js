import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";

const Home = () => {
    const navigate = useNavigate();
    const userName = JSON.parse(localStorage.getItem("user"));

    const handleLogout = () => {
        localStorage.removeItem("loggedIn");
        navigate("/login");
    };

    const [dogInfo, setDogInfo] = useState([]);
    const [dogBreed, setDogbreed] = useState('')

    const allBreeds = () => {
        fetch("https://dog.ceo/api/breeds/list/all")
            .then((res) => res.json())
            .then((data) => {
                let breedNames = Object.keys(data.message);
                return setDogInfo(breedNames);
            });
        console.log(dogInfo);
    };

    console.log(dogBreed);
    return (
        <div>
            <div className="btn">
                <button onClick={allBreeds}>All Breeds</button>
                <button onClick={handleLogout}>Logout</button>
            </div>
            <div>
                <div>
                    {dogInfo.map((element, index) => {
                        return (
                            <div key={index}>
                                <ul>
                                    <li> <button onClick={e => setDogbreed(e)}>{element}</button></li>
                                </ul>
                            </div>
                        );
                    })}
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default Home;
