import React, { useState } from "react";
import { Link } from "react-router-dom";


const Home = () => {
    

    

    const [dogInfo, setDogInfo] = useState([]);

    const allBreeds = () => {
        fetch("https://dog.ceo/api/breeds/list/all")
            .then((res) => res.json())
            .then((data) => {
                let breedNames = Object.keys(data.message);
                return setDogInfo(breedNames);
            });
    };

    return (
        <div>
            <div className="btn">
                <button onClick={allBreeds}>All Breeds</button>
            </div>
            <div>
                <div>
                    {dogInfo.map((element, index) => {
                        return (
                            <div key={index}>
                                <ul>
                                    <li>
                                        {" "}
                                        <Link to="/details">
                                            <button>{element}</button>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Home;
