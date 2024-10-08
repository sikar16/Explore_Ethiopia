import Ethiopia from "../component/Ethiopia"
import Footer from "../component/Footer"
import Header from "../component/Header"
import Hero from "../component/Hero"
import MoreAboutEth from "../component/MoreAboutEth"
import Slider from "../component/Slider"

function Home() {
    return (
        <div>
            <div className="relative h-screen">
                <div className="">
                    <Slider />
                </div>
                <div>
                    <MoreAboutEth />
                </div>
                <div>
                    {/* <Footer /> */}
                </div>

            </div>
            <div>

            </div>

        </div>
    )
}

export default Home