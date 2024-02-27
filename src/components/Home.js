import React, { useState, useEffect } from "react";
import Carrusel from "./Carrusel";

const Home = () => {
    const [info, setInfo] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/carrusel.json'); // Ajusta la ruta según tu estructura de archivos
                const data = await response.json();
                setInfo(data);
            } catch (error) {
                console.error('Error fetching JSON:', error);
            }
        };
    
        fetchData();
        }, []);

    return (
        <secction>
            <h2 class="text-center"><i class="bi bi-robot"></i>Sitio de robotica e IoT<i class="bi bi-robot"></i></h2>
            <p class="text-center">¡¡¡Bienvenido al sitio donde encontraras información relebante en temas de robotica!!!</p>
            <Carrusel datos = {info} />
            <br/>
            <p class="text-center">En esta vista se utiliza un componente tipo Carrusel que recibe información de un arreglo que es llenado desde un archivo json.</p>
        </secction>
    );
}

export default Home;