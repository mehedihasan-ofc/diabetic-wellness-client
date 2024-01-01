import React, { useState } from 'react';
import { IoMdSend } from 'react-icons/io';
import { main } from '../openai';

const AskMore = () => {
    const [input, setInput] = useState('');
    const [response, setResponse] = useState('');

    const handleSend = async () => {
        const res = await main(input); // Pass as an array
        setResponse(res);
    };

    return (
        <div className="max-w-lg mx-auto p-6 bg-gray-100 rounded-md shadow-md">
            <h1 className="text-2xl font-semibold mb-4">Ask for any question?</h1>
            <div className="flex items-center border border-gray-300 rounded-md">
                <input
                    className="w-full py-2 px-4 rounded-l-md focus:outline-none"
                    type="text"
                    placeholder="Type your message..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <IoMdSend
                    className="cursor-pointer p-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600"
                    onClick={handleSend}
                />
            </div>
            {response && (
                <div className="mt-4">
                    <h2 className="text-lg font-semibold mb-2">Response:</h2>
                    <p className="text-gray-800">{response}</p>
                </div>
            )}
        </div>
    );
};

export default AskMore;