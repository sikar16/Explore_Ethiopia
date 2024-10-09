import { useState, useEffect } from "react";
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
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import Footer from "../component/Footer";
import ImageGallery from "../component/ImageGallery";

const AboutUs = () => {
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

    useEffect(() => {
        const timer = setInterval(() => {
            handleNext();
        }, 3000);

        return () => clearInterval(timer);
    }, []);

    return (
        <>
            <Header />
            <hr className="text-black bg-black mx-[5%]" />
            <div className="relative h-screen">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `url(${items[currentIndex].image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        zIndex: 0,
                    }}
                />
                <div className="relative z-10 flex flex-col items-center justify-center h-full p-5  rounded-lg shadow-lg">
                    <h2 className="text-center text-[40px] text-white font-bold mb-5">About Us</h2>
                    <p className="text-center text-white mb-8 max-w-md">
                        We are dedicated to providing the best services to our clients, ensuring quality and satisfaction. Join us on our journey to make a difference!
                    </p>
                    <div className="flex justify-center space-x-6">
                        <ul className="flex space-x-6">
                            <li>
                                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                    <FaFacebookF size={20} className="text-white transition-transform transform hover:scale-110" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                    <FaInstagram size={20} className="text-white transition-transform transform hover:scale-110" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                                    <FaTwitter size={20} className="text-white transition-transform transform hover:scale-110" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                                    <FaYoutube size={20} className="text-white transition-transform transform hover:scale-110" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <ImageGallery />
            </div>
            <Footer />
        </>
    );
};

export default AboutUs;
