import React  from "react";
import axios from "axios";
import {useHistory} from "react-router-dom";


const Main = () => {
    const routerHistory = useHistory();


    const getSingleUser = () => {
        axios.get("http://localhost:8080/api/auth/me").then(res => {
            console.log(res)
        })
    }

    const onLogout = () => {
        localStorage.removeItem("access_token");
        routerHistory.push("/login");
    }
    return (
        <div className="container">
            <div className="row justify-content-md-center" id="main">
                hello secured
            </div>
            <button onClick={onLogout}>Log out</button>
            <button onClick={getSingleUser}>Me</button>
        </div>
    )
}

export default Main;
