import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import insta1 from "../assets/Blue Nile Falls.jpeg";
import insta2 from "../assets/Dankile.jpg";
import insta3 from "../assets/afar.jpeg";
import insta4 from "../assets/axum3.jpeg";
import insta5 from "../assets/coffe.webp";
import insta6 from "../assets/food.webp";

function Footer() {
    // Array of Instagram images
    const instaImages = [insta1, insta2, insta3, insta4, insta5, insta6];

    return (
        <div>
            <footer className="py-4 px-4 lg:px-16 border-t border-gray-300 bg-gradient-to-r from-[#9cbad9] to-[#b9c8dc]">
                <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 px-4">
                    {/* Contact and Social Media */}
                    <div>
                        <h2 className="text-[18px] font-semibold py-3">Stay Connected</h2>
                        <p className="text-base md:text-lg">Address: Addis Ababa, Ethiopia</p>
                        <p className="text-base md:text-lg">Phone: (+251) 912 36 78 19</p>
                        <h2 className="text-[18px] font-semibold mt-6">Follow Us</h2>
                        <ul className="flex gap-4 mt-4">
                            <li>
                                <a href="#" className="hover:text-blue-600 transition duration-300">
                                    <FaFacebookF size={18} />
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-blue-600 transition duration-300">
                                    <FaInstagram size={18} />
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-blue-600 transition duration-300">
                                    <FaTwitter size={18} />
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-blue-600 transition duration-300">
                                    <FaYoutube size={18} />
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Navigation Links */}
                    <div>
                        <h2 className="text-[18px] font-semibold py-3">Explore Ethiopia</h2>
                        <ul className="mt-2 space-y-2 text-base md:text-lg">
                            <li>
                                <a href="#" className="text-gray-800 hover:underline">Home</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-800 hover:underline">About Us</a>
                            </li>
                            {/* Add more links as needed */}
                        </ul>
                    </div>

                    {/* Instagram Feed */}
                    <div>
                        <h2 className="text-[18px] font-semibold py-3 text-center">On Instagram</h2>
                        <div className="grid grid-cols-3 gap-2 mt-2 items-center justify-center">
                            {instaImages.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`Instagram ${index + 1}`}
                                    className="w-[30px] h-[30px] md:w-[34px] md:h-[34px] rounded-full object-cover transition-transform transform hover:scale-105"
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Footer Bottom Section */}
            </footer>
            <div className="py-3 text-center text-xs md:text-sm text-white bg-[#292d32]">
                &copy; 2024 Your Company Name. All rights reserved.
            </div>
        </div>
    );
}

export default Footer;
