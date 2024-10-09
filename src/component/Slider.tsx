import { useState, useEffect } from "react";
import "./Slider.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import lalibela from "../assets/lalibela.jpg";
import axum from "../assets/axum4.jpeg";
import gonder from "../assets/gonder.jpeg";
import debreBirhan from "../assets/debreBirhan.jpeg";
import dankile from "../assets/Dankile.jpg";
import semen from "../assets/Simien Mountains National3.jpeg";
import sofoumer from "../assets/The Sof Omar Cave3jpg.jpg";
import tana from "../assets/tana.webp";
import abay from "../assets/2022-06-26.jpg";
import axumTsion from "../assets/axumTsion.jpg";

import Header from "./Header";

const Slider = () => {
    const [items] = useState([
        {
            id: 1,
            image: lalibela,
            name: "Lalibela",
            des: "Lalibela is a town in the Amhara Region, known for its rock-hewn churches, which are a UNESCO World Heritage site and significant for Ethiopian Orthodox Christians."
        },
        {
            id: 2,
            image: gonder,
            name: "Gonder",
            des: "Gonder, located in the Amhara Region, was once the capital of the Ethiopian Empire. It is famous for its historic castles and the Debre Berhan Selassie Church."
        },
        {
            id: 3,
            image: axum,
            name: "Axum",
            des: "Axum, in the Tigray Region, is known for its ancient obelisks and as the former capital of the Aksumite Empire. It is also home to the Church of St. Mary of Zion."
        },
        {
            id: 4,
            image: dankile,
            name: "Danakil Depression",
            des: "The Danakil Depression in the Afar region is one of the hottest and lowest places on Earth, known for its salt flats, colorful hydrothermal fields, and sulfur springs."
        },
        {
            id: 5,
            image: sofoumer,
            name: "Sof Omar Cave",
            des: "The Sof Omar Cave is an extensive underground limestone cave system in southeastern Ethiopia, revered as both a natural wonder and a place of spiritual significance."
        },
        {
            id: 6,
            image: semen,
            name: "Simien Mountains National Park",
            des: "Simien Mountains National Park, a UNESCO World Heritage site, features rugged peaks, deep valleys, and rare wildlife like the Gelada baboon and Ethiopian wolf."
        },
        {
            id: 7,
            image: axumTsion,
            name: "Axum Tsion St. Mary",
            des: "The Church of Our Lady Mary of Zion in Axum is a sacred site believed to house the Ark of the Covenant, making it a major Ethiopian Orthodox pilgrimage destination."
        },
        {
            id: 8,
            image: debreBirhan,
            name: "Debre Berhan Selassie Church",
            des: "Debre Berhan Selassie Church in Gonder is renowned for its unique ceiling murals of angelic faces and serves as a historic symbol of Ethiopian Christianity."
        },
        {
            id: 9,
            image: abay,
            name: "Blue Nile River",
            des: "The Blue Nile River, originating from Lake Tana, is one of the major tributaries of the Nile, traveling through Ethiopia and Sudan before joining the White Nile."
        },
        {
            id: 10,
            image: tana,
            name: "Lake Tana",
            des: "Lake Tana, Ethiopia's largest lake, is the source of the Blue Nile. The lake features numerous islands with ancient monasteries and is central to Ethiopian history and culture."
        }
    ]); const [currentIndex, setCurrentIndex] = useState(0);

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



    return (
        <>
            <Header />
            <hr className="text-black bg-black mx-[5%]" />
            <div>

                <div
                    className="background-image "

                    style={{
                        // backgroundImage: `url(${items[currentIndex].image})`,
                    }}

                >
                </div>
                <p className="main-title text-black text-[30px] sm:text-[40px] absolute  mx-[3%] sm:mx-[7%] lg:me-[0] lg:w-[400px]"> Let we explore country Ethiopia</p>
                <div className="flex w-full relative overflow-hidden">

                    <div className=" flex items-center text-black p-3 gap-5 relative z-1">
                        <div className="ps-3 hidden lg:block">
                            <ul className="space-y-9">
                                <li><FaFacebookF size={20} /></li>
                                <li><FaInstagram size={20} /></li>
                                <li><FaTwitter size={20} /></li>
                                <li><FaYoutube size={20} /></li>
                            </ul>
                        </div>
                        <div className=" bottom-0 mx-[5%] xl:mx-[0] mt-[200px] lg:mt-[14%] xl:mt-[14%] text-black  lg:max-w-[400px]">
                            <h1 className="name underline">{items[currentIndex].name}</h1>
                            <p className="main-description">{items[currentIndex].des}</p>
                        </div>
                    </div>
                    <div className="right-section w-[40%] mt-[200px] lg:mt-[14%] xl:mt-[6%] hidden lg:block">
                        <div className="overlay-carousel">
                            <div className="carousel-container">
                                <div className="slide-container">
                                    <div className="slide-container">
                                        {items
                                            .concat(items)
                                            .slice(currentIndex, currentIndex + 3)
                                            .map((item, index) => (
                                                <div key={`${item.id}-${index}`} className="item" style={{ backgroundImage: `url(${item.image})` }}>
                                                    <div className="item-overlay">
                                                        <h2 className="item-title">{item.name}</h2>
                                                    </div>
                                                </div>
                                            ))}
                                    </div>

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
                </div >
            </div >
        </>
    );
};

export default Slider;
