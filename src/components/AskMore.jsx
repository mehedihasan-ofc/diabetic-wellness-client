import React, { useState } from 'react';
import { LuSendHorizonal } from "react-icons/lu";
import { FaSpinner } from 'react-icons/fa';
import { main } from '../openai';
import { useNavigate } from 'react-router-dom';
import { usePDF } from 'react-to-pdf';
import { IoMdDownload } from 'react-icons/io';

const AskMore = () => {
    const [input, setInput] = useState('');
    const [response, setResponse] = useState('');
    const [processing, setProcessing] = useState(false);
    const navigate = useNavigate();

    const handleSend = async () => {
        setProcessing(true);
        const res = await main(input);
        setResponse(res);
        setProcessing(false);
        setInput('');
    };

    const { toPDF, targetRef } = usePDF({ filename: 'result.pdf' });

    return (
        <div className="max-w-xl mx-auto shadow-md border">
            <div className='p-6'>
            <h1 className="text-2xl font-semibold mb-4">Ask for any question?</h1>
                <div className="flex items-center border border-gray-300 rounded-md pr-2">
                    <input
                        className="w-full py-2 px-4 rounded-l-md focus:outline-none"
                        type="text"
                        placeholder="Please briefly describe ..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />

                    <button>
                        {
                            processing ? <FaSpinner className='m-auto animate-spin' size={24} /> : <LuSendHorizonal className='cursor-pointer text-2xl' onClick={handleSend} />
                        }
                    </button>
                </div>
            </div>
            {response && (
                <div>
                    <h2 className="text-lg font-semibold px-6">Response:</h2>

                    <div ref={targetRef} className='px-6 py-3'>
                        <p className="text-gray-800 text-justify">{response}</p>
                    </div>

                    <div className='flex justify-end items-center px-6'>
                        <button onClick={() => toPDF()} className='flex justify-between items-center px-5 py-3 border gap-2'>Download Report <IoMdDownload className='text-2xl' /></button>
                    </div>
                </div>
            )}

            <div className="flex p-6 justify-between">
                <button onClick={() => navigate(-1)} className="bg-red-600 px-10 py-2 text-white rounded">
                    Prev
                </button>
                <button onClick={() => navigate('/')} className="bg-green-600 px-10 py-2 text-white rounded">
                    Check Again
                </button>
            </div>
        </div>
    );
};

export default AskMore;