import React from 'react'
import { Accordion, AccordionItem } from "@heroui/accordion";

const Questions = () => {
    return (
        <div id='questions' className='px-[20px] md:px-[80px] bg-[#0f0e0e] py-[40px] md:py-[60px] w-full'>
            <div className='mb-[30px] md:mb-[50px]'>
                <h1 className='text-[24px] md:text-[28px] font-bold text-white text-center md:text-left'>
                    Frequently Asked Questions
                </h1>
                <div className='w-full flex flex-col md:flex-row items-center justify-between gap-6 mt-[15px]'>
                    <p className='text-[12px] md:text-[14px] font-regular text-[rgba(153,153,153,1)] text-center md:text-left max-w-[800px]'>
                        Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe.
                    </p>
                    <button className='text-white bg-red-600 px-[20px] py-[12px] md:py-[14px] rounded-[9px] w-full md:w-auto hover:bg-red-700 transition-colors'>
                        Ask a Question
                    </button>
                </div>
            </div>

            {/* Контейнер для аккордеонов: flex-col для мобилок, flex-row для ПК */}
            <div className='flex flex-col md:flex-row w-full gap-0 md:gap-[20px]'>
                <Accordion 
                    selectionMode="single"
                    variant='splitted'
                    className="w-full md:w-1/2 p-0"
                    itemClasses={{
                        base: "border-b border-[rgba(38,38,38,1)] hover:border-red-500 w-full px-0 md:px-[10px] py-6 md:py-10 !m-0 outline-none transition-all",
                        trigger: "flex w-full h-full justify-between items-center",
                        indicator: "ml-auto text-[22px] md:text-[26px] text-white",
                        titleWrapper: "flex-1 w-full",
                        title: "w-full text-left text-white pl-[10px] md:pl-[20px] text-[16px] md:text-[20px] font-medium",
                        startContent: "px-[12px] md:px-[16px] py-[8px] md:py-[12px] text-white text-[14px] md:text-[16px] font-semibold bg-[rgba(31,31,31,1)] rounded-[9px]"
                    }}
                >
                    <AccordionItem key="1" startContent={<h1>01</h1>} title="What is StreamVibe?">
                        <p className='ml-[50px] md:ml-[65px] text-[14px] md:text-[16px] text-[rgba(153,153,153,1)] w-[90%] md:w-[80%] mt-[15px]'>
                            StreamVibe is a streaming service that allows you to watch movies and shows on demand.
                        </p>
                    </AccordionItem>
                    <AccordionItem key="2" startContent={<h1>02</h1>} title="How much does StreamVibe cost?">
                        <p className='ml-[50px] md:ml-[65px] text-[14px] md:text-[16px] text-[rgba(153,153,153,1)] w-[90%] md:w-[80%] mt-[15px]'>
                            StreamVibe offers various plans to fit your needs, starting from budget-friendly options.
                        </p>
                    </AccordionItem>
                    <AccordionItem key="3" startContent={<h1>03</h1>} title="What content is available?">
                        <p className='ml-[50px] md:ml-[65px] text-[14px] md:text-[16px] text-[rgba(153,153,153,1)] w-[90%] md:w-[80%] mt-[15px]'>
                            You can enjoy a wide variety of movies, TV shows, and exclusive originals.
                        </p>
                    </AccordionItem>
                    <AccordionItem key="4" startContent={<h1>04</h1>} title="How can I watch StreamVibe?">
                        <p className='ml-[50px] md:ml-[65px] text-[14px] md:text-[16px] text-[rgba(153,153,153,1)] w-[90%] md:w-[80%] mt-[15px]'>
                            Watch on your TV, smartphone, tablet, or laptop via our app or website.
                        </p>
                    </AccordionItem>
                </Accordion>

                <Accordion 
                    selectionMode="single"
                    variant='splitted'
                    className="w-full md:w-1/2 p-0"
                    itemClasses={{
                        base: "border-b border-[rgba(38,38,38,1)] hover:border-red-500 w-full px-0 md:px-[10px] py-6 md:py-10 !m-0 outline-none transition-all",
                        trigger: "flex w-full h-full justify-between items-center",
                        indicator: "ml-auto text-[22px] md:text-[26px] text-white",
                        titleWrapper: "flex-1 w-full",
                        title: "w-full text-left text-white pl-[10px] md:pl-[20px] text-[16px] md:text-[20px] font-medium",
                        startContent: "px-[12px] md:px-[16px] py-[8px] md:py-[12px] text-white text-[14px] md:text-[16px] font-semibold bg-[rgba(31,31,31,1)] rounded-[9px]"
                    }}
                >
                    <AccordionItem key="5" startContent={<h1>05</h1>} title="How do I sign up?">
                        <p className='ml-[50px] md:ml-[65px] text-[14px] md:text-[16px] text-[rgba(153,153,153,1)] w-[90%] md:w-[80%] mt-[15px]'>
                            Visit our website or download the app and follow the registration steps.
                        </p>
                    </AccordionItem>
                    <AccordionItem key="6" startContent={<h1>06</h1>} title="What is the free trial?">
                        <p className='ml-[50px] md:ml-[65px] text-[14px] md:text-[16px] text-[rgba(153,153,153,1)] w-[90%] md:w-[80%] mt-[15px]'>
                            New users can enjoy a 7-day free trial to explore all features.
                        </p>
                    </AccordionItem>
                    <AccordionItem key="7" startContent={<h1>07</h1>} title="How to contact support?">
                        <p className='ml-[50px] md:ml-[65px] text-[14px] md:text-[16px] text-[rgba(153,153,153,1)] w-[90%] md:w-[80%] mt-[15px]'>
                            Our support team is available 24/7 via chat or email.
                        </p>
                    </AccordionItem>
                    <AccordionItem key="8" startContent={<h1>08</h1>} title="What are payment methods?">
                        <p className='ml-[50px] md:ml-[65px] text-[14px] md:text-[16px] text-[rgba(153,153,153,1)] w-[90%] md:w-[80%] mt-[15px]'>
                            We accept credit cards, PayPal, and various digital wallets.
                        </p>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    )
}

export default Questions