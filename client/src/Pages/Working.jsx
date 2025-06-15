import Footer from "../Components/Footer.jsx";
import Header from "../Components/Header.jsx";
import { useNavigate } from "react-router-dom";

const Working = () => {
    const navigate = useNavigate();

    const clickedPlatforms = () => {
        navigate('/platforms');
    }

    return (<div>
        <Header />

        <div className="flex flex-col pt-40 items-center gap-4">
            <p className="font-semibold text-green-700 text-xl">With AutoApply</p>
            <p className="text-5xl font-bold">Never Miss an Opportunity</p>
            <p className="text-gray-600 text-2xl w-[700px] text-center">We know job searching is exhausting — that’s why AutoApply exists. To make your job search effortless, effective, and stress-free.</p>
            <button className="px-4 py-2 rounded-xl bg-[#541A5A] text-white" onClick={clickedPlatforms}>Get Started</button>
        </div>

        <div className="w-full flex justify-center p-40">
            <p className=" text-gray-600 text-2xl text-center">With AutoApply, you’ll have jobs applying for you while you focus on landing the perfect role. Ready to get started? Here’s how it works:</p>
        </div>


        <div className="flex flex-col gap-5 items-center justify-start">
            <h2 className="text-4xl text-green-700">Setup Once, Apply Automatically</h2>
            <p className="text-gray-500 font-semibold text-xl">Creating your profile takes just minutes:</p>
            <div className="flex flex-col gap-5 pt-10">
                <p className="text-gray-500 font-semibold text-xl w-[500px]">🔐 Sign in to your account. If you’ve already signed up, simply log in and go to the Start Applying section.</p>
                <p className="text-gray-500 font-semibold text-xl w-[500px]">🌐 Select the platform (e.g., LinkedIn) you want to apply on.</p>
                <p className="text-gray-500 font-semibold text-xl w-[500px]">📄 Enter your job details: role, location, upload your resume, and provide your mobile number.</p>
                <p className="text-gray-500 font-semibold text-xl w-[500px]">🚀 Click on Start Applying to begin the automated job application process.</p>
                <p className="text-gray-500 font-semibold text-xl w-[500px]"> ✨ From here, our magic happens – we handle the rest and match you to the best roles!</p>
            </div>
            <button className="px-4 py-2 rounded-xl bg-[#541A5A] text-white" onClick={clickedPlatforms}>Get Started</button>
        </div>


        <Footer />
    </div>)
}

export default Working;