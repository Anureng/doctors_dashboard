// // src/DoubleBarGraph.js
// import React from 'react';
// import { Bar } from 'react-chartjs-2';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js';

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const DoubleBarGraph = () => {
//   const data = {
//     labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
//     datasets: [
//       {
//         label: 'Male',
//         data: [12, 19, 3, 5, 2, 3, 7],
//         backgroundColor: 'rgba(54, 162, 235, 0.5)',
//         borderColor: 'rgba(54, 162, 235, 1)',
//         borderWidth: 1,
//       },
//       {
//         label: 'Female',
//         data: [7, 11, 5, 8, 3, 7, 2],
//         backgroundColor: 'rgba(255, 99, 132, 0.5)',
//         borderColor: 'rgba(255, 99, 132, 1)',
//         borderWidth: 1,
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: 'top',
//       },
//       title: {
//         display: true,
//         text: 'Male and Female Count per Day',
//       },
//     },
//     scales: {
//       x: {
//         beginAtZero: true,
//       },
//       y: {
//         beginAtZero: true,
//       },
//     },
//   };

//   return (
//     <div className="max-w-4xl bg-white rounded-lg mx-auto p-4">
//       <Bar data={data} options={options} />
//     </div>
//   );
// };

// export default DoubleBarGraph;


import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const DoubleBarGraph = () => {
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Male',
        data: [50, 79,40, 70, 54, 66, 29],
        backgroundColor: 'rgba(54, 162, 235, 1)', // Opaque color
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
        barThickness: 10, // Thinner bars
        borderRadius: { topLeft: 10, topRight: 10 }, // Rounded top corners
        barPercentage: 0.9,
        categoryPercentage: 0.5, // Space between groups
      },
      {
        label: 'Female',
        data: [60, 41, 78, 98, 53, 37, 99],
        backgroundColor: 'rgba(255, 99, 132, 1)', // Opaque color
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        barThickness: 10, // Thinner bars
        borderRadius: { topLeft: 10, topRight: 10 }, // Rounded top corners
        barPercentage: 0.9,
        categoryPercentage: 0.5, // Space between groups
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Ensures responsiveness
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Male and Female Count per Day',
      },
    },
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="max-w-4xl bg-white rounded-2xl mx-auto p-4 h-[700px] sm:h-64"> {/* Adjust height for responsiveness */}
      <Bar data={data} options={options} />
    </div>
  );
};

export default DoubleBarGraph;
