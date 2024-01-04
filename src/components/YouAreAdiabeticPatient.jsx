import React from 'react';
import { useNavigate } from 'react-router-dom';

const YouAreAdiabeticPatient = () => {

    const navigate = useNavigate();

    return (
        <div className='max-w-full mx-auto p-10 shadow-md border'>
            <h2 className="text-3xl font-bold text-red-500 text-center">You are a diabetic patient.</h2>

            <div className='flex justify-between mt-10'>
                <button onClick={() => navigate(-1)} className="bg-red-600 px-10 py-2 text-white rounded">Prev</button>
                <button onClick={() => navigate('/ask-more')} className="bg-green-600 px-10 py-2 text-white rounded">Next</button>
            </div>
        </div>
    );
};

export default YouAreAdiabeticPatient;