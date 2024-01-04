import React from 'react';
import { useNavigate } from 'react-router-dom';
import { usePDF } from 'react-to-pdf';
import { IoMdDownload } from "react-icons/io";

const DiabeticPatientBeCarefullIntruction = () => {

    const navigate = useNavigate();
    const { toPDF, targetRef } = usePDF({ filename: 'Diabetic Patient Instructions.pdf' });

    return (
        <div className="max-w-full mx-auto shadow-md border">

            <div ref={targetRef} className='p-10' >
                <h2 className="text-2xl font-bold mb-4">You are a diabetic patient Be carefull about your self and follow the rules and take medicine properly.</h2>

                <div className='mb-5'>
                    <ul className='mt-3 space-y-1'>
                        <li>→ 01. For diabetes: Emlino/5mg (or) Linax Plus 2.5/500mg (1+0+1)</li>
                        <li>→ 02. Gastric: Seclo 20mg 1+0+1 Take it before meal</li>
                        <li>→ 03. For sleeping: Tenil 3mg 0+0+1 If the face insufficient sleep</li>
                        <li>→ 04. If have low blood pressure: Bicozinc 0+0+1</li>
                    </ul>
                </div>

                <div>
                    <ul className='mt-3 space-y-1'>
                        <li>⇒ Before taking blood pressure medicine measure it properly.</li>
                        <li>⇒ Test your sugar level 2 times in a week.</li>
                        <li>⇒ Do not take insulin without a doctor's consultation.</li>
                        <li>⇒ Maintain food chart.</li>
                        <li>⇒ Do exercise regularly.</li>
                        <li>⇒ Doctor consulting must.</li>
                        <li>⇒ Drink more water.</li>
                        <li>⇒ Take medicine properly and try to lead a healthy life.</li>
                        <li>⇒ Careful about health and other health-related problems.</li>
                    </ul>
                </div>

                <p className='font-medium mt-5'>⇰ Medicine can be changed according to your doctor and your other problem so consulting doctor is a must.</p>
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

export default DiabeticPatientBeCarefullIntruction;