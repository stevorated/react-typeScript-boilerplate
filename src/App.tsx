import * as React from 'react';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Home, Login, Admin } from './pages';

import './App.scss';

export function App() {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/admin">Admin</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>

                <hr />
                <h1>Main Header!</h1>
                <Switch>
                    <Route path="/" exact>
                        <Home color="secondary" />
                    </Route>
                    <Route path="/admin">
                        <Admin />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}
