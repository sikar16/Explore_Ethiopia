import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


const Ethiopia: React.FC = () => {
    // Separate states for both sliders
    const [currentContent, setCurrentContent] = useState(0);
    const [currentContentSecond, setCurrentContentSecond] = useState(0);
    const [isExpanded1, setIsExpanded1] = useState(false);
    const [isExpanded2, setIsExpanded2] = useState(false);

    const toggleExpand1 = () => {
        setIsExpanded1(!isExpanded1);
    };
    const toggleExpand2 = () => {
        setIsExpanded2(!isExpanded2);
    };
    const settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const content = [
        {
            title: "Ethiopia",
            description: "Ethiopia is a diverse country with over 80 ethnic groups, each with unique languages and traditions. Amharic is the official language, and Ethiopian Orthodox Christianity and Islam are prominent religions. The culture is known for colorful attire, vibrant music, and dishes like injera. Ethiopia follows its own calendar and has a deep sense of community and heritage.",
            images: [
                "../../src/assets/istockphoto-1097499146-612x612.jpg",
                "../../src/assets/istockphoto-697529054-612x612.jpg",
                "../../src/assets/istockphoto-155352114-612x612.jpg",
            ],
            fullDescription: "Ethiopia has a rich cultural heritage with diverse traditions, music, and art. The country is known for its ancient history and unique customs.",

        },
        {
            title: "Other Information",
            description: "Ethiopia is home to many ancient civilizations and archaeological sites, including the famous rock-hewn churches of Lalibela. It is also known for its unique coffee culture, being one of the original sources of coffee beans.",
            images: [
                "../../src/assets/2022-06-26.jpg",
                "../../src/assets/2023-06-30.jpg",
                "../../src/assets/istockphoto-1097499146-612x612.jpg",
            ],
            fullDescription: "Ethiopia has a rich cultural heritage with diverse traditions, music, and art. The country is known for its ancient history and unique customs.",

        },
        {
            title: "Cultural Heritage",
            description: "Ethiopia has a rich cultural heritage with diverse traditions, music, and art. The country is known for its ancient history and unique customs.",
            images: [
                "../../src/assets/licensed-image (4).jpeg",
                "../../src/assets/licensed-image (1).jpeg",
                "../../src/assets/licensed-image (5).jpeg",
            ],
            fullDescription: "Ethiopia has a rich cultural heritage with diverse traditions, music, and art. The country is known for its ancient history and unique customs.",

        },
    ];

    const handleNext1 = () => {
        setCurrentContent((prev) => (prev + 1) % content.length);
    };

    const handlePrevious1 = () => {
        setCurrentContent((prev) => (prev - 1 + content.length) % content.length);
    };

    const handleNext2 = () => {
        setCurrentContentSecond((prev) => (prev + 1) % content.length); // Update second slider state
    };

    const handlePrevious2 = () => {
        setCurrentContentSecond((prev) => (prev - 1 + content.length) % content.length); // Update second slider state
    };

    return (
        <div className="p-8  space-y-8 bg-gradient-to-r from-[#9cbad9]  to-[#b9c8dc]">
            {/* First Section */}
            <div className="relative mx-[2%] gap-8 md:mx-[6%] grid grid-cols-1 sm:grid-cols-2  items-center">
                <div>
                    <Slider {...settings}>
                        {content[currentContent].images.map((imgSrc, index) => (
                            <div key={index} className="w-[340px] h-[200px] md:w-[475px] md:h-[247px] transition-transform duration-300 hover:scale-105">
                                <img
                                    src={imgSrc}
                                    alt={`Ethiopia image ${index + 1}`}
                                    className=" lg:h-80 object-cover rounded-lg"
                                />
                            </div>
                        ))}
                    </Slider>
                </div>
                <div>
                    <h2 className="text-[16px] md:text-[24px] font-semibold text-gray-800  mb-[4px] md:mb-4">
                        {content[currentContent].title}
                    </h2>
                    <p className="text-[14px] sm:text-[8px] md:text-[14px] text-gray-800 ">
                        {content[currentContent].description}
                    </p>
                    <p className='font-bold mb-4 ' onClick={toggleExpand1} >
                        <button className="next-icon-button me-[5px]" >
                            <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                        {isExpanded1 ? 'Read less' : 'Read more'}
                    </p>
                    {isExpanded1 && (
                        <div className="mt-4 bg-gray-100 p-4 rounded-lg">
                            <h3 className="font-semibold text-lg">More Information:</h3>
                            <p className="text-sm text-gray-700">{content[currentContent].fullDescription}</p>
                        </div>
                    )}
                    <div className="flex gap-2">
                        <button
                            onClick={handlePrevious1}
                            className="p-2 bg-gray-300 text-black rounded-full  transition duration-200 transform hover:scale-110"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width={10} height={10} viewBox="0 0 24 24" fill="white">
                                <path d="M17.51 3.87L15.73 2.1L5.84 12l9.9 9.9l1.77-1.77L9.38 12z" />
                            </svg>
                        </button>
                        <button
                            onClick={handleNext1}
                            className="p-2 bg-gray-300 text-black rounded-full transition duration-200 transform hover:scale-110"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width={10} height={10} viewBox="0 0 20 20" fill="white">
                                <path d="M7 1L5.6 2.5L13 10l-7.4 7.5L7 19l9-9z"></path>
                            </svg>
                        </button>
                    </div>

                </div>
            </div>
            <hr className='bg-white text-white' />
            {/* Second Section */}

            <div className=" relative mx-[2%] gap-8 md:mx-[6%] grid grid-cols-1 sm:grid-cols-2  items-center">
                <div>
                    <h2 className="text-[16px] md:text-[24px] font-semibold text-gray-800  mb-[4px] md:mb-4">
                        {content[currentContentSecond].title}
                    </h2>
                    <p className="text-[14px] sm:text-[8px] md:text-[14px] text-gray-800 ">
                        {content[currentContentSecond].description}
                    </p>
                    <p className='font-bold mb-4 ' onClick={toggleExpand2} >
                        <button className="next-icon-button me-[5px]" >
                            <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                        {isExpanded2 ? 'Read less' : 'Read more'}
                    </p>
                    {isExpanded2 && (
                        <div className="mt-4 bg-gray-100 p-4 rounded-lg">
                            <h3 className="font-semibold text-lg">More Information:</h3>
                            <p className="text-sm text-gray-700">{content[currentContent].fullDescription}</p>
                        </div>
                    )}
                    <div className="flex gap-2">
                        <button
                            onClick={handlePrevious2}
                            className="p-2 bg-gray-300 text-black rounded-full shadow-md hover:shadow-lg transition duration-200 transform hover:scale-110"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width={10} height={10} viewBox="0 0 24 24" fill="white">
                                <path d="M17.51 3.87L15.73 2.1L5.84 12l9.9 9.9l1.77-1.77L9.38 12z" />
                            </svg>
                        </button>
                        <button
                            onClick={handleNext2}
                            className="p-2 bg-gray-300 text-black rounded-full shadow-md hover:shadow-lg transition duration-200 transform hover:scale-110"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width={10} height={10} viewBox="0 0 20 20" fill="white">
                                <path d="M7 1L5.6 2.5L13 10l-7.4 7.5L7 19l9-9z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <div>
                    <Slider {...settings}>
                        {content[currentContentSecond].images.map((imgSrc, index) => (
                            <div key={index} className="transition-transform duration-300 hover:scale-105">
                                <img
                                    src={imgSrc}
                                    alt={`Ethiopia image ${index + 1}`}
                                    className="w-[475px] h-[247px] object-cover rounded-lg"
                                />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Ethiopia;
