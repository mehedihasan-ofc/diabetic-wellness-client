import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const YourSugarLevel = () => {
    const [sugarLevel, setSugarLevel] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setError('');
        setSugarLevel(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (sugarLevel === '') {
            setError('Please enter your sugar level.');
            return;
        }

        setError('');

        // Retrieve previous data from local storage
        const preData = JSON.parse(localStorage.getItem("userData"));

        // Update previous data with gender
        const updatedData = { ...preData, sugarLevel };

        // Store updated data back to local storage
        localStorage.setItem("userData", JSON.stringify(updatedData));

        // Perform other actions here, like storing data or navigation
        if (sugarLevel <= 4) {
            return navigate('/result')
        }
        else if(sugarLevel > 4 && sugarLevel < 10) {
            return navigate('/result')
        }
        else if (sugarLevel >=10 && sugarLevel < 12.6) {
            return navigate('/result')
        }
        else if (sugarLevel > 12.5) {
            return navigate('/sugar-levels-fluctuate')
        }
        else {
            return navigate('/')
        }
    };

    return (
        <div className="max-w-xl mx-auto shadow-md p-10 border">
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="sugarLevelInput" className="block text-xl text-gray-700 mb-2">Your sugar level? (empty stomach) in mmol/L</label>
                    <input
                        type="number"
                        id="sugarLevelInput"
                        value={sugarLevel}
                        onChange={handleInputChange}
                        placeholder='Enter sugar level'
                        className="w-full px-4 py-2 border rounded outline-none"
                    />
                    {error && <p className="text-red-500 mt-2">{error}</p>}
                </div>

                <div className='flex justify-between mt-10'>
                    <button onClick={() => navigate(-1)} className="bg-red-600 px-10 py-2 text-white rounded">Prev</button>
                    <button type="submit" className="bg-green-600 px-10 py-2 text-white rounded" disabled={error}>Next</button>
                </div>
            </form>
        </div>
    );
};

export default YourSugarLevel;
