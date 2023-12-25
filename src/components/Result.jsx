import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Result = () => {
    const [data, setData] = useState({});
    const [userResult, setUserResult] = useState('');
    const navigate = useNavigate();

    // Load data from local storage
    useEffect(() => {
        const storedData = localStorage.getItem('userData');
        if (storedData) {
            setData(JSON.parse(storedData));
        }
    }, []);

    useEffect(() => {
        if (
            data?.name &&
            data?.gender &&
            data?.isDiabetic === 'no' &&
            data?.symptoms?.none === true &&
            data?.haveYou?.none === true &&
            parseFloat(data?.sugarLevel) < 4
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
            parseFloat(data?.sugarLevel) < 4
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
            parseFloat(data?.sugarLevel) < 12.6
        ) {
            setUserResult("Pre diabetics");
        }
        else if (
            data?.name &&
            data?.gender &&
            data?.isDiabetic === 'yes' &&
            parseFloat(data?.sugarLevel) >= 10 &&
            parseFloat(data?.sugarLevel) < 12.5
        ) {
            setUserResult("Pre diabetics");
        }
        else {
            setUserResult('');
        }
    }, [data, navigate]);

    return (
        <div>
            <div className="overflow-x-auto my-10">
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
                            <td className="border p-3 text-center">{data?.gender}</td>
                            <td className="border p-3 text-center text-xs">{userResult}</td>
                        </tr>
                        {/* Add more rows here if needed */}
                    </tbody>
                </table>
            </div>

            <div className='text-center'>
                <button onClick={() => navigate('/')} className="bg-green-600 px-10 py-2 text-white rounded">Check Again</button>
            </div>
        </div>
    );
};

export default Result;