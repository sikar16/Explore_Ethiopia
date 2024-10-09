import React from 'react';
import woman from "../assets/woman.webp";
import man from "../assets/man.jpg";
import 'react-image-lightbox/style.css'; // Import the lightbox styles

const ImageGallery: React.FC = () => {
    return (
        <div className='bg-gradient-to-r from-[#9cbad9] to-[#b9c8dc'>
            <div className='container mx-auto py-12 md:flex justify-around gap-7 px-[3%]'>
                <div className='relative flex justify-center'>
                    <div
                        style={{ ...styles.imageContainer, transform: 'rotate(-5deg)' }}
                    >
                        <img src={woman} alt="Axum" style={styles.image} />
                    </div>
                    <div
                        style={{ ...styles.imageContainer, transform: 'rotate(5deg)', zIndex: 1 }}
                    >
                        <img src={man} alt="Gonder" style={styles.image} />
                    </div>
                </div>
                <div className='flex flex-col justify-center mt-6'>
                    <h2 className='font-bold mb-4 text-gray-800 text-[26px]'>Explore Our Beautiful Locations</h2>
                    <p className='text-gray-600'>
                        Ethiopia is a land of diverse landscapes, rich history, and vibrant cultures. From the majestic Simien Mountains to the bustling streets of Addis Ababa, Ethiopia offers travelers a unique blend of natural beauty and cultural heritage. Our country is home to ancient civilizations, stunning churches carved from rock, and wildlife that can only be found in this region. With its hospitable people and rich traditions, every corner of Ethiopia tells a story waiting to be discovered.

                        <br /><br />

                        At [Your Travel Company Name], we are passionate about showcasing the beauty and diversity of Ethiopia. Our mission is to provide travelers with unforgettable experiences, whether you're hiking in the breathtaking highlands, exploring historic sites, or indulging in the local cuisine. We pride ourselves on our personalized service, ensuring that each journey is tailored to meet your interests and preferences.

                        <br /><br />

                        Join us in exploring the enchanting landscapes, experiencing the warmth of Ethiopian hospitality, and creating memories that will last a lifetime. Whether you're seeking adventure, relaxation, or cultural immersion, [Your Travel Company Name] is here to guide you every step of the way. Let us help you uncover the wonders of Ethiopia, a destination like no other!
                    </p>
                </div>
            </div>
        </div>
    );
};

// Define styles using TypeScript
const styles: { [key: string]: React.CSSProperties } = {
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
