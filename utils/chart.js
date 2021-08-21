export const options = {
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
};

export const dummyData = {
  labels: ['1', '2', '3', '4', '5', '6'],
  datasets: [
    {
      data: [12, 19, 3, 5, 2, 3],
      fill: false,
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgba(255, 99, 132, 0.2)',
    },
  ],
};

export function getChartData(labels, data, bg = 'rgb(255, 99, 132)') {
  return {
    labels,
    datasets: [
      {
        data,
        fill: false,
        backgroundColor: bg,
        borderColor: 'rgba(255, 99, 132, 0.2)',
      },
    ],
  };
}
