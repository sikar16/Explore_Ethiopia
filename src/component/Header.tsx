import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    return (
        <>
            <div className="mx-[5%]">
                <div className="flex justify-between pt-[2%] text-white" style={{ fontFamily: "'Architects Daughter', cursive" }}>
                    <div>
                        <p
                            className="text-3xl bg-gradient-to-b from-green-400 via-yellow-500 to-red-500 bg-clip-text text-transparent"
                            style={{ fontFamily: "'Architects Daughter', cursive" }}
                        >
                            Explore
                        </p>
                    </div>
                    <div className="flex items-center relative">
                        {/* Menu icon for mobile view */}
                        <button onClick={toggleMenu} className="sm:hidden p-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="text-black"
                            >
                                <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
                            </svg>
                        </button>

                        {/* Dropdown menu items for mobile view */}
                        {menuOpen && (
                            <div className="absolute top-full right-0 mt-2 text-white bg-black shadow-lg rounded-lg p-2 transition-all duration-300 ease-in-out">
                                <ul className="flex flex-col gap-1">
                                    <Link to="/home" onClick={() => setMenuOpen(false)}>
                                        <li className="hover:underline text-[10px] sm:text-lg transition-colors cursor-pointer">Home</li>
                                    </Link>
                                    <hr className="text-white bg-white" />
                                    <Link to="/about_us" onClick={() => setMenuOpen(false)}>
                                        <li className="hover:underline text-[10px] sm:text-lg transition-colors cursor-pointer">About Us</li>
                                    </Link>
                                </ul>
                            </div>
                        )}

                        {/* Desktop Menu */}
                        <div className="hidden sm:flex sm:flex-row sm:items-center sm:gap-6">
                            <ul className="flex flex-row gap-5">
                                <Link to="/home">
                                    <li className="hover:underline hover:text-lg transition-colors cursor-pointer text-black">Home</li>
                                </Link>
                                <Link to="/about_us">
                                    <li className="hover:underline hover:text-lg transition-colors cursor-pointer text-black">About Us</li>
                                </Link>
                            </ul>
                        </div>

                        {/* Search icon */}
                        <div className="flex items-center cursor-pointer hover:scale-110 transition-transform">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14" />
                            </svg>
                        </div>
                    </div>
                </div>
                <hr className="text-white mt-2" />
            </div>
        </>
    );
}

export default Header;
