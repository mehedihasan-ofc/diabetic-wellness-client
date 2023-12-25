import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AnyKidneyProblems = () => {
    const [hasKidneyProblems, setHasKidneyProblems] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setHasKidneyProblems(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission with the information about kidney problems
        console.log('Kidney Problems:', hasKidneyProblems);

        // Retrieve previous data from local storage
        const preData = JSON.parse(localStorage.getItem("userData"));

        // Update previous data with kidney problems information
        const updatedData = { ...preData, hasKidneyProblems };

        // Store updated data back to local storage
        localStorage.setItem("userData", JSON.stringify(updatedData));

        // Perform any other actions here, like storing data or navigation
        if(hasKidneyProblems === "yes") {
            return navigate('/result')
        }
        else if(hasKidneyProblems === "no") {
            return navigate('/any-below-symptoms')
        }
    };

    return (
        <div className="max-w-xl mx-auto shadow-md p-10 border">
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-xl mb-2">Do you have any kidney related problems?</label>
                    <div className="flex items-center">
                        <label className="mr-4">
                            <input
                                type="radio"
                                name="kidneyProblems"
                                value="yes"
                                checked={hasKidneyProblems === 'yes'}
                                onChange={handleInputChange}
                            />
                            <span className="ml-2">Yes</span>
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="kidneyProblems"
                                value="no"
                                checked={hasKidneyProblems === 'no'}
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

export default AnyKidneyProblems;