import axios from "axios";
import React, {useState} from "react";
import {Link, Redirect, useHistory} from "react-router-dom";

const Login = () => {
    const routerHistory = useHistory();
    const [credentials, setCredentials] = useState({
        email: "",
        password: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8080/api/auth/login", credentials).then(res => {
            if (res.status === 200) {
                console.log("response", res);
                localStorage.setItem("access_token", res.data)

            }
        }).then(() => {
            routerHistory.push("/");
        })
    }


    const handleChange = (e) => {
        e.persist()
        setCredentials(credentials => ({
            ...credentials,
            [e.target.name]: e.target.value
        }))
    }
    if (localStorage.getItem("access_token")) {
        routerHistory.push("/");
    }

    const handleGoogleLogin = () => {
       window.open("http://localhost:8080/oauth2/authorize/google?redirect_uri=http://localhost:3000/oauth2/redirect");
    }
    return (

        <div className="container">
            <div className="row justify-content-md-center">
                <aside className="col-sm-4">
                    <div className="card">
                        <article className="card-body">
                            <a href="/registration" className="float-right btn btn-outline-primary">Registration</a>
                            <h4 className="card-title mb-4 mt-1">Sign In</h4>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label>Your email</label>
                                    <input id="email" type="email" value={credentials.email} minLength={5}
                                           onChange={handleChange}
                                           name="email" placeholder="Email" className="form-control" required/>
                                </div>
                                <div className="form-group">
                                    <label>Your password</label>
                                    <input id="password" type="password" placeholder="******" minLength={5}
                                           value={credentials.password} onChange={handleChange}
                                           name="password" required className="form-control"/>
                                </div>

                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary btn-block">Login</button>
                                </div>
                            </form>

                            <div className="form-group">
                                <button onClick={handleGoogleLogin} className="btn btn-primary btn-block">Login with
                                    Google
                                </button>
                            </div>

                        </article>
                    </div>
                </aside>
            </div>
        </div>

    );
}

export default Login;