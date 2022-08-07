import React from "react";
import { Bar, Pie } from "react-chartjs-2";
import { Chart as Chartjs, ArcElement, Tooltip, Legend } from "chart.js";

Chartjs.register(Tooltip, ArcElement, Legend);

const data = {
  labels: [
    "Html",
    "Css",
    "JavaScript",
    "React.js",
    "Tailwind",
    "Material Ui",
    "Sass",
    "GraphQL",
  ],
  datasets: [
    {
      label: "my Abilities",
      data: [90, 85, 65, 50, 60, 55, 30, 35],
      backgroundColor: [
        "#14532D",
        "#15803D",
        "#16A34A",
        "#FDE68A",
        "#16A34A",
        "#EAB308",
        "#991B1B",
        "#F87171",
      ],

      borderWidth: 1,
    },
  ],
};

const ChartAbilities = () => {
  return (
    <div className="w-full md:w-1/2 flex flex-col gap-2">
      <h1 className="text-2xl text-purple-800 font-medium">
        My Abilities by Percentage %
      </h1>
      <Pie data={data} />
    </div>
  );
};

export default ChartAbilities;
