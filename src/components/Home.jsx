import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate();

    useEffect(() => {
        localStorage.removeItem("userData");
    }, [])

    return (
        <section className="lg:w-9/12 md:w-[90%] w-[95%] mx-auto text-center">
            <h1 className="text-center my-8 text-xl">WELCOME TO DIABETIC WELLNESS</h1>
            <div className="lg:w-[80%] md:w-[90%] w-[90%] mx-auto text-left">
                <p className="text-xs italic mt-1 mb-4 text-orange-800 text-center">
                    Please read all the steps before start.
                </p>
                <ul className="text-sm my-10">
                    <li className="my-5">
                        <span className="bg-orange-200 px-2 rounded">1. Confidentiality:</span> Your information is private and secure.
                    </li>
                    <li className="my-5">
                        <span className="bg-orange-200 px-2 rounded">2. Non-Discriminatory:</span> No judgment based on health or gender.
                    </li>
                    <li className="my-5">
                        <span className="bg-orange-200 px-2 rounded">3. Purpose Clarity:</span> Quiz aims to inform, not replace medical advice.
                        questions.
                    </li>
                    <li className="my-5">
                        <span className="bg-orange-200 px-2 rounded">4. Optional Participation:</span> Answer as comfortable; participation is voluntary.
                    </li>
                </ul>
            </div>
            <button onClick={() => navigate('/intro')} className="bg-green-600 px-20 py-2 text-white rounded">
                Check Diabetes
            </button>
        </section>
    );
};

export default Home;