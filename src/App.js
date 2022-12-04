import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Login from "./Components/Login";
import ProtectedRoutes from "./Components/ProtectedRoutes";
import Register from "./Components/RegisterUser";


function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    {/* protected route */}
                    <Route path="/" element={<ProtectedRoutes />}>
                        <Route path="/" element={<Home />} />
                    </Route>
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
