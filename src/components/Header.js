import React from 'react'
import {useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleSignOut = () => {
      navigate("/")
  }

  const isBrowsePage = location.pathname === '/browse';

  return (
    <div className='w-screen absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
        <img 
            className='w-44'
            src=//"https://r2.erweima.ai/imgcompressed/compressed_8bf109fba9ff5d3cbff79480f65a0f48.webp"
            //"https://movieflix.websites.co.in/files/371575/business/logo/logo-1185611569.jpeg?v=431105610"
            "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" 
            alt="logo"
        />
        {isBrowsePage && (
        <div className='flex p-2'>
          <img alt='user-icon' className='w-12 h-12'
          src="https://i.pinimg.com/564x/5b/50/e7/5b50e75d07c726d36f397f6359098f58.jpg"
          />
          <button className='text-white font-bold ' onClick={handleSignOut}>(Sign Out)</button>
        </div>
        )}
    </div>    
  )
}

export default Header