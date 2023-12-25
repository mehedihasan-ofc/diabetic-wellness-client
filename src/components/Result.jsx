import React, { useEffect, useState } from 'react';

const Result = () => {
    const [data, setData] = useState({});
    const [userResult, setUserResult] = useState('');

    // Load data from local storage
    useEffect(() => {
        const storedData = localStorage.getItem('userData');
        if (storedData) {
            setData(JSON.parse(storedData));
            localStorage.removeItem("userData")
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
        } else {
            setUserResult('');
        }
    }, [data]);

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