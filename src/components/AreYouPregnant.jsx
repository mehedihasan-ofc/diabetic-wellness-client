import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AreYouPregnant = () => {
    const [isPregnant, setIsPregnant] = useState(''); // State to track pregnancy status
    const [error, setError] = useState(''); // State to handle errors
    const navigate = useNavigate();

    const handlePregnancyChange = (e) => {
        setIsPregnant(e.target.value); // Update pregnancy status based on radio button value
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isPregnant === '') {
            setError('Please select an option.'); // Display an error message if no option is selected
            return;
        }

        // Clear any previous error messages
        setError('');

        // Handle form submission with pregnancy status
        console.log("Are you Pregnant?", isPregnant);

        // Retrieve previous data from local storage
        const preData = JSON.parse(localStorage.getItem("userData"));

        // Update previous data with gender
        const updatedData = { ...preData, isPregnant };

        // Store updated data back to local storage
        localStorage.setItem("userData", JSON.stringify(updatedData));

        // Perform any other actions here, like storing data or navigation
        if (isPregnant === "yes") {
            return navigate('/ask-more')
        }
        else {
            return navigate('/are-you-diabetic')
        }
    };

    return (
        <div className="max-w-xl mx-auto shadow-md p-10 border">
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-xl mb-2">Are you Pregnant?</label>
                    <div className="flex items-center">
                        <label className="mr-4">
                            <input
                                type="radio"
                                name="pregnant"
                                value="yes"
                                checked={isPregnant === "yes"}
                                onChange={handlePregnancyChange}
                            />
                            <span className="ml-2">Yes</span>
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="pregnant"
                                value="no"
                                checked={isPregnant === "no"}
                                onChange={handlePregnancyChange}
                            />
                            <span className="ml-2">No</span>
                        </label>
                    </div>
                    {error && <p className="text-red-500 mt-2">{error}</p>}
                </div>

                <div className='flex justify-between mt-10'>
                    <button onClick={() => navigate(-1)} className="bg-red-600 px-10 py-2 text-white rounded">Prev</button>
                    <button type="submit" className="bg-green-600 px-10 py-2 text-white rounded">Next</button>
                </div>
            </form>
        </div>
    );
};

export default AreYouPregnant;