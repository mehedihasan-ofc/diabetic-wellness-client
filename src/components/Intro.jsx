import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Intro = () => {
    const [formData, setFormData] = useState({ name: '', age: '' });
    const [error, setError] = useState("");
    const navigate = useNavigate();

    // Load data from local storage on component mount
    useEffect(() => {
        const storedData = localStorage.getItem('userData');
        if (storedData) {
            setFormData(JSON.parse(storedData));
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.name.trim() === '') {
            setError("Please fill Name input")
            return;
        }

        if (formData.age.trim() === '') {
            setError("Please fill Age input")
            return;
        }
        
        console.log(formData);

        // Save data to local storage
        localStorage.setItem('userData', JSON.stringify(formData));

        // Navigate to the next page
        navigate('/gender');
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div className="max-w-md mx-auto shadow-md p-10 border">
            {error && <p className='text-red-500 my-5'>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="nameInput" className="block text-gray-700 mb-1">What's your name?</label>
                    <input
                        type="text"
                        id="nameInput"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder='Enter your name'
                        className="w-full px-4 py-2 border rounded outline-none"
                    />
                </div>
                <div className="mb-8">
                    <label htmlFor="ageInput" className="block text-gray-700 mb-1">What is your age?</label>
                    <input
                        type="number"
                        id="ageInput"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        placeholder='Your age here'
                        className="w-full px-4 py-2 border rounded outline-none"
                    />
                </div>
                <div className='text-end'>
                    <button type="submit" className="bg-green-600 px-10 py-2 text-white rounded">Next</button>
                </div>
            </form>
        </div>
    );
};

export default Intro;