import React from "react";


import Home from './Home';
import Contact from './Contact';
import About from './About';
import NotFound from './NotFound';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


function NavBar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light ">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Manu</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Componentes
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        
                        <li>
                        <Link to="/">Home</Link>
                        </li>
                        <li>
                        <Link to="about">About</Link>
                        </li>
                        <li>
                        <Link to="contact">Contact</Link>
                        </li>

                    </ul>
                    </li>
                </ul>
                
                </div>
            </div>
        </nav>
    );
}

export default NavBar;