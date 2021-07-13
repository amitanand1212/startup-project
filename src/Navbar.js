import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import Home from "./Home";
  import About from "./About";
  import RegForm from "./RegForm";
function Navbar() {

    return ( <Router>
        
            <div>


                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <Link class="navbar-brand"  to="/">logo</Link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item active">
                                <Link class="nav-link" to="/home">Home </Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/About">About</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/RegForm">RegForm</Link>
                            </li>



                        </ul>

                    </div>
                </nav>


            </div>

            <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/Home">
            <Home />
          </Route>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/RegForm">
            <RegForm/>
          </Route>
        </Switch>
            </Router> )
  }


            export default Navbar;
