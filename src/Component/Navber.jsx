import React from 'react'
import Logo from '../assets/Image/Logo.PNG'
import { GoSearch } from "react-icons/go"

const Navber = () => {
    return (
        <>
            <div className='bg-[#FFFFFFB2, #FFFFFF26] shadow-NavShadow '>
                <div className='max-w-container mx-auto flex  '>
                    <img src={Logo} alt="" className='pt-[15px] pb-[29px]  ' />
                    <div className='font-Raleway  text-[16px] flex w-[406px] justify-between mt-[31px] ml-[519px]  '>
                        <p className='text-[#817382] font-extrabold cursor-pointer hover:text-[#F95C19]  '>Home</p>
                        <p className='text-[#817382] font-bold cursor-pointer hover:text-[#F95C19]  '>Our services</p>
                        <p className='text-[#817382] font-bold cursor-pointer hover:text-[#F95C19]  '>About Us</p>
                        <p className='text-[#817382] font-bold cursor-pointer hover:text-[#F95C19]  '>What’s new?</p>
                    </div>
                    <div className='w-[54px] h-[54px] bg-[#FFEDC9] rounded-[5px] ml-[45px] mt-[15px]  relative '>
                        <GoSearch className='absolute top-[12px] left-[12px] text-3xl text-PapayaOrange  cursor-pointer  '/>
                    </div>
                    <div className=' '>
                        <p className='py-[12px] px-[20px] bg-[#FFE4D9] inline-block font-Oxanium font-bold text-[20px] text-PapayaOrange mt-[15px] ml-[9px] rounded-[5px] '>Contact us</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navber