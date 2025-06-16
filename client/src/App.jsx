import { lazy, Suspense, useEffect, useState } from 'react';
import useAuthStore from "./store/AuthStore.jsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const SignUpPage = lazy(() => import("./Pages/SignUp.Page.jsx"))
const LoginPage = lazy(() => import("./Pages/Login.page.jsx"))
const HomePage = lazy(() => import("./Pages/Home.page.jsx"));
const PlatformsPage = lazy(() => import('./Pages/Platforms.jsx'));
const Working = lazy(() => import("./Pages/Working.jsx"));

function App() {
  const { isAuthenticated, isLoading, fetchUser } = useAuthStore();
  useEffect(() => {
    const getData = async () => {
      await fetchUser();
    }
    getData();
  }, [])

  if (isLoading) {
    return (<div className="w-screen h-screen bg-gradient-to-br from-black to-indigo-900 flex justify-center items-center">
        <div className="w-[300px] flex flex-col gap-20 justify-center items-center">

           
          <div className="flex gap-4 items-end">
            <div className="w-5 h-[120px] bg-[#f74cf7] rounded-full shadow-lg shadow-cyan-500/50 animate-bounce" style={{ animationDelay: `0s`, marginTop: '20px' }}></div>
            <div className="w-5 h-[140px] bg-[#f74cf7] rounded-full shadow-lg shadow-cyan-500/50 animate-bounce" style={{ animationDelay: `0.15s`, marginTop: '10px' }}></div>
            <div className="w-5 h-[120px] bg-[#f74cf7] rounded-full shadow-lg shadow-cyan-500/50 animate-bounce" style={{ animationDelay: `0.3s`, marginTop: '20px' }}></div>
            <div className="w-5 h-[140px] bg-[#f74cf7] rounded-full shadow-lg shadow-cyan-500/50 animate-bounce" style={{ animationDelay: `0.45s`, marginTop: '20px' }}></div>
            <div className="w-5 h-[140px] bg-[#f74cf7] rounded-full shadow-lg shadow-cyan-500/50 animate-bounce" style={{ animationDelay: `0.6s`, marginTop: '10px' }}></div>
            <div className="w-5 h-[120px] bg-[#f74cf7] rounded-full shadow-lg shadow-cyan-500/50 animate-bounce" style={{ animationDelay: `0.75s`, marginTop: '20px' }}></div>
          </div>

           
          <p className=" text-[#a193e2] text-4xl tracking-[0.4em] font-semibold opacity-80 animate-pulse">
            LOADING
          </p>
        </div>
      </div>)
  }

  return (
    <>
      <BrowserRouter>

        <Suspense fallback={<div>Loading .....</div>}>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/login' element={!isAuthenticated ? <LoginPage /> : <HomePage />} />
            <Route path='/signUp' element={!isAuthenticated ? <SignUpPage /> : <HomePage />} />
            <Route path='/platforms' element={!isAuthenticated ? <LoginPage /> : <PlatformsPage />} />
            <Route path='/working' element={<Working />} />
          </Routes>
        </Suspense>

      </BrowserRouter>
    </>
  )
}

export default App
