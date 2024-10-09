import Detailes from "../component/Detailes"
import Ethiopia from "../component/Ethiopia"
import Footer from "../component/Footer"
import Slider from "../component/Slider"

function Home() {
    return (
        <div>
            <div className="relative h-screen">
                <div className="h-screen">
                    <Slider />
                </div>
                <div>
                    <Detailes />
                </div>
                <div>
                    <Ethiopia />
                </div>
                <div>
                    <Footer />
                </div>

            </div>
            <div>

            </div>

        </div>
    )
}

export default Home