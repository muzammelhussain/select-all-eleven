import React from 'react';
import logoImg from "../.././assets/football-logo.png"

const Banner = () => {
    return (
        <div className='bg-gradient-to-r from-blue-900 via-black to-purple-900  my-12 rounded-3xl'>
            <div className='text-center px-8 py-4 space-y-3 bg-black/20  rounded-3xl ' >
            <div className='w-[200px] mx-auto'>
                <img className='w-[200px] h-[150px] bg-none' src={logoImg} alt="" />
            </div>
            <h1 className='font-bold text-3xl text-[#FFFFFF]'>Assemble Your Ultimate Dream 11 Football Team</h1>
            <p className='font-medium text-2xl text-[#FFFFFF]'>Beyond Goals Beyond Limits</p>
            <button className="mt-4 px-6 py-2 bg-gradient-to-r from-pink-400 to-yellow-300 text-black font-semibold rounded-full shadow">Claim Free Credit</button>
        </div>
        </div>
    );
};

export default Banner;