import React  from "react";
import {useHistory} from "react-router-dom";
import axios from "axios";

const Main = () => {
    const routerHistory = useHistory();
    const[currentUser, setCurrentUser] = React.useState(null);
    const instance = axios.create({
        baseURL: 'http://localhost:8080',
        timeout: 1000,
        headers: {'Authorization': 'Bearer '+ localStorage.getItem("access_token"),
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });

    const getLoggedUser = () => {
        instance.get("api/auth/me").then(res =>{
            if(!res.status === 200){
                return "Failed"
            }

            setCurrentUser(res.data)
            console.log(currentUser)
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
            <button onClick={getLoggedUser}>Me</button>
        </div>
    )
}

export default Main;
