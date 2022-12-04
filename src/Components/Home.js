import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate()
    const userName = JSON.parse(localStorage.getItem('user'))

    const handleLogout = () => {
        localStorage.removeItem('loggedIn')
        navigate("/login");
    }

    const [dogInfo, setDogInfo] = useState([]);

    const allBreeds = () => {
        fetch('https://dog.ceo/api/breeds/list/all').then(res => res.json()).then(data => {
            return setDogInfo(data.message)
        })
    }
    return (
        <div>
            <button onClick={allBreeds}>All Breeds</button>
            <div>{dogInfo[5]}</div>
            <button onClick={handleLogout}>
                Logout
            </button>
        </div>
    );
};

export default Home;
