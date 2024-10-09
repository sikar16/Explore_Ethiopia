import React, { useState, useEffect, useRef } from "react";
import "./Slider.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Header from "../component/Header";
import lalibela from "../assets/istockphoto-697529054-612x612.jpg";
import axum from "../assets/axum.webp";
import gonder from "../assets/Dankile.jpg";
import dankile from "../assets/Dankile.jpg";
import riftvally from "../assets/2022-06-26.jpg";
import semenMou from "../assets/2023-06-30.jpg";
import axumtison from "../assets/istockphoto-1097499146-612x612.jpg";
import debreBrihan from "../assets/licensed-image (3).jpeg";
import blueNile from "../assets/2022-06-26.jpg";
import tana from "../assets/2023-02-19.jpg";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';


const Slider = () => {
    const [items] = useState([
        { id: 1, image: lalibela, name: "Lalibela", des: "Lalibela (Amharic: ላሊበላ, romanized: Lalibäla) is a town in the Amhara Region of Ethiopia. Located in the Lasta district and North Wollo Zone." },
        { id: 2, image: axum, name: "Gonder", des: "Gonder (Amharic: ጎንደር, Gonder[a] or Gondär;[b] formerly ጐንደር, Gʷandar or Gʷender), is a city and woreda in Ethiopia. Located in the North Gondar Zone of the Amhara Region." },
        { id: 3, image: gonder, name: "Axum", des: " Aksum (pronounced: /ˈɑːkˈsuːm/ ), is a town in the Tigray Region of Ethiopia with a population of 66,900 residents (as of 2015).[2] It is the site of the historic capital of the Aksumite Empire." },
        { id: 4, image: dankile, name: "Danakil Depression", des: "Danakil Depression is the northern part of the Afar Triangle or Afar Depression in Ethiopia and Eritrea." },
        { id: 5, image: riftvally, name: "Great Rift Valley, Ethiopia", des: "Great Rift Valley of Ethiopia, (or Main Ethiopian Rift or Ethiopian Rift Valley) is a branch of the East African Rift that runs through Ethiopia in a southwest direction from the Afar Triple Junction" },
        { id: 6, image: semenMou, name: "Simien Mountains National Park", des: "Simien Mountains National Park is the largest national park in Ethiopia. Located in the North Gondar Zone of the Amhara Region." },
        { id: 7, image: axumtison, name: "Axum Tsion St. Mary", des: "he Church of Our Lady, Mary of Zion is an Ethiopian Orthodox Tewahedo Church which is claimed to contain the Ark of the Covenant. The church is located in the town of Axum, Tigray Region in northern Ethiopia." },
        { id: 8, image: debreBrihan, name: "Debre Berhan Selassie Church", des: "Debire Birhan Selassie Church, meaning 'Trinity and Mountain of Light' is the most famous place of worship in Gondar." },
        { id: 9, image: blueNile, name: "Blue Nile River", des: "The Blue Nile[note 1] is a river originating at Lake Tana in Ethiopia. It travels for approximately 1,450 km (900 mi) through Ethiopia and Sudan" },
        { id: 10, image: tana, name: "Lake Tana", des: "Lake Tana (Amharic: ጣና ሐይቅ, romanized: T’ana ḥāyik’i; previously Tsana[1]) is the largest lake in Ethiopia and a source of the Blue Nile" }
    ]);

    const [currentIndex, setCurrentIndex] = useState(0);

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
