import React from 'react'
import { FaArrowRight } from "react-icons/fa6"
import banarImage from '../assets/Image/banner image.svg'

const Banar = () => {
    return (
        <>
            <div className='w-fullWidth bg-fullWidthColor pb-[317px] '>
                <div className='max-w-container mx-auto relative'>
                    <div className='flex'>
                        <div className='2/5 pt-[260px] font-Raleway   '>
                            <h1 className=' w-[516px] leading-[58.8px] text-[#261134] text-[49px] '>A trusted provider of <span className='font-extrabold '>courier services.</span></h1>
                            <p className='mt-[16px] text-[#4D4D4D] w-[287px] '>We deliver your products safely to your home in a reasonable time.</p>
                            <div className='relative'>
                                <p className='font-bold font-Oxanium text-[20px] text-[#FFFFFF] bg-PapayaOrange py-[12px] pl-[20px] inline-block rounded-[5px] mt-[41px] pr-[50px] '>Get started</p>
                                <FaArrowRight className='absolute top-[55px] left-[135px] text-2xl text-white  ' />
                            </div>
                        </div>
                        <div className='3/5'>

                            <img src={banarImage} alt="" className='absolute top-[188px] left-[467px] w-[878px] h-[517.516px] ' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banar