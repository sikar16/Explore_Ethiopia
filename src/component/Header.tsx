import { Link } from "react-router-dom"

function Header() {
    return (
        <>
            <div className=" mx-[5%] ">
                <div className="flex justify-between pt-[2%] text-white" style={{ fontFamily: "'Architects Daughter', cursive" }}>
                    <div>
                        <p
                            className="text-3xl bg-gradient-to-b from-green-400 via-yellow-500 to-red-500 bg-clip-text text-transparent"
                            style={{ fontFamily: "'Architects Daughter', cursive" }}
                        >
                            Explore
                        </p>
                    </div>
                    <div className="flex justify-between items-center px-4 gap-6">
                        <div className="flex gap-6">
                            <ul className="flex gap-5 text-white ">
                                <Link to="/home">
                                    <li className="hover:underline transition-colors cursor-pointer">Home</li>
                                </Link>
                                <Link to="/about_us" >
                                    <li className="hover:underline transition-colors cursor-pointer">About us</li>
                                </Link>
                            </ul>
                        </div>
                        <div className="flex items-center cursor-pointer hover:scale-110 transition-transform">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="text-white"
                            >
                                <path d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14" />
                            </svg>
                        </div>
                    </div>
                </div>
                <hr className="text-white mt-2 " />
            </div>

        </>
    )
}

export default Header