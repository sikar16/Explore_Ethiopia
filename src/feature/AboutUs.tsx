import React, { useState } from 'react';

// Define image items
const images = [
    { url: 'https://i.ibb.co/qCkd9jS/img1.jpg', name: 'Switzerland' },
    { url: 'https://i.ibb.co/jrRb11q/img2.jpg', name: 'Finland' },
    { url: 'https://i.ibb.co/NSwVv8D/img3.jpg', name: 'Iceland' },
    { url: 'https://i.ibb.co/Bq4Q0M8/img4.jpg', name: 'Australia' },
    { url: 'https://i.ibb.co/jTQfmTq/img5.jpg', name: 'Netherlands' },
    { url: 'https://i.ibb.co/RNkk6L0/img6.jpg', name: 'Ireland' },
];

const AboutUs: React.FC = () => {
    const [index, setIndex] = useState(0);

    // Calculate the next index
    const nextSlide = () => setIndex((prevIndex) => (prevIndex + 1) % images.length);

    // Calculate the previous index
    const prevSlide = () => setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);

    return (
        <div className="relative w-[1000px] h-[600px] mx-auto bg-white shadow-lg overflow-hidden">
            <div className="flex w-full h-full transition-transform duration-700" style={{ transform: `translateX(-${index * 100}%)` }}>
                {images.map((image, idx) => (
                    <div key={idx} className="w-full h-full flex-shrink-0" style={{ backgroundImage: `url(${image.url})` }}>
                        <div className="relative w-full h-full bg-cover bg-center flex items-center justify-start">
                            <div className="ml-10 p-6 bg-black bg-opacity-50 rounded-lg text-white">
                                <h2 className="text-4xl font-bold uppercase">{image.name}</h2>
                                <p className="mt-4 mb-6 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                <button className="px-4 py-2 bg-gray-800 hover:bg-gray-600 rounded-md">See More</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="absolute inset-x-0 bottom-5 flex justify-center gap-4">
                <button onClick={prevSlide} className="p-2 bg-gray-800 text-white rounded-full">
                    <i className="fa-solid fa-arrow-left"></i>
                </button>
                <button onClick={nextSlide} className="p-2 bg-gray-800 text-white rounded-full">
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        </div>
    );
};

export default AboutUs;
