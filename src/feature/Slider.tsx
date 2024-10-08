import React, { useState, useEffect, useRef } from "react";
import "./Slider.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Header from "../component/Header";

const Slider = () => {
    const [items] = useState([
        { id: 1, image: "https://i.ibb.co/qCkd9jS/img1.jpg", name: "Switzerland", des: "A beautiful place with scenic landscapes and snowy mountains." },
        { id: 2, image: "https://i.ibb.co/jrRb11q/img2.jpg", name: "Finland", des: "Known for its vast forests and clear lakes." },
        { id: 3, image: "https://i.ibb.co/NSwVv8D/img3.jpg", name: "Iceland", des: "Land of ice and fire with stunning natural wonders." },
        { id: 4, image: "https://i.ibb.co/Bq4Q0M8/img4.jpg", name: "Australia", des: "A land of diverse landscapes and exotic wildlife." },
        { id: 5, image: "https://i.ibb.co/jTQfmTq/img5.jpg", name: "Netherlands", des: "Famous for its tulip fields and windmills." },
        { id: 6, image: "https://i.ibb.co/RNkk6L0/img6.jpg", name: "Ireland", des: "Known for its lush green landscapes and historic castles." }
    ]);

    const [currentIndex, setCurrentIndex] = useState(0);
    const transitionRef = useRef(null);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
    };

    // Timer effect
    useEffect(() => {
        const timer = setInterval(() => {
            handleNext();
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(timer); // Cleanup on unmount
    }, []);

    useEffect(() => {
        if (transitionRef.current) {
            transitionRef.current.classList.add("fade-in");
            setTimeout(() => {
                transitionRef.current.classList.remove("fade-in");
            }, 500); // Remove class after 500ms (duration of the transition)
        }
    }, [currentIndex]);

    return (
        <div>

            <div className="slider-container">
                <div
                    className="background-image"
                    ref={transitionRef}
                    style={{
                        backgroundImage: `url(${items[currentIndex].image})`,
                    }}
                >  <Header /></div>
                <div className="left-section w-1/2">
                    <div className="description">
                        <h1 className="main-title">{items[currentIndex].name}</h1>
                        <p className="main-description">{items[currentIndex].des}</p>
                    </div>
                </div>
                <div className="right-section w-[40%]">
                    <div className="overlay-carousel">
                        <div className="carousel-container">
                            <div className="slide-container">
                                {items.slice((currentIndex) % items.length, (currentIndex + 3) % items.length).map(item => (
                                    <div key={item.id} className="item" style={{ backgroundImage: `url(${item.image})` }}>
                                        <div className="item-overlay">
                                            <h2 className="item-title">{item.name}</h2>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="button-container">
                                <button className="prev" onClick={handlePrev}>
                                    <FontAwesomeIcon icon={faArrowLeft} />
                                </button>
                                <button className="next" onClick={handleNext}>
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;
