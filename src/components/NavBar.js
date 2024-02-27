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
                <i class="bi bi-robot"></i>
                <a class="navbar-brand" href="#">Manu</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <Link to="/" class="nav-link active" aria-current="page">Home</Link>
                    </li>
                    <li class="nav-item">
                    <Link to="about" class="nav-link active" aria-current="page">Acerca de</Link>
                    </li>
                    <li class="nav-item">
                    <Link to="contact" class="nav-link active" aria-current="page">Contacto</Link>
                    </li>
                </ul>
                
                </div>
            </div>
        </nav>
    );
}

export default NavBar;