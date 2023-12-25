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
            setUserResult("You are non diabetic & have kidney issue consulting doctor as soon as possible");
        }
        else {
            setUserResult('');
        }
    }, [data, navigate]);

    return (
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
    );
};

export default Result;