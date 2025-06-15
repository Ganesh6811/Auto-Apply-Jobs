import { useState } from "react";
import axios from "axios";
import baseUrl from "../config.jsx";
import Header from "../Components/Header.jsx";
import Footer from "../Components/Footer.jsx";

const PlatformsPage = () => {
    const [isClicked, setIsclicked] = useState(false);

    const [role, setRole] = useState('');
    const [location, setLocation] = useState('');
    const [resume, setResume] = useState(null);
    const [mobileNo, setMobileNo] = useState("");
    const [applyStarted, setApplyStarted] = useState(false);

    const clickedSearch = () => {
        setIsclicked(true);
    }

    const clickedCancel = () => {
        setIsclicked(false);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsclicked(false);

        try {
            setApplyStarted(true);
            const data = await axios.post(`${baseUrl}/apply/sendSearchDetails`, {
                role,
                location,
                resume,
                mobileNo,
            },
                { withCredentials: true }
            );

            if (data) {
                setApplyStarted(false);
            }
        }
        catch (err) {
            console.log("error while sending the search details server:", err);
            setApplyStarted(false);
        }
    }
    return (<div>
        <Header />

        <div className="flex flex-col gap-10 pt-20 px-10">
            <p className="text-3xl text-green-700 font-bold text-center">
                Platforms Available to Apply for Jobs
            </p>

            {/* Card Container */}
            <div className="flex justify-center">
                <div className="bg-white rounded-3xl shadow-lg p-8 w-full max-w-md text-center">
                    <img
                        src="https://img.freepik.com/premium-vector/linkedin-app-icon-world-s-largest-professional-network-social-networking-jobs-careers_277909-476.jpg"
                        alt="LinkedIn"
                        className="mx-auto rounded-xl w-48 h-48 object-cover"
                    />
                    <p className="mt-6 text-lg font-medium text-gray-800">
                        Apply for jobs on <span className="text-blue-700 font-semibold">LinkedIn</span>
                    </p>

                    {!applyStarted ? <button
                        className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full transition duration-300 shadow-md"
                        onClick={clickedSearch}
                    >
                        Start Applying
                    </button> :
                        <button
                            className="mt-6 bg-red-800  text-white px-6 py-2 rounded-full transition duration-300 shadow-md"
                            onClick={clickedSearch}
                        >
                            Job Applying Started
                        </button>}
                </div>
            </div>
        </div>




        {isClicked ? (
            <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white rounded-3xl shadow-2xl p-8 w-[90%] max-w-lg">
                    <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
                        Job Auto-Apply Setup
                    </h2>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                        <div className="flex flex-col">
                            <label className="text-gray-700 font-medium mb-1">Enter the Role:</label>
                            <input
                                type="text"
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                                placeholder="e.g. Frontend Developer"
                                required
                                className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="text-gray-700 font-medium mb-1">Enter Location:</label>
                            <input
                                type="text"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                placeholder="e.g. Remote"
                                required
                                className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="text-gray-700 font-medium mb-1">Enter Mobile No:</label>
                            <input
                                type="text"
                                value={mobileNo}
                                onChange={(e) => setMobileNo(e.target.value)}
                                placeholder="e.g. 9876543210"
                                required
                                className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="text-gray-700 font-medium mb-1">Upload Resume (PDF):</label>
                            <input
                                type="file"
                                accept=".pdf"
                                onChange={(e) => setResume(e.target.files[0])}
                                required
                                className="border rounded-lg px-4 py-2 focus:outline-none file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-100 file:text-green-700 hover:file:bg-green-200"
                            />
                        </div>

                        <div className="flex gap-10 w-full">
                            <button onClick={clickedCancel} className="mt-4 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-xl transition duration-300 px-3 w-[200px]">Cancel</button>
                            <button
                                type="submit"
                                className="mt-4 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-xl transition duration-300 px-3 w-[200px]"
                            >
                                Search and Apply
                            </button>
                        </div>


                    </form>
                </div>
            </div>
        ) : null}

        <div className="text-gray-800 space-y-3 mt-6 p-30">
            <p className="text-4xl text-green-700 font-semibold">Job Application Process in LinkedIn</p>
            <p>
                On this platform, we are applying only for jobs that support the
                <span className="text-green-600 font-medium"> Easy Apply </span> option and follow a simple one-step process.
                As we are still updating this website, we will notify you after the update.
            </p>

            {/* Small styled heading and paragraph at the end */}
            <h3 className="text-md font-semibold text-purple-700 mt-4">Update Notification</h3>
            <p className="text-sm text-gray-600">We’ll notify you once the update is live.</p>
        </div>


        <Footer />
    </div>);
}

export default PlatformsPage;