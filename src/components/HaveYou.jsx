import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HaveYou = () => {
    const [haveYou, sethaveYou] = useState({
        fastHeartbeat: false,
        shakingSweating: false,
        nervousnessOrAnxiety: false,
        irritabilityOrConfusion: false,
        dizziness: false,
        none: false
    });

    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSymptomChange = (e) => {
        setError('');
        const { name, checked } = e.target;
        sethaveYou({ ...haveYou, [name]: checked });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const selectedhaveYou = Object.values(haveYou);
        if (!selectedhaveYou.includes(true)) {
            setError('Please select at least one symptom.');
            return;
        }

        setError('');
        console.log('Selected haveYou:', haveYou);

        // Retrieve previous data from local storage
        const preData = JSON.parse(localStorage.getItem("userData"));

        // Update previous data with gender
        const updatedData = { ...preData, haveYou };

        // Store updated data back to local storage
        localStorage.setItem("userData", JSON.stringify(updatedData));

        // Perform other actions here, like storing data or navigation
        if (haveYou.none === true) {
            return navigate('/your-sugar-level')
        }
        else if (haveYou.none === false) {
            return navigate('/your-sugar-level')
        }
        else {
            return navigate('/')
        }
    };

    return (
        <div className="max-w-xl mx-auto shadow-md p-10 border">
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-xl mb-4">Have you?</label>
                    <div>
                        <label className="flex items-center mb-2">
                            <input
                                type="checkbox"
                                name="fastHeartbeat"
                                checked={haveYou.fastHeartbeat}
                                onChange={handleSymptomChange}
                            />
                            <span className="ml-2">Fast heartbeat.</span>
                        </label>
                        <label className="flex items-center mb-2">
                            <input
                                type="checkbox"
                                name="shakingSweating"
                                checked={haveYou.shakingSweating}
                                onChange={handleSymptomChange}
                            />
                            <span className="ml-2">Shaking / Sweating.</span>
                        </label>
                        <label className="flex items-center mb-2">
                            <input
                                type="checkbox"
                                name="nervousnessOrAnxiety"
                                checked={haveYou.nervousnessOrAnxiety}
                                onChange={handleSymptomChange}
                            />
                            <span className="ml-2">Nervousness or anxiety.</span>
                        </label>
                        <label className="flex items-center mb-2">
                            <input
                                type="checkbox"
                                name="irritabilityOrConfusion"
                                checked={haveYou.irritabilityOrConfusion}
                                onChange={handleSymptomChange}
                            />
                            <span className="ml-2">Irritability or confusion.</span>
                        </label>
                        <label className="flex items-center mb-2">
                            <input
                                type="checkbox"
                                name="dizziness"
                                checked={haveYou.dizziness}
                                onChange={handleSymptomChange}
                            />
                            <span className="ml-2">Dizziness.</span>
                        </label>
                        <label className="flex items-center mb-2">
                            <input
                                type="checkbox"
                                name="none"
                                checked={haveYou.none}
                                onChange={handleSymptomChange}
                            />
                            <span className="ml-2">None</span>
                        </label>
                    </div>
                    {error && <p className="text-red-500 mt-2">{error}</p>}
                </div>

                <div className='flex justify-between mt-6'>
                    <button onClick={() => navigate(-1)} className="bg-red-600 px-10 py-2 text-white rounded">Prev</button>
                    <button type="submit" className="bg-green-600 px-10 py-2 text-white rounded" disabled={error}>Next</button>
                </div>
            </form>
        </div>
    );
};

export default HaveYou;