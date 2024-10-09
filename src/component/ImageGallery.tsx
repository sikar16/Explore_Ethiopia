import React, { useState } from 'react';
import axum from "../assets/axum.webp";
import gonder from "../assets/gonder3.webp";
import Lightbox from 'react-image-lightbox'; // Make sure to install react-image-lightbox
import 'react-image-lightbox/style.css'; // Import the lightbox styles

const images = [
    {
        src: axum,
        alt: "Scenic view of Axum"
    },
    {
        src: gonder,
        alt: "Beautiful landscape of Gonder"
    }
];

const ImageGallery: React.FC = () => {


    return (
        <div className=' bg-gradient-to-r from-[#9cbad9]  to-[#b9c8dc]'>

            <div className='container mx-auto py-12 md:flex justify-around gap-7 px-[3%]'>
                <div className='relative flex justify-center'>
                    <div
                        style={{ ...styles.imageContainer, transform: 'rotate(-5deg)' }}
                    >
                        <img src={axum} alt="Axum" style={styles.image} />
                    </div>
                    <div
                        style={{ ...styles.imageContainer, transform: 'rotate(5deg)', zIndex: 1 }}

                    >
                        <img src={gonder} alt="Gonder" style={styles.image} />
                    </div>
                </div>
                <div className='flex flex-col justify-center mt-6'>
                    <h2 className=' font-bold mb-4 text-gray-800 text-[26px]'>Explore Our Beautiful Locations</h2>
                    <p className='text-gray-600  '>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem iure iusto dolor consequatur, amet iste aliquam culpa minus, dolore, quia corporis! Cupiditate tempora ratione dolor quod itaque iusto non qui!
                        <br /><br />
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem iure iusto dolor consequatur, amet iste aliquam culpa minus, dolore, quia corporis! Cupiditate tempora ratione dolor quod itaque iusto non qui!
                        <br /><br />
                    </p>
                </div>

            </div>
        </div>
    );
};

const styles = {
    imageContainer: {
        width: '220px', // Adjusted width for better overlap
        height: '300px', // Increased height for a better aspect ratio
        overflow: 'hidden',
        borderRadius: '15px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
        position: 'relative',
        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
        cursor: 'pointer',
        margin: '0 10px', // Margin for spacing
        zIndex: 0, // Default zIndex
    },
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        transition: 'transform 0.3s ease-in-out',
    },
};

export default ImageGallery;