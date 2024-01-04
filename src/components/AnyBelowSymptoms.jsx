import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AnyBelowSymptoms = () => {
    const [bellowSymptoms, setBellowSymptoms] = useState({
        weightLoss: false,
        swollenAnkles: false,
        shortnessOfBreath: false,
        tiredness: false,
        bloodInUrine: false,
        increasedPee: false,
        difficultySleeping: false,
        itchySkin: false,
        none: false
    });

    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name } = e.target;
        setBellowSymptoms({ ...bellowSymptoms, [name]: !bellowSymptoms[name] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Checking if at least one symptom is selected
        const selectedSymptoms = Object.values(bellowSymptoms);
        if (!selectedSymptoms.includes(true)) {
            setError('Please select at least one symptom.');
            return;
        }

        setError('');

        // Retrieve previous data from local storage
        const preData = JSON.parse(localStorage.getItem('userData'));

        // Update previous data with symptom information
        const updatedData = { ...preData, bellowSymptoms };

        // Store updated data back to local storage
        localStorage.setItem('userData', JSON.stringify(updatedData));

        // Perform any other actions here, like storing data or navigation
        if(bellowSymptoms?.none === false) {
            return navigate('/result')
        }
        else if (bellowSymptoms?.none === true) {
            return navigate('/result')
        }
    };

    return (
        <div className="max-w-xl mx-auto shadow-md p-10 border">
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-xl mb-2">Is there any below symptoms?</label>
                    <div>
                        <label className="flex items-center mb-2">
                            <input
                                type="checkbox"
                                name="weightLoss"
                                checked={bellowSymptoms.weightLoss}
                                onChange={handleInputChange}
                            />
                            <span className="ml-2">Weight loss and poor appetite</span>
                        </label>
                        <label className="flex items-center mb-2">
                            <input
                                type="checkbox"
                                name="swollenAnkles"
                                checked={bellowSymptoms.swollenAnkles}
                                onChange={handleInputChange}
                            />
                            <span className="ml-2">Swollen ankles, feet, or hands</span>
                        </label>
                        <label className="flex items-center mb-2">
                            <input
                                type="checkbox"
                                name="shortnessOfBreath"
                                checked={bellowSymptoms.shortnessOfBreath}
                                onChange={handleInputChange}
                            />
                            <span className="ml-2">Shortness of breath</span>
                        </label>
                        <label className="flex items-center mb-2">
                            <input
                                type="checkbox"
                                name="tiredness"
                                checked={bellowSymptoms.tiredness}
                                onChange={handleInputChange}
                            />
                            <span className="ml-2">Tiredness</span>
                        </label>
                        <label className="flex items-center mb-2">
                            <input
                                type="checkbox"
                                name="bloodInUrine"
                                checked={bellowSymptoms.bloodInUrine}
                                onChange={handleInputChange}
                            />
                            <span className="ml-2">Blood in urine</span>
                        </label>
                        <label className="flex items-center mb-2">
                            <input
                                type="checkbox"
                                name="increasedPee"
                                checked={bellowSymptoms.increasedPee}
                                onChange={handleInputChange}
                            />
                            <span className="ml-2">Increased need to pee</span>
                        </label>
                        <label className="flex items-center mb-2">
                            <input
                                type="checkbox"
                                name="difficultySleeping"
                                checked={bellowSymptoms.difficultySleeping}
                                onChange={handleInputChange}
                            />
                            <span className="ml-2">Difficulty sleeping</span>
                        </label>
                        <label className="flex items-center mb-2">
                            <input
                                type="checkbox"
                                name="itchySkin"
                                checked={bellowSymptoms.itchySkin}
                                onChange={handleInputChange}
                            />
                            <span className="ml-2">Itchy skin</span>
                        </label>
                        <label className="flex items-center mb-2">
                            <input
                                type="checkbox"
                                name="none"
                                checked={bellowSymptoms.none}
                                onChange={handleInputChange}
                            />
                            <span className="ml-2">None</span>
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

export default AnyBelowSymptoms;
