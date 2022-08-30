import React from 'react';
import { Bar, BarChart, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {

    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ];

    return (
        <div>
            <h2 className='text-center my-2 text-info fw-bold '>Line Chart</h2>
            <LineChart width={800} height={500} data={data} >
                <Line dataKey={'investment'}></Line>
                <Line dataKey={'revenue'}></Line>
                <XAxis dataKey={'month'}></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
            </LineChart>
            <h2 className='text-center my-2 text-info fw-bold '>Bar Chart</h2>
            <BarChart width={800} height={500} data={data} >
                <Bar dataKey="investment" ></Bar>
                <Bar dataKey={"revenue"}></Bar>
                <XAxis dataKey={"month"}></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
            </BarChart>

        </div>
    );
};

export default Dashboard;