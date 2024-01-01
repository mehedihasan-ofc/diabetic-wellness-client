import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SpecificGoals = () => {
    const [hasSpecificGoals, setHasSpecificGoals] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSpecificGoalsChange = (e) => {
        setHasSpecificGoals(e.target.value);
    };

    const handleSubmit = () => {
        if (hasSpecificGoals === '') {
            setError('Please select an option.');
            return;
        }

        setError('');

        // Handle the user's choice here
        console.log('Specific Goals:', hasSpecificGoals);

        // Retrieve previous data from local storage
        const preData = JSON.parse(localStorage.getItem('userData'));

        // Update previous data with gender
        const updatedData = { ...preData, hasSpecificGoals };

        // Store updated data back to local storage
        localStorage.setItem('userData', JSON.stringify(updatedData));

        // // You can navigate based on the choice if needed
        // if (hasSpecificGoals === 'Yes') {
        //     navigate('/specific-goals-details'); // Example: Navigate to another page for specific goals details
        // } else {
        //     navigate('/next-page'); // Example: Navigate to the next page
        // }
    };

    return (
        <div className="max-w-xl mx-auto shadow-md p-10 border">
            <div className="mb-4">
                <label className="block text-gray-700 text-xl mb-2">
                    Do you have specific goals for managing your diabetes?
                </label>
                <div className="flex items-center">
                    <label className="mr-4">
                        <input
                            type="radio"
                            name="specificGoals"
                            value="Yes"
                            checked={hasSpecificGoals === 'Yes'}
                            onChange={handleSpecificGoalsChange}
                        />
                        <span className="ml-2">Yes</span>
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="specificGoals"
                            value="No"
                            checked={hasSpecificGoals === 'No'}
                            onChange={handleSpecificGoalsChange}
                        />
                        <span className="ml-2">No</span>
                    </label>
                </div>
                {error && <p className="text-red-500 mt-2">{error}</p>}
            </div>

            <div className="flex justify-between mt-10">
                <button onClick={() => navigate(-1)} className="bg-red-600 px-10 py-2 text-white rounded">
                    Prev
                </button>
                <button onClick={handleSubmit} className="bg-green-600 px-10 py-2 text-white rounded">
                    Next
                </button>
            </div>
        </div>
    );
};

export default SpecificGoals;