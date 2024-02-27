import React from "react";
import Carousel from 'react-bootstrap/Carousel';

const Carrusel = ({datos}) => {
    console.log(datos);
    return (
        <article style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Carousel data-bs-theme="dark">
                {datos.map(
                    (dato, index) => 
                    (
                        <Carousel.Item>
                            <img
                                className="d-block h-100 rounded-image"
                                src={dato.src}
                                alt={dato.alt}
                            />
                            <Carousel.Caption>
                                <h5>{dato.titulo}</h5>
                                <p>{dato.descripcion}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )
                )}
            </Carousel>
        </article>
    );
}

export default Carrusel;