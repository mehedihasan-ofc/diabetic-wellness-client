import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AnyHeartIssues = () => {
    const [hasHeartIssues, setHasHeartIssues] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setHasHeartIssues(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Retrieve previous data from local storage
        const preData = JSON.parse(localStorage.getItem("userData"));

        // Update previous data with gender
        const updatedData = { ...preData, hasHeartIssues };

        // Store updated data back to local storage
        localStorage.setItem("userData", JSON.stringify(updatedData));

        // Perform any other actions here, like storing data or navigation
        if (hasHeartIssues === "yes") {
            return navigate('/result')
        }
        else if (hasHeartIssues === "no") {
            return navigate('/result')
        }
    };

    return (
        <div className="max-w-xl mx-auto shadow-md p-10 border">
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Have you had any heart issues or heart-related past issues?</label>
                    <div className="flex items-center">
                        <label className="mr-4">
                            <input
                                type="radio"
                                name="heartIssues"
                                value="yes"
                                checked={hasHeartIssues === 'yes'}
                                onChange={handleInputChange}
                            />
                            <span className="ml-2">Yes</span>
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="heartIssues"
                                value="no"
                                checked={hasHeartIssues === 'no'}
                                onChange={handleInputChange}
                            />
                            <span className="ml-2">No</span>
                        </label>
                    </div>
                </div>

                <div className='flex justify-between mt-10'>
                    <button onClick={() => navigate(-1)} className="bg-red-600 px-10 py-2 text-white rounded">Prev</button>
                    <button type="submit" className="bg-green-600 px-10 py-2 text-white rounded">Next</button>
                </div>
            </form>
        </div>
    );
};

export default AnyHeartIssues;