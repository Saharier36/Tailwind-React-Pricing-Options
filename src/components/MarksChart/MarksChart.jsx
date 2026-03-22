import React from 'react';
import { use } from 'react';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';

const MarksChart = ({ marksPromise }) => {
    const marksDataRes = use(marksPromise);
    const marksData = marksDataRes.data
    const marksChartData = marksData.map(studentData =>{
        const student = {
            id: studentData.id,
            name: studentData.name,
            bangla: studentData.marks.bangla,
            english: studentData.marks.english,
            gk: studentData.marks.gk
        }
        const avg = (student.bangla + student.english + student.gk)/3;
        student.avg = avg.toFixed(3)
        return student
    })
    console.log(marksChartData);
  return (
    <div>
      <BarChart width={1000} height={300} data={marksChartData}>
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
        <Tooltip></Tooltip>
        <Bar dataKey={"avg"} fill="indigo"></Bar>
        <Bar dataKey={"bangla"} fill="salmon"></Bar>
        <Bar dataKey={"english"} fill="teal"></Bar>
        <Bar dataKey={"gk"} fill="maroon"></Bar>
      </BarChart>
    </div>
  );
};

export default MarksChart;