import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SugarLevelsFluctuate = () => {
    const [fluctuate, setFluctuate] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); // State to track sugar level fluctuations

    const handleFluctuationChange = (e) => {
        setFluctuate(e.target.value); // Update sugar level fluctuation status based on radio button value
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (fluctuate === '') {
            setError('Please select an option.'); // Display an error message if no option is selected
            return;
        }

        // Clear any previous error messages
        setError('');

        // Pass the fluctuation status to the parent component for further processing

        // Retrieve previous data from local storage
        const preData = JSON.parse(localStorage.getItem('userData'));

        // Update previous data with gender
        const updatedData = { ...preData, fluctuate };

        // Store updated data back to local storage
        localStorage.setItem('userData', JSON.stringify(updatedData));

        // Perform any other actions here, like storing data or navigation
        if (fluctuate === 'yes') {
            return navigate('/specific-goals');
        }
        else {
            return navigate('/high-blood-pressure')
        }
    };

    return (
        <div className="max-w-xl mx-auto shadow-md p-10 border">
            <div className="mb-4">
                <label className="block text-gray-700 text-xl mb-2">Do sugar levels fluctuate?</label>
                <div className="flex items-center">
                    <label className="mr-4">
                        <input
                            type="radio"
                            name="fluctuate"
                            value="yes"
                            checked={fluctuate === 'yes'}
                            onChange={handleFluctuationChange}
                        />
                        <span className="ml-2">Yes</span>
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="fluctuate"
                            value="no"
                            checked={fluctuate === 'no'}
                            onChange={handleFluctuationChange}
                        />
                        <span className="ml-2">No</span>
                    </label>
                </div>
                {error && <p className="text-red-500 mt-2">{error}</p>} {/* Display error message */}
            </div>

            <div className='flex justify-between mt-10'>
                <button onClick={() => navigate(-1)} className="bg-red-600 px-10 py-2 text-white rounded">Prev</button>
                <button type="submit" onClick={handleSubmit} className="bg-green-600 px-10 py-2 text-white rounded">Next</button>
            </div>
        </div>
    );
};

export default SugarLevelsFluctuate;