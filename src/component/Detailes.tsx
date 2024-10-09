import { useEffect, useState } from 'react'
import "./moreAboutEth.css";
import amhara from '../assets/amharajpeg.jpeg';
import oromia from '../assets/oromojpeg.jpeg';
import afar from '../assets/afar.jpeg';
import tigray from '../assets/tigrayjpeg.jpeg';
import harar from '../assets/harari.jpg';
import hamer from '../assets/hamer2.jpg';
import food from '../assets/food.webp';
import coffee from '../assets/coffe.webp';
import gurage from '../assets/guragejpeg.jpeg';
import somali from '../assets/solami.jpeg';
import wolayta from '../assets/wolaytajpeg.jpeg';
import lalibela from "../assets/lalibela.jpg";
import axum from "../assets/axum4.jpeg";
import gonder from "../assets/gonder.jpeg";
import debreBirhan from "../assets/debreBirhan.jpeg";
import dankile from "../assets/Dankile.jpg";
import semen from "../assets/Simien Mountains National3.jpeg";
import sofoumer from "../assets/The Sof Omar Cave3jpg.jpg";
import tana from "../assets/tana.webp";
import abay from "../assets/2022-06-26.jpg";
import axumTsion from "../assets/axumTsion.jpg";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
function Detailes() {
    const [items] = useState([
        { id: 1, image: amhara, name: "Amhara" },
        { id: 2, image: oromia, name: "Oromia" },
        { id: 3, image: afar, name: "Afar" },
        { id: 4, image: tigray, name: "Tigray" },
        { id: 5, image: harar, name: "Harar" },
        { id: 6, image: hamer, name: "Hamer" },
        { id: 7, image: food, name: "Ethiopian Food" },
        { id: 8, image: coffee, name: "Ethiopian Coffee" },
        { id: 9, image: gurage, name: "Gurage" },
        { id: 10, image: somali, name: "Somali" },
        { id: 11, image: wolayta, name: "Wolayta" }
    ]);
    const [item] = useState([
        {
            id: 1,
            image: lalibela,
            name: "Lalibela",
            des: "Lalibela is a town in the Amhara Region, known for its rock-hewn churches, which are a UNESCO World Heritage site and significant for Ethiopian Orthodox Christians."
        },
        {
            id: 2,
            image: gonder,
            name: "Gonder",
            des: "Gonder, located in the Amhara Region, was once the capital of the Ethiopian Empire. It is famous for its historic castles and the Debre Berhan Selassie Church."
        },
        {
            id: 3,
            image: axum,
            name: "Axum",
            des: "Axum, in the Tigray Region, is known for its ancient obelisks and as the former capital of the Aksumite Empire. It is also home to the Church of St. Mary of Zion."
        },
        {
            id: 4,
            image: dankile,
            name: "Danakil Depression",
            des: "The Danakil Depression in the Afar region is one of the hottest and lowest places on Earth, known for its salt flats, colorful hydrothermal fields, and sulfur springs."
        },
        {
            id: 5,
            image: sofoumer,
            name: "Sof Omar Cave",
            des: "The Sof Omar Cave is an extensive underground limestone cave system in southeastern Ethiopia, revered as both a natural wonder and a place of spiritual significance."
        },
        {
            id: 6,
            image: semen,
            name: "Simien Mountains National Park",
            des: "Simien Mountains National Park, a UNESCO World Heritage site, features rugged peaks, deep valleys, and rare wildlife like the Gelada baboon and Ethiopian wolf."
        },
        {
            id: 7,
            image: axumTsion,
            name: "Axum Tsion St. Mary",
            des: "The Church of Our Lady Mary of Zion in Axum is a sacred site believed to house the Ark of the Covenant, making it a major Ethiopian Orthodox pilgrimage destination."
        },
        {
            id: 8,
            image: debreBirhan,
            name: "Debre Berhan Selassie Church",
            des: "Debre Berhan Selassie Church in Gonder is renowned for its unique ceiling murals of angelic faces and serves as a historic symbol of Ethiopian Christianity."
        },
        {
            id: 9,
            image: abay,
            name: "Blue Nile River",
            des: "The Blue Nile River, originating from Lake Tana, is one of the major tributaries of the Nile, traveling through Ethiopia and Sudan before joining the White Nile."
        },
        {
            id: 10,
            image: tana,
            name: "Lake Tana",
            des: "Lake Tana, Ethiopia's largest lake, is the source of the Blue Nile. The lake features numerous islands with ancient monasteries and is central to Ethiopian history and culture."
        }
    ]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
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
                                            <div className="absolute bottom-[10px] left-[10px] text-white  px-[6px] rounded-[10px] text-[10px] text-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
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
                                {item.map((i) => (
                                    <div key={i.id} className="px-2 rounded-3xl">
                                        <div className="h-[350px] pb-4 md:pb-6 rounded-lg duration-300 ease-in-out">
                                            <img src={i.image} alt={i.name} className="rounded-t-3xl" />

                                            <div className="px-2 pb-10 pt-2 bg-opacity-50 rounded-b-3xl bg-white text-xs md:text-sm text-gray-700 mb-4 md:mb-6">
                                                <p className="text-[16px] font-semibold">{i.name}</p>
                                                <p className="text-[10px]">
                                                    {i.des || "Description not available."}
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