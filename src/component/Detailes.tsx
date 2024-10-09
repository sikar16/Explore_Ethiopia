import React, { useEffect, useState } from 'react'
import "./moreAboutEth.css";
import lalibela from "../assets/istockphoto-697529054-612x612.jpg";
import axum from "../assets/axum.webp";
import gonder from "../assets/gonder3.webp";
import dankile from "../assets/Dankile.jpg";
import Ethflag from "../assets/ethflag.jpg";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
function Detailes() {
    const [items] = useState([
        { id: 1, image: gonder, name: "Gondar" },
        { id: 2, image: axum, name: "Axum" },
        { id: 3, image: lalibela, name: "Lalibela" },
        { id: 4, image: dankile, name: "Dankile" },
        { id: 5, image: "https://i.ibb.co/Bq4Q0M8/img4.jpg", name: "Australia" },
        { id: 6, image: "https://i.ibb.co/jTQfmTq/img5.jpg", name: "Netherlands" },
        { id: 7, image: "https://i.ibb.co/RNkk6L0/img6.jpg", name: "Ireland" },
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
    useEffect(() => {
        const interval = setInterval(handleNext, 3000); // Change image every 3 seconds
        return () => clearInterval(interval); // Cleanup on unmount
    }, []);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 300,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: true
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    dots: true
                }
            }
        ]
    };
    return (

        <div className="background-image-container pb-[30px] transition-all  bg-no-repeat bg-cover relative   bg-blend-multiply " style={{
        }}>
            <div>
                <p className="text-[30px] md:text-[48px] px-[5%] pt-[1.5%] ">
                    Ethiopia
                </p>
                <div className="sm:flex sm:justify-around text-center  w-full overflow-hidden ">
                    <p ></p>
                    <div className="text-[12px] md:text-[15px] text-justify  sm:w-[40%] mx-[10%] sm:mx-0">

                        <p>
                            Ethiopia is a diverse country with over 80 ethnic groups, each with unique languages and traditions. Amharic is the official language, and Ethiopian Orthodox Christianity and Islam are prominent religions. The culture is known for colorful attire, vibrant music, and dishes like injera. Ethiopia follows its own calendar and has a deep sense of community and heritage.
                        </p>
                    </div>

                    <div className="flex transition-transform ease-in-out rounded-[20px] sm:w-[40%] mx-[10%] sm:mx-0 pt-[40px] sm:pt-0 ">
                        <div className=" flex overflow-hidden w-[100vw] h-[170px] md:h-[285px] relative">
                            {items.map((item, index) => {
                                const position = index - currentIndex;
                                const isVisible = position >= 0 && position < items.length - 1;
                                return (
                                    <div
                                        key={item.id}
                                        className={`slider-item absolute bg-cover bg-center rounded-[20px] transition-transform duration-300 ease-in-out  ${isVisible ? "visible" : ""} w-[150px] h-[170px] md:w-[217px] md:h-[285px]`}
                                        style={{
                                            backgroundImage: `url(${item.image})`,
                                            left: `${position * 50}px`,
                                            zIndex: 100 - index,
                                            transitionProperty: 'transform, left', transitionDuration: '0.3s, 0.5s',
                                            transitionTimingFunction: 'ease-in-out, ease-in-out',
                                            transform: `translateX(${position * 50}px)`,
                                        }}
                                    >
                                        {index === currentIndex && (
                                            <div className="absolute bottom-[10px] left-[10px] text-white  px-[6px] rounded-[10px] font-[0.6rem] text-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
                                                <h2>{item.name}</h2>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>

                    </div>
                </div>
            </div>

            <div className=" ">
                <p className="text-[30px] md:text-[36px] px-4 pt-[10px]">Ancient Kingdoms and Medieval Castles</p>
                <div className="" id='blog'>
                    <div className=' inset-0   flex flex-col justify-center'>

                        <div className='px-4 md:px-6 lg:px-20 mt-[1.5%] bg-opacity-40'>
                            <Slider {...settings}>
                                {Array(8).fill("").map((_, i) => (
                                    <div key={i} className="px-2 rounded-3xl">
                                        <div className=" h-[350px] pb-4 md:pb-6 rounded-lg   duration-300 ease-in-out">
                                            <img src={lalibela} alt="" className="rounded-t-3xl" />

                                            <div className='px-2 pb-10 pt-2 bg-opacity-50 rounded-b-3xl bg-white text-xs md:text-sm text-gray-700 mb-4 md:mb-6'>
                                                <p className='text-[16px] font-semibold'>Lalibela</p>
                                                <p className='text-[10px]'>
                                                    The customer experience was exceptional from start to finish. The website is user-friendly, the checkout process was smooth,
                                                </p>
                                            </div>

                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Detailes