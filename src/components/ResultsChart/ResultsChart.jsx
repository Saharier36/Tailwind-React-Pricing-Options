import React from 'react';
import { Bar, BarChart, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
const resultData = [
  {
    id: 1,
    name: "Rahim",
    bangla: 85,
    english: 78,
    gk: 90,
  },
  {
    id: 2,
    name: "Karim",
    bangla: 72,
    english: 65,
    gk: 80,
  },
  {
    id: 3,
    name: "Sumaiya",
    bangla: 91,
    english: 88,
    gk: 76,
  },
  {
    id: 4,
    name: "Nusrat",
    bangla: 60,
    english: 55,
    gk: 70,
  },
  {
    id: 5,
    name: "Farhan",
    bangla: 78,
    english: 82,
    gk: 85,
  },
  {
    id: 6,
    name: "Tasnim",
    bangla: 95,
    english: 91,
    gk: 88,
  },
  {
    id: 7,
    name: "Arif",
    bangla: 50,
    english: 48,
    gk: 62,
  },
  {
    id: 8,
    name: "Mehjabin",
    bangla: 83,
    english: 76,
    gk: 79,
  },
  {
    id: 9,
    name: "Sabbir",
    bangla: 67,
    english: 70,
    gk: 65,
  },
  {
    id: 10,
    name: "Lamia",
    bangla: 88,
    english: 85,
    gk: 92,
  },
];
const ResultsChart = () => {
    return (
      <div className="my-10">
        <LineChart width={800} height={300} data={resultData}>
          <XAxis dataKey="name"></XAxis>
          <YAxis></YAxis>
          <Tooltip></Tooltip>
          <Line dataKey={"bangla"} stroke="red"></Line>
          <Line dataKey={"english"} stroke="green"></Line>
          <Line dataKey={"gk"} stroke="skyblue"></Line>
        </LineChart>
        <BarChart width={800} height={300} data={resultData}>
          <XAxis dataKey="name"></XAxis>
          <YAxis></YAxis>
          <Tooltip></Tooltip>
          <Bar
            dataKey={"bangla"}
             fill="pink"
          ></Bar>
          <Bar
            dataKey={"english"}
            fill="lightgreen"
          ></Bar>
          <Bar
            dataKey={"gk"}
            fill="gold"
          ></Bar>
        </BarChart>
      </div>
    );
};

export default ResultsChart;