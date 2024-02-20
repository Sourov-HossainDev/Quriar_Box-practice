import React from 'react'
import Logo from '../assets/Image/Logo.png'

const Futter = () => {
    return (
        <>
            <div className='bg-[#222132] pb-[97px] '>
                <div className='max-w-container mx-auto '>
                    <div className='flex'>
                        <div className='w-2/4 font-Raleway  '>
                            <h2 className='font-extrabold text-[39px] text-white mt-[84px]  '>Get an update every week </h2>
                            <p className='text-[16px] text-[#C5C5D2] leading-[23.2px] w-[501px] '>We ensure that your product is delivered in the safest possible manner, at the correct location, at the right time.</p>
                        </div>
                        <div className='w-2/4 ml-[125px] '>
                            <h3 className='font-Oxanium  font-bold text-[18px] text-PapayaOrange mt-[92px]  '>SUBSCRIBE TO NEWSLETTER</h3>
                            <div className='flex'>
                                <div className='w-[386px] border rounded-[5px] mt-[13px] '>
                                    <input type="text" placeholder='Enter your mail' className='w-[191px] py-[15px] pl-[18px] outline-none bg-inherit  ' />
                                </div>
                                <div>
                                    <p className='bg-PapayaOrange py-[12px] px-[20px] rounded-[5px] font-Oxanium font-bold text-[20px] text-white ml-[16px] mt-[15px] cursor-pointer '>Subscribe</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[#2F2E41]  '>
                <div className='max-w-container mx-auto flex '>
                    <div className='w-2/4 mt-[60px] '>
                        <img src={Logo} alt="" />
                        <p className='mt-[18px] font-Raleway font-semibold text-[#9291A1] text-[16px] leading-[22px] w-[190px]  '>The most trusted Courier company in your area.</p>
                    </div>
                    <div className='w-2/4 flex justify-between mt-[50px] mb-[56px] '>
                        <div className='2/6 '>
                            <h4 className='font-Oxanium font-bold text-[20px] text-white  '>Other links</h4>
                            <div className='font-Raleway font-semibold text-[16px] text-[#9291A1] mt-[22px] '>
                                <p>Blogs</p>
                                <p className='mt-[7px] '>Movers website</p>
                                <p className='mt-[7px] '>Traffic Update</p>
                            </div>
                        </div>
                        <div className='2/6 '>
                            <h4 className='font-Oxanium font-bold text-[20px] text-white  '>Services</h4>
                            <div className='font-Raleway font-semibold text-[16px] text-[#9291A1] mt-[22px] '>
                                <p>Corporate goods</p>
                                <p className='mt-[7px] '>Artworks</p>
                                <p className='mt-[7px] '>Documents</p>
                            </div>
                        </div>
                        <div className='2/6 '>
                            <h4 className='font-Oxanium font-bold text-[20px] text-white  '>Customer Care</h4>
                            <div className='font-Raleway font-semibold text-[16px] text-[#9291A1] mt-[22px] '>
                                <p>About Us</p>
                                <p className='mt-[7px] '>Contact US</p>
                                <p className='mt-[7px] '>Get Update</p>
                            </div>
                        </div>
                        
                        
                    </div>
                </div>
            </div>
            <div className='bg-[#222132] py-[30.5px]  '>
                <div className='max-w-container mx-auto flex relative '>
                    <p className='font-Raleway font-medium text-[13px] text-[#DBDBE9]  '>All rights Reserved © Your Company, 2021</p>
                    <p className='absolute top-0 right-0 text-[#E0DEDE] font-Raleway font-medium text-[13px] '>Made with heart by <span className=' font-extrabold text-PapayaOrange '>ThemeWagon</span></p>
                </div>

            </div>
        </>
    )
}

export default Futter