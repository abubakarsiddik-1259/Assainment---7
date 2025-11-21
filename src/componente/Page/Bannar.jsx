
import React from 'react';

import netImage from "../../assets/vector1.png"

const Bannar = ({tiketeTotal,readyTikite}) => {
    return (
      

            <div className="mx-8 mt-18 flex gap-6 my-4">

                <div className="w-full bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white rounded-xl p-8 h-45 flex flex-col items-center justify-center flex-1 relative">
                    <img className='h-45 absolute left-0' src={netImage} alt="" />

                    <img className='h-45 absolute right-0 scale-x-[-1]' src={netImage} alt="" />
                    <p className='text-base '>In-Progress</p>
                    <h1 className='text-4xl  font-semibold'>{tiketeTotal}</h1>
                </div>

                <div className="w-full bg-gradient-to-r from-[#54CF68] to-[#00827A] text-white rounded-xl relative p-8 h-45 flex flex-col items-center justify-center flex-1">
                     <img className='h-45 absolute left-0' src={netImage} alt="" />
                 

                      <img className='h-45 absolute right-0 scale-x-[-1]' src={netImage} alt="" />  

                    <p className='text-base '>Resolved</p>
                <h1 className='text-4xl  font-semibold'>{readyTikite}</h1>
                </div>







            </div>
            
       
    );
};

export default Bannar;