import React from 'react';
import { useNavigate } from 'react-router-dom';
import { usePDF } from 'react-to-pdf';
import { IoMdDownload } from "react-icons/io";

const PregnantInstruction = () => {

    const navigate = useNavigate();
    const { toPDF, targetRef } = usePDF({ filename: 'Pregnant Instructions.pdf' });

    return (
        <div className="max-w-full mx-auto shadow-md border">

            <div className='p-10' ref={targetRef}>
                <h2 className="text-2xl font-bold mb-4">Pregnancy Instructions</h2>

                <div className='mb-5'>
                    <p className='font-medium'>This is very normal at this time. There is no reason to worry. <br /> Follow the doctor's advice
                        You may need to adjust your diet to keep gestational diabetes under control.</p>

                    <ul className='mt-3 space-y-1'>
                        <li>→ Try to avoid junk food, processed foods and sugary drinks.</li>
                        <li>→ Choose a healthy balance of proteins, carbohydrates, fiber and fat</li>
                        <li>→ Eat smaller meals more often.</li>
                        <li>→ Schedule your meals at the same time each day.</li>
                    </ul>
                </div>

                <div>
                    <p className='font-medium'>Make diabetes management part of your daily routine.</p>

                    <ul className='mt-3 space-y-1'>
                        <li>→ Check your blood glucose levels at the same time each day.</li>
                        <li>→ Choose three days each week to get 30 minutes of light exercise.</li>
                        <li>→ Talk with your healthcare provider or a diabetes educator about other tips for daily diabetes management.</li>
                    </ul>
                </div>
            </div>

            <div className='flex justify-end items-center px-5'>
                <button onClick={() => toPDF()} className='flex justify-between items-center px-10 py-3 border gap-2'>Download Instructions <IoMdDownload className='text-2xl' /></button>
            </div>

            <div className='flex justify-between px-10 py-5'>
                <button onClick={() => navigate(-1)} className="bg-red-600 px-10 py-2 text-white rounded">Prev</button>
                <button onClick={() => navigate('/ask-more')} className="bg-green-600 px-10 py-2 text-white rounded">Next</button>
            </div>
        </div>
    );
};

export default PregnantInstruction;