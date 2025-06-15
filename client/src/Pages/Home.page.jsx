import { lazy, Suspense } from "react"; 
const Footer = lazy(()=>import("../Components/Footer.jsx"));
const Header = lazy(()=>import("../Components/Header.jsx"));
import { useNavigate } from "react-router-dom";


const HomePage = () => {
    const navigate = useNavigate();

    const clickedPlatforms = () => {
        navigate('/platforms');
    }

    return (<div>
        <Suspense fallback={<div>Loading...</div>}>
              <Header />
        </Suspense>
      

        {/* main page body */}
        <div className="pt-28 flex flex-col w-full justify-center items-center gap-6">
            <h2 className="text-5xl font-semibold text-gray-900">Why Job Seekers Love Us</h2>
            <p className="text-2xl w-[600px] text-gray-600 align-center text-center">ust upload your CV—Experts and AI will handle the rest! Get hired faster with tailored applications and personalized support.</p>
            <div className="flex gap-4 items-center">
                <img src="https://www.autoapply.jobs/_next/static/media/users.febcdc41.svg" width={100} />
                <p className=" text-gray-600 font-semibold  text-center">3000+ Satisfied Users</p>
            </div>

            <button className="px-4 py-2 rounded-xl bg-[#541A5A] text-white" onClick={clickedPlatforms}>Get Started</button>
        </div>


        {/* applied companies */}
        <div className="flex flex-col gap-10 items-center pt-30">
            <p className="text-gray-600 font-semibold text-xl">OUR USERS GET HIRED BY TOP COMPANIES</p>
            <div className="flex gap-28">
                <img src="	https://www.autoapply.jobs/_next/static/media/adobe.5d5f333e.svg" width={100} />
                <img src="	https://www.autoapply.jobs/_next/static/media/spotify.6d01d887.svg" width={100} />
                <img src="	https://www.autoapply.jobs/_next/static/media/airbnb.ef0deb39.svg" width={100} />
                <img src="https://www.autoapply.jobs/_next/static/media/dropbox.c0bba528.svg" width={100} />
                <img src="https://www.autoapply.jobs/_next/static/media/google.084f2e56.svg" width={100} />
                <img src="	https://www.autoapply.jobs/_next/static/media/netflix.18c9c8ff.svg" width={100} />
                <img src="https://www.autoapply.jobs/_next/static/media/zoom.ab6c4ffa.svg" width={100} />
            </div>
        </div>


        {/* Our services */}
        <div className="flex flex-col pt-30 gap-10 items-center">
            <h2 className="text-5xl text-green-600 font-bold">Our Services</h2>
            <div className="flex gap-10">
                <div className="bg-[#F4F3FF] px-10 py-20 rounded-2xl">
                    <p className="text-[#541A5A]">Features</p>
                    <p className="text-3xl font-semibold">Smart Job Applications, Zero Effort</p>
                    <p className=" text-gray-600">We find, match, and submit jobs while you sleep. Your career growth will be simplified.</p>
                </div>
                <div className="bg-[#541A5A] px-10 py-20 rounded-2xl">
                    <div className="bg-white rounded-2xl p-10">
                        <p className="font-semibold">autoapply has applied 20 to 25 jobs for you</p>
                        <p className="text-gray-600">Check out the all new dashboard view. Pages  and exports now load faster.</p>
                    </div>
                </div>
            </div>
        </div>



        {/* footer */}
        <Suspense fallback={<div>Loading...</div>}>
              <Footer />
        </Suspense>
    </div>)
}

export default HomePage;