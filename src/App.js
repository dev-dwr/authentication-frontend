import {BrowserRouter, Route, Switch} from "react-router-dom";
import './App.css';
import AuthenticatedRoute from "./components/auth/AuthenticatedRoute";
import NotFound from "./containers/NotFound";
import Login from "./components/auth/Login";
import Registration from "./components/auth/Registration";
import Main from "./containers/Main";
import OAuth2RedirectHandler from "./components/OAuth2RedirectHandler";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/registration" component={Registration}/>
                <AuthenticatedRoute exact path="/" component={Main}/>
                <Route path="/oauth2/redirect" component={OAuth2RedirectHandler}/>
                <Route component={NotFound}/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
