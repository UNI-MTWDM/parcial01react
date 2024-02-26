import React from "react";
import Carousel from 'react-bootstrap/Carousel';

const Carrusel = () => {
    return (
    <article style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Carousel data-bs-theme="dark">
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://img.freepik.com/foto-gratis/representacion-3d-elementos-hidraulicos_23-2149333332.jpg"
                alt="First slide"
                />
                <Carousel.Caption>
                <h5>First slide label</h5>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://img.freepik.com/foto-gratis/representacion-3d-elementos-hidraulicos_23-2149333335.jpg"
                alt="Second slide"
                />
                <Carousel.Caption>
                <h5>Second slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://img.freepik.com/foto-gratis/representacion-3d-elementos-hidraulicos_23-2149333330.jpg"
                alt="Third slide"
                />
                <Carousel.Caption>
                <h5>Third slide label</h5>
                <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://img.freepik.com/foto-gratis/representacion-3d-elementos-hidraulicos_23-2149333336.jpg"
                alt="Third slide"
                />
                <Carousel.Caption>
                <h5>Cuarto slide label</h5>
                <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>



        <Carousel interval={2000}>
            <Carousel.Item>
                <img
                className="d-block h-100"
                src="https://img.freepik.com/foto-gratis/representacion-3d-elementos-hidraulicos_23-2149333332.jpg"
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block h-100"
                src="https://img.freepik.com/foto-gratis/representacion-3d-elementos-hidraulicos_23-2149333335.jpg"
                alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block h-100"
                src="https://img.freepik.com/foto-gratis/representacion-3d-elementos-hidraulicos_23-2149333330.jpg"
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block h-100"
                src="https://img.freepik.com/foto-gratis/representacion-3d-elementos-hidraulicos_23-2149333336.jpg"
                alt="Fourth slide"
                />
            </Carousel.Item>
        </Carousel>
    </article>
    );
}

export default Carrusel;