import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AnySymptoms = () => {
    const [symptoms, setSymptoms] = useState({
        urinateALot: false,
        veryThirsty: false,
        loseWeight: false,
        veryHungry: false,
        blurryVision: false,
        numbTingling: false,
        veryTired: false,
        drySkin: false,
        none: false
    });

    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSymptomsChange = (e) => {
        const { name, checked } = e.target;
        setSymptoms({
            ...symptoms,
            [name]: checked
        });

        // If "none" is checked, uncheck other symptoms
        // if (name === 'none' && checked) {
        //     const updatedSymptoms = { ...symptoms };
        //     for (let key in updatedSymptoms) {
        //         if (key !== 'none') updatedSymptoms[key] = false;
        //     }
        //     setSymptoms(updatedSymptoms);
        // }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const selectedSymptoms = Object.values(symptoms).some(symptom => symptom);

        if (!selectedSymptoms) {
            setError('Please select at least one symptom.');
            return;
        }

        setError('');

        console.log("Selected Symptoms:", symptoms);

        // Retrieve previous data from local storage
        const preData = JSON.parse(localStorage.getItem("userData"));

        // Update previous data with gender
        const updatedData = { ...preData, symptoms };

        // Store updated data back to local storage
        localStorage.setItem("userData", JSON.stringify(updatedData));

        // Perform any other actions here, like storing data or navigation
        if (symptoms.none === true) {
            return navigate('/have-you')
        }
        else if (symptoms.none === false) {
            return navigate('/your-sugar-level')
        }
        else {
            return navigate('/')
        }
    };

    return (
        <div className="max-w-md mx-auto shadow-md p-10 border">
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-1">Have you any symptoms from this?</label>
                    <div>
                        <label className="flex items-center mb-2">
                            <input
                                type="checkbox"
                                name="urinateALot"
                                checked={symptoms.urinateALot}
                                onChange={handleSymptomsChange}
                            />
                            <span className="ml-2">Urinate (pee) a lot, often at night.</span>
                        </label>
                        <label className="flex items-center mb-2">
                            <input
                                type="checkbox"
                                name="veryThirsty"
                                checked={symptoms.veryThirsty}
                                onChange={handleSymptomsChange}
                            />
                            <span className="ml-2">Are very thirsty.</span>
                        </label>
                        <label className="flex items-center mb-2">
                            <input
                                type="checkbox"
                                name="loseWeight"
                                checked={symptoms.loseWeight}
                                onChange={handleSymptomsChange}
                            />
                            <span className="ml-2">Lose weight without trying.</span>
                        </label>
                        <label className="flex items-center mb-2">
                            <input
                                type="checkbox"
                                name="veryHungry"
                                checked={symptoms.veryHungry}
                                onChange={handleSymptomsChange}
                            />
                            <span className="ml-2">Are very hungry.</span>
                        </label>
                        <label className="flex items-center mb-2">
                            <input
                                type="checkbox"
                                name="blurryVision"
                                checked={symptoms.blurryVision}
                                onChange={handleSymptomsChange}
                            />
                            <span className="ml-2">Have a blurry vision.</span>
                        </label>
                        <label className="flex items-center mb-2">
                            <input
                                type="checkbox"
                                name="numbTingling"
                                checked={symptoms.numbTingling}
                                onChange={handleSymptomsChange}
                            />
                            <span className="ml-2">Have numb or tingling hands or feet.</span>
                        </label>
                        <label className="flex items-center mb-2">
                            <input
                                type="checkbox"
                                name="veryTired"
                                checked={symptoms.veryTired}
                                onChange={handleSymptomsChange}
                            />
                            <span className="ml-2">Feel very tired.</span>
                        </label>
                        <label className="flex items-center mb-2">
                            <input
                                type="checkbox"
                                name="drySkin"
                                checked={symptoms.drySkin}
                                onChange={handleSymptomsChange}
                            />
                            <span className="ml-2">Have very dry skin.</span>
                        </label>
                        <label className="flex items-center mb-2">
                            <input
                                type="checkbox"
                                name="none"
                                checked={symptoms.none}
                                onChange={handleSymptomsChange}
                            />
                            <span className="ml-2">None</span>
                        </label>
                    </div>
                    {error && <p className="text-red-500 mt-2">{error}</p>}
                </div>

                <div className='flex justify-between mt-5'>
                    <button onClick={() => navigate(-1)} className="bg-red-600 px-10 py-2 text-white rounded">Prev</button>
                    <button type="submit" className="bg-green-600 px-10 py-2 text-white rounded">Next</button>
                </div>
            </form>
        </div>
    );
};

export default AnySymptoms;