import React from 'react'
import { Tabs, Tab, } from "@heroui/tabs";
import { Card, CardBody } from "@heroui/card";
const Plan = () => {
    return (
        <div className=' px-[20px] md:px-[80px] bg-[#0d0d0d] py-[60px] w-[100%]' >
            <div>
                <h1 className='text-[28px] font-bold text-white'>Choose the plan that's right for you</h1>
                <div className='md:flex flex-wrap justify-between'>
                    <p className='text-[16px] font-regular text-[rgba(153,153,153,1)] mt-[20px]'>Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop <br /> entertainment!</p>
                    <Tabs classNames={{

                        tabList: "bg-[#0F0F0F] border-[#262626] rounded-[10px] p-1 w-[200px]",
                        cursor: "bg-[#1F1F1F] rounded-[8px] shadow-none",
                        tab: "px-[10px] w-[100px] h-[40px]",
                        tabContent: "group-data-[selected=true]:text-white text-[#999999] font-medium"
                    }}
                        aria-label="Options">
                        <Tab key="monthly" title="Monthly">
                            <Card>
                                <CardBody className='mt-[50px]'>
                                    <div className='md:flex md:justify-between gap-[20px] gap-y-[20px]  w-[100%]  '>
                                        <div className='mt-[20px] bg-[rgba(26,26,26,1)] w-[100%] md:w-[30%] p-[40px] rounded-[9px] border-[1px] border-[rgba(38,38,38,1)] '>
                                        <div>
                                            <h1 className='text-[20px] text-white font-bold'>Basic Plan</h1>
                                            <p className='text-[16px] text-[rgba(153,153,153,1)] mt-[12px]'>Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.</p>
                                            <p className='text-[rgba(153,153,153,1)] text-[16px] font-medium mt-[40px]'><span className='text-white text-[30px] font-semibold'>$9.99</span>/month</p>
                                        </div>
                                        <div className='w-[100%] gap-y-[20px] mt-[40px] md:flex justify-between'>
                                            <button className=' w-[100%] md:w-[48%] px-[20px] py-[14px] text-[14px] text-white font-semibold rounded-[9px] bg-black'>Start Free Trial</button>
                                            <button className='w-[100%] mt-[20px] md:mt-0 md:w-[48%] px-[20px] py-[14px] text-[14px] text-white font-semibold rounded-[9px] bg-[rgba(229,0,0,1)]'>Choose Plan</button>
                                        </div>
                                    </div>
                                    <div className='mt-[20px] bg-[rgba(26,26,26,1)] w-[100%] md:w-[30%] p-[40px] rounded-[9px] border-[1px] border-[rgba(38,38,38,1)] '>
                                        <div>
                                            <h1 className='text-[20px] text-white font-bold'>Standard Plan</h1>
                                            <p className='text-[16px] text-[rgba(153,153,153,1)] mt-[12px]'>Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.</p>
                                            <p className='text-[rgba(153,153,153,1)] text-[16px] font-medium mt-[40px]'><span className='text-white text-[30px] font-semibold'>$12.99</span>/month</p>
                                        </div>
                                        <div className='w-[100%] gap-y-[20px] mt-[40px] md:flex justify-between'>
                                            <button className=' w-[100%] md:w-[48%] px-[20px] py-[14px] text-[14px] text-white font-semibold rounded-[9px] bg-black'>Start Free Trial</button>
                                            <button className='w-[100%] mt-[20px] md:mt-0 md:w-[48%] px-[20px] py-[14px] text-[14px] text-white font-semibold rounded-[9px] bg-[rgba(229,0,0,1)]'>Choose Plan</button>
                                        </div>
                                    </div>
                                    <div className='mt-[20px] bg-[rgba(26,26,26,1)] w-[100%] md:w-[30%] p-[40px] rounded-[9px] border-[1px] border-[rgba(38,38,38,1)] '>
                                        <div>
                                            <h1 className='text-[20px] text-white font-bold'>Premium Plan</h1>
                                            <p className='text-[16px] text-[rgba(153,153,153,1)] mt-[12px]'>Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.</p>
                                            <p className='text-[rgba(153,153,153,1)] text-[16px] font-medium mt-[40px]'><span className='text-white text-[30px] font-semibold'>$14.99</span>/month</p>
                                        </div>
                                        <div className='w-[100%] gap-y-[20px] mt-[40px] md:flex justify-between'>
                                            <button className=' w-[100%] md:w-[48%] px-[20px] py-[14px] text-[14px] text-white font-semibold rounded-[9px] bg-black'>Start Free Trial</button>
                                            <button className='w-[100%] mt-[20px] md:mt-0 md:w-[48%] px-[20px] py-[14px] text-[14px] text-white font-semibold rounded-[9px] bg-[rgba(229,0,0,1)]'>Choose Plan</button>
                                        </div>
                                    </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Tab>
                        <Tab key="annually" title="Annually">
                            <Card>
                                <CardBody className=' mt-[50px]'>
                                    <div className='md:flex md:justify-between gap-[20px] gap-y-[20px]  w-[100%] '>
                                        <div className='mt-[20px] bg-[rgba(26,26,26,1)] w-[100%] md:w-[30%] p-[40px] rounded-[9px] border-[1px] border-[rgba(38,38,38,1)] '>
                                        <div>
                                            <h1 className='text-[20px] text-white font-bold'>Basic Plan</h1>
                                            <p className='text-[16px] text-[rgba(153,153,153,1)] mt-[12px]'>Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.</p>
                                            <p className='text-[rgba(153,153,153,1)] text-[16px] font-medium mt-[40px]'><span className='text-white text-[30px] font-semibold'>$101.99</span>/month</p>
                                        </div>
                                        <div className='w-[100%] gap-y-[20px] mt-[40px] md:flex justify-between'>
                                            <button className=' w-[100%] md:w-[48%] px-[20px] py-[14px] text-[14px] text-white font-semibold rounded-[9px] bg-black'>Start Free Trial</button>
                                            <button className='w-[100%] mt-[20px] md:mt-0 md:w-[48%] px-[20px] py-[14px] text-[14px] text-white font-semibold rounded-[9px] bg-[rgba(229,0,0,1)]'>Choose Plan</button>
                                        </div>
                                    </div>
                                    <div className='mt-[20px] bg-[rgba(26,26,26,1)] w-[100%] md:w-[30%] p-[40px] rounded-[9px] border-[1px] border-[rgba(38,38,38,1)] '>
                                        <div>
                                            <h1 className='text-[20px] text-white font-bold'>Standard Plan</h1>
                                            <p className='text-[16px] text-[rgba(153,153,153,1)] mt-[12px]'>Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.</p>
                                            <p className='text-[rgba(153,153,153,1)] text-[16px] font-medium mt-[40px]'><span className='text-white text-[30px] font-semibold'>$121.99</span>/month</p>
                                        </div>
                                        <div className='w-[100%] gap-y-[20px] mt-[40px] md:flex justify-between'>
                                            <button className=' w-[100%] md:w-[48%] px-[20px] py-[14px] text-[14px] text-white font-semibold rounded-[9px] bg-black'>Start Free Trial</button>
                                            <button className='w-[100%] mt-[20px] md:mt-0 md:w-[48%] px-[20px] py-[14px] text-[14px] text-white font-semibold rounded-[9px] bg-[rgba(229,0,0,1)]'>Choose Plan</button>
                                        </div>
                                    </div>
                                    <div className='mt-[20px] bg-[rgba(26,26,26,1)] w-[100%] md:w-[30%] p-[40px] rounded-[9px] border-[1px] border-[rgba(38,38,38,1)] '>
                                        <div>
                                            <h1 className='text-[20px] text-white font-bold'>Premium Plan</h1>
                                            <p className='text-[16px] text-[rgba(153,153,153,1)] mt-[12px]'>Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.</p>
                                            <p className='text-[rgba(153,153,153,1)] text-[16px] font-medium mt-[40px]'><span className='text-white text-[30px] font-semibold'>$141.99</span>/month</p>
                                        </div>
                                        <div className='w-[100%] gap-y-[20px] mt-[40px] md:flex justify-between'>
                                            <button className=' w-[100%] md:w-[48%] px-[20px] py-[14px] text-[14px] text-white font-semibold rounded-[9px] bg-black'>Start Free Trial</button>
                                            <button className='w-[100%] mt-[20px] md:mt-0 md:w-[48%] px-[20px] py-[14px] text-[14px] text-white font-semibold rounded-[9px] bg-[rgba(229,0,0,1)]'>Choose Plan</button>
                                        </div>
                                    </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Tab>

                    </Tabs>
                </div>
            </div>

        </div>
    )
}

export default Plan      