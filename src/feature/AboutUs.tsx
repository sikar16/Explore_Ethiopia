import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import lalibel from '../assets/2023-02-19.jpg';

function AboutUs() {
    return (
        <div className="">
            <Carousel>
                <Carousel.Item interval={3000}>
                    <img src={lalibel} alt="" className='bd-placeholder-img bd-placeholder-img-lg d-block w-100' />
                    <Carousel.Caption>
                        <p>Some representative placeholder content for the first slide.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={2000}>
                    <svg className="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="https://i.ibb.co/RNkk6L0/img6.jpg" role="img" aria-label="Placeholder: Second slide" preserveAspectRatio="xMidYMid slice" focusable="false">
                        <title>Placeholder</title>
                        <rect width="100%" height="100%" fill="#eee"></rect>
                        <text x="50%" y="50%" fill="#bbb" dy=".3em">Second slide</text>
                    </svg>
                    <Carousel.Caption>
                        <h5>Second slide label</h5>
                        <p>Some representative placeholder content for the second slide.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <svg className="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Third slide" preserveAspectRatio="xMidYMid slice" focusable="false">
                        <title>Placeholder</title>
                        <rect width="100%" height="100%" fill="#e5e5e5"></rect>
                        <text x="50%" y="50%" fill="#999" dy=".3em">Third slide</text>
                    </svg>
                    <Carousel.Caption>
                        <h5>Third slide label</h5>
                        <p>Some representative placeholder content for the third slide.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default AboutUs;


