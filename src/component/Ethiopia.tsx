import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

// Import images
import gonder1 from "../assets/gonder.webp";
import gonder2 from "../assets/gonder4.jpeg";
import gonder3 from "../assets/gonder3.jpeg";
import axum1 from "../assets/axum.webp";
import axum2 from "../assets/axum3.jpeg";
import axum3 from "../assets/axum4.jpeg";
import lalibela1 from "../assets/lalibela2.jpeg";
import lalibela2 from "../assets/lalibela3.jpg";
import lalibela3 from "../assets/lalibela4.jpeg";
import semenMountaine1 from "../assets/Simien Mountains National2.jpeg";
import semenMountaine2 from "../assets/Simien Mountains National3.jpeg";
import semenMountaine3 from "../assets/Simien Mountains National4.jpeg";
import sofoumer1 from "../assets/The Sof Omar Cave.jpeg";
import sofoumer2 from "../assets/The Sof Omar Cave.jpg";
import sofoumer3 from "../assets/The Sof Omar Cave3jpg.jpg";
import abay1 from "../assets/2022-06-26.jpg";
import abay2 from "../assets/Blue Nile Falls.jpeg";
import abay3 from "../assets/Blue Nile Falls4.jpeg";

const Ethiopia: React.FC = () => {
    const [currentContent, setCurrentContent] = useState(0);
    const [currentContentSecond, setCurrentContentSecond] = useState(0);
    const [isExpanded1, setIsExpanded1] = useState(false);
    const [isExpanded2, setIsExpanded2] = useState(false);

    const toggleExpand1 = () => setIsExpanded1(!isExpanded1);
    const toggleExpand2 = () => setIsExpanded2(!isExpanded2);

    const settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 1, slidesToScroll: 1 } },
            { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
        ],
    };

    const places = [
        {
            title: "Gonder",
            description: "Gonder, often referred to as the 'Camelot of Africa,' is known for its royal castles and palaces that date back to the 17th century.",
            images: [gonder1, gonder2, gonder3],
            fullDescription: "Gonder, once the imperial capital of Ethiopia, is renowned for its remarkable architecture and rich history. The city boasts a collection of stunning castles, including Fasil Ghebbi, which served as the residence of emperors..."
        },
        {
            title: "Axum",
            description: "Axum, an ancient city and a UNESCO World Heritage Site, is famous for its towering obelisks and the ancient ruins of the Aksumite Empire.",
            images: [axum1, axum2, axum3],
            fullDescription: "Axum is one of the most important archaeological sites in Ethiopia, known for its impressive obelisks that date back to the 4th century..."
        },
        {
            title: "Lalibela",
            description: "Lalibela is known for its monolithic rock-hewn churches, which are a significant symbol of Ethiopia's rich Christian heritage.",
            images: [lalibela1, lalibela2, lalibela3],
            fullDescription: "Lalibela is famed for its 11 remarkable rock-hewn churches, carved directly into the solid rock in the 12th century..."
        },

    ];
    const natural = [
        {
            title: "Simien Mountains",
            description: "The Simien Mountains are known for their dramatic landscapes, unique wildlife, and as a popular destination for trekking enthusiasts.",
            images: [semenMountaine1, semenMountaine2, semenMountaine3],
            fullDescription: "The Simien Mountains National Park is a UNESCO World Heritage site recognized for its stunning natural beauty and biodiversity..."
        },
        {
            title: "Sof Omar Caves",
            description: "The Sof Omar Caves are the longest cave system in Ethiopia, known for their vast underground chambers and intricate passageways.",
            images: [sofoumer1, sofoumer2, sofoumer3],
            fullDescription: "The Sof Omar Caves are one of Ethiopia's most fascinating natural wonders, consisting of a complex network of limestone caves..."
        },
        {
            title: "Blue Nile Falls",
            description: "The Blue Nile Falls, known locally as 'Tis Issat' or 'The Smoking Water,' is a spectacular waterfall on the Blue Nile River.",
            images: [abay1, abay2, abay3],
            fullDescription: "The Blue Nile Falls, located near the city of Bahir Dar, are one of Ethiopia's most captivating natural attractions..."
        }
    ];

    const handleNext1 = () => {
        setCurrentContent((prev) => (prev + 1) % places.length);
    };

    const handlePrevious1 = () => {
        setCurrentContent((prev) => (prev - 1 + places.length) % places.length);
    };

    const handleNext2 = () => {
        setCurrentContentSecond((prev) => (prev + 1) % natural.length);
    };

    const handlePrevious2 = () => {
        setCurrentContentSecond((prev) => (prev - 1 + natural.length) % natural.length);
    };

    return (
        <div className="p-8 space-y-8 bg-gradient-to-r from-[#9cbad9] to-[#b9c8dc]">
            {/* First Section */}
            <div className="relative mx-[2%] gap-8 md:mx-[6%] grid grid-cols-1 sm:grid-cols-2 items-center">
                <div>
                    <Slider {...settings}>
                        {places[currentContent].images.map((imgSrc, index) => (
                            <div key={index} className="w-[340px] h-[200px] md:w-[475px] md:h-[247px] transition-transform duration-300 hover:scale-105">
                                <img src={imgSrc} alt={`Ethiopia image ${index + 1}`} className="lg:h-80 object-cover rounded-lg" />
                            </div>
                        ))}
                    </Slider>
                </div>
                <div>
                    <h2 className="text-[16px] md:text-[24px] font-semibold text-gray-800 mb-[4px] md:mb-4">
                        {places[currentContent].title}
                    </h2>
                    <p className="text-[14px] sm:text-[8px] md:text-[14px] text-gray-800">
                        {places[currentContent].description}
                    </p>
                    <p className='font-bold mb-4' onClick={toggleExpand1}>
                        <button className="next-icon-button me-[5px]">
                            <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                        {isExpanded1 ? 'Read less' : 'Read more'}
                    </p>
                    {isExpanded1 && (
                        <div className="mt-4 bg-gray-100 p-4 rounded-lg">
                            <h3 className=" text-[14px]">More Information:</h3>
                            <p className="text-[10px] text-gray-700">{places[currentContent].fullDescription}</p>
                        </div>
                    )}
                    <div className="flex gap-2">
                        <button onClick={handlePrevious1} className="p-2 bg-gray-300 text-black rounded-full transition duration-200 transform hover:scale-110">
                            <svg xmlns="http://www.w3.org/2000/svg" width={10} height={10} viewBox="0 0 24 24" fill="white">
                                <path d="M17.51 3.87L15.73 2.1L5.84 12l9.9 9.9l1.77-1.77L9.38 12z" />
                            </svg>
                        </button>
                        <button onClick={handleNext1} className="p-2 bg-gray-300 text-black rounded-full transition duration-200 transform hover:scale-110">
                            <svg xmlns="http://www.w3.org/2000/svg" width={10} height={10} viewBox="0 0 20 20" fill="white">
                                <path d="M7 1L5.6 2.5L13 10l-7.4 7.5L7 19l9-9z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <hr className='bg-black w-full h-[1px]' />

            {/* Second Section */}
            <div className="relative mx-[2%] gap-8 md:mx-[6%] grid grid-cols-1 sm:grid-cols-2 items-center">
                <div>
                    <h2 className="text-[16px] md:text-[24px] font-semibold text-gray-800 mb-[4px] md:mb-4">
                        {natural[currentContentSecond].title}
                    </h2>
                    <p className="text-[14px] sm:text-[8px] md:text-[14px] text-gray-800">
                        {natural[currentContentSecond].description}
                    </p>
                    <p className='font-bold mb-4' onClick={toggleExpand2}>
                        <button className="next-icon-button me-[5px]">
                            <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                        {isExpanded2 ? 'Read less' : 'Read more'}
                    </p>
                    {isExpanded2 && (
                        <div className="mt-4 bg-gray-100 p-4 rounded-lg">
                            <h3 className="text-[14px]">More Information:</h3>
                            <p className="text-[10px] text-gray-700">{natural[currentContentSecond].fullDescription}</p>
                        </div>
                    )}
                    <div className="flex gap-2">
                        <button onClick={handlePrevious2} className="p-2 bg-gray-300 text-black rounded-full transition duration-200 transform hover:scale-110">
                            <svg xmlns="http://www.w3.org/2000/svg" width={10} height={10} viewBox="0 0 24 24" fill="white">
                                <path d="M17.51 3.87L15.73 2.1L5.84 12l9.9 9.9l1.77-1.77L9.38 12z" />
                            </svg>
                        </button>
                        <button onClick={handleNext2} className="p-2 bg-gray-300 text-black rounded-full transition duration-200 transform hover:scale-110">
                            <svg xmlns="http://www.w3.org/2000/svg" width={10} height={10} viewBox="0 0 20 20" fill="white">
                                <path d="M7 1L5.6 2.5L13 10l-7.4 7.5L7 19l9-9z" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div>
                    <Slider {...settings}>
                        {natural[currentContentSecond].images.map((imgSrc, index) => (
                            <div key={index} className="w-[340px] h-[200px] md:w-[475px] md:h-[247px] transition-transform duration-300 hover:scale-105">
                                <img src={imgSrc} alt={`Ethiopia image ${index + 1}`} className="lg:h-80 object-cover rounded-lg" />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Ethiopia;
