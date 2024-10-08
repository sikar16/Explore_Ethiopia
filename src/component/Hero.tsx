import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import lalibel from '../assets/istockphoto-697529054-612x612.jpg';

function Hero() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2.5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true,
                },
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true,
                },
            },
        ],
    };

    return (
        <div className="relative bg-cover bg-center flex flex-col justify-between" >
            <div className="flex  justify-between items-center  text-white">
                {/* Social Icons */}
                {/* <div>
                    <ul className="absolute top-[15%] left-[2%] space-y-10 text-white ">
                        <li><FaFacebookF size={20} /></li>
                        <li><FaInstagram size={20} /></li>
                        <li><FaTwitter size={20} /></li>
                        <li><FaYoutube size={20} /></li>
                    </ul>
                </div>
                <div className="lg:w-[40%] mb-8 lg:mb-0">
                    <h2 className="text-5xl font-bold leading-tight mb-4 ">Let we explore country Ethiopia</h2>
                    <div className='mt-10'>
                        <h3 className="text-3xl font-bold">Lalibela</h3>
                        <p className="text-lg leading-relaxed">Lalibela (Amharic: ላሊበላ) is a town in the Amhara Region of Ethiopia, located in the Lasta district and North Wollo Zone.</p>
                    </div>
                </div> */}

                {/* Slider */}
                <div className="w-full lg:w-[43%] ">
                    <Slider {...settings}>
                        {['Lalibela', 'Danakil Dep', 'Simien Mountains', 'Kaild '].map((place, i) => (
                            <div key={i} className="px-2 mt-[6%] ">
                                <div className="bg-white pb-4 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
                                    <img src={lalibel} alt={place} className="w-full h-56 object-cover rounded-lg mb-4" />
                                    <p className="text-lg font-semibold text-center text-gray-800">{place}</p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default Hero;
