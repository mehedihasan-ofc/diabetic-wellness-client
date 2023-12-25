import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Gender = () => {
    const [gender, setGender] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleGenderChange = (e) => {
        setGender(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (gender === '') {
            setError('Please select a gender.');
            return;
        }

        // Clear any previous error messages
        setError('');

        // Handle form submission with gender value
        console.log("Selected Gender:", gender);

        // Retrieve previous data from local storage
        const preData = JSON.parse(localStorage.getItem("userData"));

        // Update previous data with gender
        const updatedData = { ...preData, gender };

        // Store updated data back to local storage
        localStorage.setItem("userData", JSON.stringify(updatedData));

        // Perform any other actions here, like storing data or navigation
        if (gender === "female") {
            return navigate('/are-you-pregnent')
        }
        else {
            return navigate('/are-you-diabetic')
        }
    };

    return (
        <div className="max-w-xl mx-auto shadow-md p-10 border">
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-xl mb-3">Select Gender:</label>
                    <div className="flex items-center">
                        <label className="mr-4">
                            <input
                                type="radio"
                                name="gender"
                                value="male"
                                checked={gender === "male"}
                                onChange={handleGenderChange}
                            />
                            <span className="ml-2">Male</span>
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="gender"
                                value="female"
                                checked={gender === "female"}
                                onChange={handleGenderChange}
                            />
                            <span className="ml-2">Female</span>
                        </label>
                        {/* You can add more gender options as needed */}
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

export default Gender;