import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoMdDownload } from "react-icons/io";
import { usePDF } from 'react-to-pdf';

const Result = () => {
    const [data, setData] = useState({});
    const [userResult, setUserResult] = useState('');
    const navigate = useNavigate();

    // Inside your useEffect where you're updating the data
    useEffect(() => {
        const storedData = localStorage.getItem('userData');
        if (storedData) {
            setData(JSON.parse(storedData));

            const postUserData = async () => {
                try {
                    const updatedData = { ...JSON.parse(storedData), result: userResult };

                    const response = await fetch('https://diabetic-wellness-server.vercel.app/users', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(updatedData),
                    });

                    if (response.insertedId) {
                        console.log('Data posted successfully');
                    }

                } catch (error) {
                    console.error('Error posting data:', error);
                }
            };

            postUserData();
        }
    }, [userResult]);

    useEffect(() => {
        if (
            data?.name &&
            data?.gender &&
            data?.isDiabetic === 'no' &&
            data?.symptoms?.none === true &&
            data?.haveYou?.none === true &&
            parseFloat(data?.sugarLevel) <= 4
        ) {
            setUserResult('You Have low sugar level & possible of Hypoglycemia');
        }
        else if (
            data?.name &&
            data?.gender &&
            data?.isDiabetic === 'no' &&
            data?.symptoms?.none === true &&
            data?.haveYou?.none === true &&
            parseFloat(data?.sugarLevel) > 4 &&
            parseFloat(data?.sugarLevel) < 10
        ) {
            setUserResult('You are non diabetic');
        }
        else if (
            data?.name &&
            data?.gender &&
            data?.isDiabetic === 'no' &&
            data?.symptoms?.none === true &&
            data?.haveYou?.none === false &&
            parseFloat(data?.sugarLevel) <= 4
        ) {
            setUserResult('You have Hypoglycemia');
        }
        else if (
            data?.name &&
            data?.gender &&
            data?.isDiabetic === 'no' &&
            data?.symptoms?.none === true &&
            data?.haveYou?.none === false
        ) {
            if (
                data?.hasHeartIssues === "yes" &&
                parseFloat(data?.sugarLevel) > 4 &&
                parseFloat(data?.sugarLevel) < 10
            ) {
                setUserResult("Need health checkup & consulting medicine doctor");
            }
            else if (
                data?.hasHeartIssues === "no" &&
                parseFloat(data?.sugarLevel) > 4 &&
                parseFloat(data?.sugarLevel) < 10
            ) {
                setUserResult("Need health cheakup & consulting medicine doctor");
            }

            else {
                setUserResult('');
                navigate('/any-heart-issues');
            }
        }
        else if (
            data?.name &&
            data?.gender &&
            data?.isDiabetic === 'no' &&
            data?.symptoms?.none === false &&
            parseFloat(data?.sugarLevel) < 10
        ) {
            if (data?.hasKidneyProblems === "yes") {
                setUserResult("You are non diabetic & have kidney issue consulting doctor as soon as possible");
            }
            else if (
                data?.hasKidneyProblems === "no",
                data?.bellowSymptoms?.none === false
            ) {
                setUserResult("You are non diabetic & have kidney issue consulting doctor as soon as possible");
            }
            else if (
                data?.hasKidneyProblems === "no",
                data?.bellowSymptoms?.none === true
            ) {
                setUserResult("non d & medicine doctor");
            }
            else {
                setUserResult('');
                navigate('/any-kidney-problems')
            }
        }
        else if (
            data?.name &&
            data?.gender &&
            data?.isDiabetic === 'no' &&
            data?.symptoms?.none === false &&
            parseFloat(data?.sugarLevel) >= 10 &&
            parseFloat(data?.sugarLevel) <= 12.6
        ) {
            setUserResult("Pre diabetics");
        }
        else if (
            data?.name &&
            data?.gender &&
            data?.isDiabetic === 'yes' &&
            parseFloat(data?.sugarLevel) >= 10 &&
            parseFloat(data?.sugarLevel) <= 12.5
        ) {
            setUserResult("Pre diabetics");
        }
        else {
            setUserResult('');
        }
    }, [data, navigate]);

    const { toPDF, targetRef } = usePDF({ filename: 'result.pdf' });

    return (
        <div>
            <div className='my-5 shadow-md'>

                <div ref={targetRef} className="overflow-x-auto">
                    <table className="table-auto w-full border-collapse border">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="border p-3">Name</th>
                                <th className="border p-3">Age</th>
                                <th className="border p-3">Gender</th>
                                <th className="border p-3">Result</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white">
                                <td className="border p-3 text-center">{data?.name}</td>
                                <td className="border p-3 text-center">{data?.age}</td>
                                <td className="border p-3 text-center capitalize">{data?.gender}</td>
                                <td className="border p-3 text-center text-xs">{userResult}</td>
                            </tr>
                        </tbody>
                    </table>

                    {
                        userResult === "You Have low sugar level & possible of Hypoglycemia" && <div className='m-5 border p-5'>

                            <div className='mb-5'>
                                <p className='font-medium'>You may need to adjust your diet to keep gestational diabetes under control.</p>

                                <ul className='mt-3 space-y-1'>
                                    <li>→ Try to avoid junk food, processed foods and sugary drinks.</li>
                                    <li>→ Choose a healthy balance of proteins, carbohydrates, fiber and fat.</li>
                                    <li>→ Eat smaller meals more often.</li>
                                    <li>→ Schedule your meals at the same time each day.</li>
                                </ul>
                            </div>

                            <div>
                                <p className='font-medium'>Make diabetes management part of your daily routine.</p>

                                <ul className='mt-3 space-y-1'>
                                    <li>→ Check your blood glucose levels at the same time each day</li>
                                    <li>→ Choose three days each week to get 30 minutes of light exercise.</li>
                                    <li>→ Talk with your healthcare provider or a diabetes educator about other tips for dailydiabetes management.</li>
                                </ul>
                            </div>

                        </div>
                    }

                    {
                        userResult === "You are non diabetic" && <div className='m-5 border p-5'>
                            <p>Still you feel weak or face any health issues better to consult a Medicine doctor</p>
                        </div>
                    }

                    {
                        userResult === "Pre diabetics" && <div className='m-5 border p-5'>
                            <div className='mb-5'>
                                <p className='font-medium'>Take these steps to treat prediabetes:</p>

                                <ul className='mt-3 space-y-1 text-sm'>
                                    <li>→ Follow a healthy</li>
                                    <li>→ Do exercise. Pick something you enjoy, like walking. Try to get at least 30 minutes a day</li>
                                    <li>→ keep your blood pressure and cholesterol under control.</li>
                                    <li>→ Take medication like metformin (Glucophage) to lower your blood sugar if you’re at high risk of diabetes. Prediabetes Prevention</li>
                                    <li>→ Exercising and eating foods low in carbohydrates, sugars, fats, and salt can also help prevent prediabetes.</li>
                                    <li>⇒ Before take blood pressure medicine masure it properly.</li>
                                    <li>⇒ Test your sugar level 2 time in a month.</li>
                                    <li>⇒ Maintain food chart.</li>
                                    <li>⇒ Doctor consulting must.</li>
                                    <li>⇒ Drink more water</li>
                                    <li>⇒ Take medicine properly and try to lead a healthy life.</li>
                                    <li>⇒ Becareful about health and other health related problems</li>
                                </ul>

                                <p className='font-medium mt-5'>⇰ Medicine can be change according to your doctor and your other problem so consulting doctor is must.</p>
                            </div>
                        </div>
                    }
                </div>

                <div className='flex justify-end items-center p-5'>
                    <button onClick={() => toPDF()} className='flex justify-between items-center px-10 py-3 border gap-2'>Download Report <IoMdDownload className='text-2xl' /></button>
                </div>
            </div>

            <div className='text-center'>
                <button onClick={() => navigate('/')} className="bg-green-600 px-10 py-2 text-white rounded">Check Again</button>
            </div>
        </div>
    );
};

export default Result;