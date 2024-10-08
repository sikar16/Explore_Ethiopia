import React from 'react';
import Slider from 'react-slick';

const Ethiopia: React.FC = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true,
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

    return (
        <div className="bg-[#f1f9ff] p-8 rounded-lg shadow-lg grid grid-cols-2  items-center">
            <div className=''>
                <p
                    className="text-3xl bg-gradient-to-b from-green-400 via-yellow-500 to-red-500 bg-clip-text text-transparent"
                >
                    Ethipia
                </p>                <p className="text-md mb-6 text-gray-700 ">
                    Ethiopia is a diverse country with over 80 ethnic groups, each with unique languages and traditions.
                    Amharic is the official language, and Ethiopian Orthodox Christianity and Islam are prominent religions.
                    The culture is known for colorful attire, vibrant music, and dishes like injera. Ethiopia follows its own
                    calendar and has a deep sense of community and heritage.
                </p>
            </div>
            <div className="w-full">
                <Slider {...settings}>
                    <div className="rounded-lg overflow-hidden shadow-md">
                        <img src="../../src/assets/istockphoto-1097499146-612x612.jpg" alt="Gondar" className="w-full h-64 object-cover" />
                        <div className="text-center p-2">Gondar</div>
                    </div>
                    <div className="rounded-lg overflow-hidden shadow-md">
                        <img src="../../src/assets/istockphoto-1363074251-612x612.webp" alt="Image 2" className="w-full h-64 object-cover" />
                        <div className="text-center p-2">Image 2</div>
                    </div>
                    <div className="rounded-lg overflow-hidden shadow-md">
                        <img src="../../src/assets/licensed-image (1).jpeg" alt="Image 3" className="w-full h-64 object-cover" />
                        <div className="text-center p-2">Image 3</div>
                    </div>
                    <div className="rounded-lg overflow-hidden shadow-md">
                        <img src="../../src/assets/istockphoto-1097499146-612x612.jpg" alt="Image 4" className="w-full h-64 object-cover" />
                        <div className="text-center p-2">Image 4</div>
                    </div>
                    <div className="rounded-lg overflow-hidden shadow-md">
                        <img src="../../src/assets/licensed-image (4).jpeg" alt="Image 5" className="w-full h-64 object-cover" />
                        <div className="text-center p-2">Image 5</div>
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default Ethiopia;
