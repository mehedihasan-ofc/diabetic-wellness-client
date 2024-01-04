import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MedicationsForDiabetes = () => {
    const [medications, setMedications] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleMedicationsChange = (e) => {
        setMedications(e.target.value);
    };

    const handleSubmit = () => {
        if (medications === '') {
            setError('Please select an option.');
            return;
        }

        setError('');

        // Retrieve previous data from local storage
        const preData = JSON.parse(localStorage.getItem('userData'));

        // Update previous data with gender
        const updatedData = { ...preData, medications };

        // Store updated data back to local storage
        localStorage.setItem('userData', JSON.stringify(updatedData));

        // Navigate based on the choice if needed
        if (medications === 'yes') {
            navigate('/you-are-a-diabetic-patient'); // Example: Navigate to another page for medications details
        } else {
            navigate('/you-are-a-diabetic-patient'); // Example: Navigate to the next page
        }
    };

    return (
        <div className="max-w-xl mx-auto shadow-md p-10 border">
            <div className="mb-4">
                <label className="block text-gray-700 text-xl mb-2">
                    Are you currently taking medications for diabetes?
                </label>
                <div className="flex items-center">
                    <label className="mr-4">
                        <input
                            type="radio"
                            name="medicationsForDiabetes"
                            value="yes"
                            checked={medications === 'yes'}
                            onChange={handleMedicationsChange}
                        />
                        <span className="ml-2">Yes</span>
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="medicationsForDiabetes"
                            value="no"
                            checked={medications === 'no'}
                            onChange={handleMedicationsChange}
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

export default MedicationsForDiabetes;