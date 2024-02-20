import React from 'react'
import { HiOutlineLocationMarker } from "react-icons/hi"

const FindUs = () => {
    return (
        <>
            <div className='w-fullWidth bg-fullWidthColor pt-[200px] pb-[183px]  '>
                <div className='max-w-container mx-auto '>
                    <div className='text-center  '>
                        <h2 className='font-Oxanium font-bold text-[31.25px] text-PapayaOrange '>FIND US</h2>
                        <h2 className='font-Raleway font-extrabold text-[39px] text-[#222132] mt-[13px]  '>Access us easily</h2>
                    </div>
                    <div className='flex mt-[85px]  '>
                        <div className='w-3/5 '></div>
                        <div className='w-2/5 pt-[81px] pl-[88px] pb-[88px] bg-[#FEFCFA] font-Raleway '>
                            <p className=' font-bold text-[20px] text-[#464558]  '>Contact with us</p>

                            <div className='flex mt-[37px]  '>
                                <HiOutlineLocationMarker className='text-2xl text-[#FFAF0F] ' />
                                <p className='text-[#5C5B6C] text-[16px] ml-[13px] '>2277 Lorem Ave, San Diego, CA 22553</p>
                            </div>
                            <div className='flex mt-[18px]  '>
                                <HiOutlineLocationMarker className='text-2xl text-[#FFAF0F] ' />
                                <p className='text-[#5C5B6C] text-[16px] ml-[13px] w-[285px] '>Monday - Friday: 10 am - 10pm
                                    Sunday: 11 am - 9pm</p>
                            </div>
                            <div className='flex mt-[18px]  '>
                                <HiOutlineLocationMarker className='text-2xl text-[#FFAF0F] ' />
                                <p className='text-[#5C5B6C] text-[16px] ml-[13px] '>info@quriarbox.com</p>
                            </div>
                        </div>
                    </div>
                    <div className='text-center mt-[30px]'>
                        <p className='pt-[25px] pb-[21px] pl-[155px] pr-[113px] bg-PapayaOrange inline-block  font-Oxanium font-bold text-[20px] text-white rounded-[5px] cursor-pointer  '>Call us to delivery  123-456789</p> 

                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default FindUs