import Ethiopia from "../component/Ethiopia"
import Header from "../component/Header"
import Hero from "../component/Hero"
import Slider from "./Slider"

function Home() {
    return (
        <div>
            <div className="relative h-screen">
                {/* <div
                    // style={{
                    //     backgroundImage: `url("src/assets/2022-06-26.jpg")`,
                    //     backgroundSize: 'cover',
                    //     backgroundPosition: 'center',
                    //     filter: 'blur(1px)'
                    // }}
                    className="absolute inset-0 h-full w-full opacity-80"
                ></div> */}

                <div className="">
                    <Header />
                    <Slider />
                </div>

            </div>
            <div>

            </div>

        </div>
    )
}

export default Home