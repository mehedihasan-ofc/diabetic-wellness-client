import React from 'react';
import { useNavigate } from 'react-router-dom';
import { usePDF } from 'react-to-pdf';
import { IoMdDownload } from "react-icons/io";

const DiabeticPatientInstruction = () => {

    const navigate = useNavigate();
    const { toPDF, targetRef } = usePDF({ filename: 'Diabetic Patient Instructions.pdf' });

    return (
        <div className="max-w-full mx-auto shadow-md border">

            <div className='p-10' ref={targetRef}>
                <h2 className="text-2xl font-bold mb-4">You are a diabetic patient with high blood pressure</h2>

                <div className='mb-5'>
                    <ul className='mt-3 space-y-1'>
                        <li>→ For diabetes: Vildapin Plus 500mg 1+0+1</li>
                        <li>→ For sleeping: Tenil 3mg 0+0+1 If face sufficient sleep</li>
                        <li>→ For blood pressure: <br /> <span className='ml-10'>01. Prosan Hz 1+0+1</span> (50mg +12.5mg) <br /> <span className='ml-10'>02. 2. Betabase (2.5mg) 0+0+1</span></li>
                        <li>→ If have high blood pressure: <br /> <span className='ml-10'>01. AToZ 0+0+1</span> <br /> <span className='ml-10'>02. Bicozinc 1+0+0</span></li>
                        <li>→ If have low blood pressure: <br /> <span className='ml-10'>01. Insulin 1+0+1</span></li>
                        <li>→ If sugar levels stay in above 16: <br /> <span className='ml-10'>01.  Gastric Seclo 20mg 1+0+1 Take it before meal</span></li>
                    </ul>
                </div>

                <div>
                    <ul className='mt-3 space-y-1'>
                        <li>⇒ Before taking blood pressure medicine measure it properly</li>
                        <li>⇒ Test your sugar level 2 times in a week.</li>
                        <li>⇒ Without a doctor's consult do not take insulin.</li>
                        <li>⇒ Maintain food chart.</li>
                        <li>⇒ Do exercise regularly.</li>
                        <li>⇒ Doctor consulting must.</li>
                        <li>⇒ Drink more water.</li>
                        <li>⇒ Take medicine properly and try to lead a healthy life.</li>
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

export default DiabeticPatientInstruction;