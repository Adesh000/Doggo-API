import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Details = () => {
    const [breedImg, setBreedImg] = useState([]);
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("loggedIn");
        navigate("/login");
    };

    const dogImage = () => {
        fetch("https://dog.ceo/api/breed/hound/images")
            .then((res) => res.json())
            .then((data) => {
                return setBreedImg(data.message);
            });
    };
    return (
        <div>
            <button onClick={dogImage}>click</button>
            <button onClick={handleLogout}>Logout</button>
            {breedImg.map((item, index) => {
                return (
                    <div className="col-sm" key={index}>
                        <img src={item} alt="" />
                    </div>
                );
            })}
        </div>
    );
};

export default Details;
