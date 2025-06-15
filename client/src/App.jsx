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
    return (<p>Loading....</p>)
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
