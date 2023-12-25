import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AreYouDiabetic = () => {
    const [isDiabetic, setIsDiabetic] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleDiabetesChange = (e) => {
        setIsDiabetic(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isDiabetic === '') {
            setError('Please select an option.');
            return;
        }

        setError('');

        console.log("Are you Diabetic?", isDiabetic);

        // Retrieve previous data from local storage
        const preData = JSON.parse(localStorage.getItem("userData"));

        // Update previous data with gender
        const updatedData = { ...preData, isDiabetic };

        // Store updated data back to local storage
        localStorage.setItem("userData", JSON.stringify(updatedData));

        // Perform any other actions here, like storing data or navigation
        if (isDiabetic === "yes") {
            return navigate('/')
        }
        else {
            return navigate('/any-symptoms')
        }
    };

    return (
        <div className="max-w-md mx-auto shadow-md p-10 border">
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Are you Diabetic?</label>
                    <div className="flex items-center">
                        <label className="mr-4">
                            <input
                                type="radio"
                                name="diabetic"
                                value="yes"
                                checked={isDiabetic === "yes"}
                                onChange={handleDiabetesChange}
                            />
                            <span className="ml-2">Yes</span>
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="diabetic"
                                value="no"
                                checked={isDiabetic === "no"}
                                onChange={handleDiabetesChange}
                            />
                            <span className="ml-2">No</span>
                        </label>
                    </div>
                    {error && <p className="text-red-500 mt-2">{error}</p>}
                </div>

                <div className='flex justify-between mt-5'>
                    <button onClick={() => navigate(-1)} className="bg-red-600 px-10 py-2 text-white rounded">Prev</button>
                    <button type="submit" className="bg-green-600 px-10 py-2 text-white rounded">Next</button>
                </div>
            </form>
        </div>
    );
};

export default AreYouDiabetic;