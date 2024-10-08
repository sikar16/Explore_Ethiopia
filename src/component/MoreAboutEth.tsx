import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./moreAboutEth.css";
import lalibela from "../assets/istockphoto-697529054-612x612.jpg";
import axum from "../assets/axum.webp";
import gonder from "../assets/gonder3.webp";
import dankile from "../assets/Dankile.jpg";
import Ethflag from "../assets/ethflag.jpg";
import { useState, useEffect } from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function MoreAboutEth() {
    const [items] = useState([
        { id: 1, image: gonder, name: "Gondar" },
        { id: 2, image: axum, name: "Axum" },
        { id: 3, image: lalibela, name: "Lalibela" },
        { id: 4, image: dankile, name: "Dankile" },
        { id: 5, image: "https://i.ibb.co/Bq4Q0M8/img4.jpg", name: "Australia" },
        { id: 6, image: "https://i.ibb.co/jTQfmTq/img5.jpg", name: "Netherlands" },
        { id: 7, image: "https://i.ibb.co/RNkk6L0/img6.jpg", name: "Ireland" },
    ]);

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
    };

    // Autoplay functionality
    useEffect(() => {
        const interval = setInterval(handleNext, 3000); // Change image every 3 seconds
        return () => clearInterval(interval); // Cleanup on unmount
    }, []);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: true
                }
            }
        ]
    };



    return (
        <div className="more-about-eth h-[950px]" style={{
            backgroundImage: `url(${Ethflag})`,

        }}>
            <div className=" ">
                <p className="country-name px-4">Ethiopia</p>
                <div className="flex justify-between www ">
                    <div className="text-[18px] me-[5%] text-justify ">
                        Ethiopia is a diverse country with over 80 ethnic groups, each with unique languages and traditions. Amharic is the official language, and Ethiopian Orthodox Christianity and Islam are prominent religions. The culture is known for colorful attire, vibrant music, and dishes like injera. Ethiopia follows its own calendar and has a deep sense of community and heritage.
                    </div>
                    <div className="slider-wrapper ">
                        <div className="slider-container">
                            {items.map((item, index) => {
                                const position = index - currentIndex;
                                const isVisible = position >= 0 && position < items.length - 1;
                                return (
                                    <div
                                        key={item.id}
                                        className={`slider-item ${isVisible ? "visible" : ""}`}
                                        style={{
                                            backgroundImage: `url(${item.image})`,
                                            left: `${position * 50}px`,
                                            zIndex: 100 - index,
                                        }}
                                    >
                                        {index === currentIndex && (
                                            <div className="overlay">
                                                <h2>{item.name}</h2>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                        <div className="navigation">
                            <button onClick={handlePrev} aria-label="Previous Image">
                                <FontAwesomeIcon icon={faArrowLeft} />
                            </button>
                            <button onClick={handleNext} aria-label="Next Image">
                                <FontAwesomeIcon icon={faArrowRight} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className=" ">
                <p className="text-[2.4rem] px-4">Ancient Kingdoms and Medieval Castles</p>
                <div className="" id='blog'>
                    <div className='absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center'>

                        <div className='px-4 md:px-6 lg:px-20 mt-[42%]'>
                            <Slider {...settings}>
                                {Array(8).fill("").map((_, i) => (
                                    <div key={i} className="px-2 rounded-3xl">
                                        <div className=" h-[350px] pb-4 md:pb-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
                                            <img src={lalibela} alt="" className="rounded-t-3xl" />
                                            <p className='px-2 pb-10 pt-2 bg-opacity-50 rounded-b-3xl bg-white text-xs md:text-sm text-gray-700 mb-4 md:mb-6'>
                                                The customer experience was exceptional from start to finish. The website is user-friendly, the checkout process was smooth,
                                            </p>

                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default MoreAboutEth;


