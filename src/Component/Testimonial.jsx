import React from 'react'
import { FaStar } from "react-icons/fa"
import TestImage from '../assets/Image/testImage.PNG'
import fromLeft from '../assets/Image/Ledy.SVG'
import { FaTelegramPlane } from "react-icons/fa"

const Testimonial = () => {
    return (
        <>
            <div className='w-fullWidth bg-fullWidthColor pt-[176px]  '>
                <div className='max-w-container mx-auto '>
                    <div>
                        <h2 className='font-Oxanium  font-bold text-[31.25px] text-PapayaOrange text-center  '>TESTIMONIAL</h2>
                        <h2 className='font-Raleway font-extrabold text-[39px] text-[#11111D] text-center mt-[10px]  '>Our Awesome Clients</h2>
                        <div className=' shadow-FantasticShadow w-[872px]  pt-[39px] pl-[39px] pb-[34px] pr-[32px] bg-white rounded-[16px] m-auto mt-[89px] font-Raleway  '>
                            <p className='font-bold text-[25px] text-PapayaOrange '>Fantastic service!</p>
                            <p className='mt-[11px] text-[#464558] leading-[23.2px] text-[16px] '>I purchased a phone from an e-commerce site, and this courier service provider assisted me in getting it delivered to my home. I received my phone within one day, and I was really satisfied with their service when I received it. They are really quick and dependable. They give me with the option of real-time delivery status, which allows me to track the progress of my goods delivery. I get a lot of questions from call center support and key account managers. They come highly recommended. Confidently say that they are really reliable.</p>

                            <div className='relative mt-[24.53px] pb-[38px] '>
                                <div className='flex absolute top-[15px] left-0'>
                                    <FaStar className='text-sm text-[#F95C19] ' />
                                    <FaStar className='text-sm text-[#F95C19] ml-[7px] ' />
                                    <FaStar className='text-sm text-[#F95C19] ml-[7px] ' />
                                    <FaStar className='text-sm text-[#F95C19] ml-[7px] ' />
                                    <FaStar className='text-sm text-[#F95C19] ml-[7px] ' />
                                </div>
                                <div className='absolute top-0 right-[85px] '>
                                    <p className='font-bold text-[16px] text-[#222132] '>Yves Tanguy</p>
                                    <p className='#464558'>Chief Executive, DLF</p>
                                </div>
                                <img src={TestImage} alt="" className='absolute top-0 right-0  rounded-full ' />
                            </div>
                        </div>
                    </div>
                    <div className='pt-[266px] flex '>
                        <div className='w-2/4'>
                            <img src={fromLeft} alt="" className='w-[ 343.714px] h-[256.608px] ' />
                            <h2 className='font-Oxanium font-bold text-PapayaOrange text-[24px] mt-[13.39px]  '>REQUEST A CALLBACK</h2>
                            <h2 className='font-Raleway font-extrabold text-[39px] text-[#222132] leading-[42.9px] w-[412.86px] mt-[20px]  '>We will contact in the shortest time.</h2>
                            <p className='font-Raleway font-semibold text-[25px] text-[#9291A1] mt-[9px] '>Monday to Friday, 9am-5pm.</p>
                        </div>
                        <div className='w-2/4'>
                            <div>
                                <input type="text" placeholder='Name' className='py-[15px] pl-[19px] bg-inherit border-[#C5C5D2] border outline-none rounded-[8px] w-[424px] ' />
                                <input type="text" placeholder='Email' className='py-[15px] pl-[19px] bg-inherit border-[#C5C5D2] border outline-none rounded-[8px] w-[424px] mt-[16px] ' />
                                <textarea placeholder='Message' className='pt-[13px] pl-[20px] bg-inherit mt-[15px] border border-[#C5C5D2] w-[424px] h-[154px] rounded-[8px] outline-none '></textarea>
                                <div className=' relative mt-[54px]'>
                                    <p className='bg-PapayaOrange  inline-block py-[12px] pl-[130px] pr-[158px] font-Oxanium font-bold text-[20px] text-white rounded-[5px]  '>Send Message</p>

                                    <FaTelegramPlane className='absolute top-[17px] left-[274px] text-xl text-white  '/>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonial