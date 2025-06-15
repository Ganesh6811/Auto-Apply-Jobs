import useAuthStore from "../store/AuthStore.jsx";
import { useNavigate } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";

const Header = ()=>{
    const {isAuthenticated, name} = useAuthStore();
    const navigate = useNavigate();

    const clickedHome = ()=>{
        navigate("/");
    }

    const clickedStartApplying = ()=>{
        navigate("/platforms");
    }

    const clickedHowItWorks = ()=>{
        navigate("/working");
    }

    const clickedLogin = ()=>{
        navigate("/login");
    }

    const clickedSignUp = ()=>{
        navigate("/signUp");
    }

    return(<div className="flex justify-between px-20 py-8 items-center">
        <div>
            <h2 className="text-[#541A5A] text-2xl font-semibold">AutoApply</h2>
        </div>

        <div className="flex gap-7">
            <a className="font-semibold hover:text-[#541A5A] hover:cursor-pointer" onClick={clickedHome}>Home</a> 
            <a className="font-semibold hover:text-[#541A5A] hover:cursor-pointer" onClick={clickedStartApplying}>Start Applying</a>
            <a className="font-semibold hover:text-[#541A5A] hover:cursor-pointer" onClick={clickedHowItWorks}>How it works</a>
        </div>

        <div className="flex gap-4">
            {!isAuthenticated ? (<div className="flex gap-4">
                <button onClick={clickedLogin} className="bg-[#541A5A] text-white px-5 py-2 rounded-xl hover:cursor-pointer">Login</button>
                <button onClick={clickedSignUp} className="bg-[#541A5A] text-white px-5 py-2 rounded-xl hover:cursor-pointer">SignUp</button>
            </div>) : (<div className="flex gap-8 items-center">
                <BsPersonCircle className="text-[#541A5A] text-3xl hover:text-[#541A5A] hover:cursor-pointer"  />
                <p className="font-semibold">{name}</p>
            </div>)
            }
        </div>
    </div>)
}

export default Header;