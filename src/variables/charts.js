// javascipt plugin for creating charts
const Chart = require("chart.js").Chart;
const registerables = require("chart.js").registerables;
const themeColors = require("assets/theme/colors.js").default;
const hexToRgb = require("assets/theme/hex-to-rgb.js").default;

//
// Chart extension for making the bars rounded
// Code from: https://codepen.io/jedtrow/full/ygRYgo
//
Chart.register(...registerables);
Chart.defaults.font.size = 13;
Chart.defaults.font.family = "Open Sans";

// Example 1 of Chart inside src/views/dashboards/Dashboard.js
let chartExample1 = {
  options: {
    elements: {
      point: {
        backgroundColor: themeColors.transparent.main,
        borderColor: themeColors.transparent.main,
        borderWidth: 0,
      },
      line: {
        backgroundColor: themeColors.primary.main,
        borderColor: themeColors.primary.main,
        borderWidth: 4,
      },
    },
    maintainAspectRatio: false,
    responsive: true,
    interaction: { intersect: false, mode: "index" },
    plugins: {
      legend: { display: false },
      tooltips: {
        callbacks: {
          label: function (context) {
            var label = context.dataset.label || "";

            if (label) {
              label += ": ";
            }
            if (context.parsed.y !== null) {
              label += new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(context.parsed.y);
            }
            return label;
          },
        },
      },
    },
    scales: {
      x: {
        display: true,
        title: { display: true },
        ticks: { color: "rgba(" + hexToRgb(themeColors.white.main) + ",.5)" },
        grid: {
          drawBorder: false,
          display: false,
        },
      },
      y: {
        display: true,
        title: { display: true },
        ticks: {
          color: "rgba(" + hexToRgb(themeColors.white.main) + ",.5)",
          callback: function (value) {
            return "$" + value + "k";
          },
        },
        grid: {
          drawBorder: false,
          display: false,
        },
      },
    },
  },
  data1: () => {
    return {
      labels: ["May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [
        {
          data: [0, 20, 10, 30, 15, 40, 20, 60, 60],
          tension: 0.4,
        },
      ],
    };
  },
  data2: () => {
    return {
      labels: ["May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [
        {
          data: [0, 20, 5, 25, 10, 30, 15, 40, 40],
          tension: 0.4,
        },
      ],
    };
  },
};

// Example 2 of Chart inside src/views/dashboards/Dashboard.js and src/views/dashboards/Alternative.js and src/views/pages/Charts.js
let chartExample2 = {
  options: {
    maintainAspectRatio: false,
    responsive: true,
    interaction: {
      intersect: false,
      mode: "index",
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltips: {
        position: "average",
      },
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true,
        },
        ticks: {
          color: "rgba(" + hexToRgb(themeColors.black.main) + ",.4)",
        },
        grid: {
          drawBorder: false,
          display: false,
        },
      },
      y: {
        display: true,
        title: {
          display: true,
        },
        ticks: {
          color: "rgba(" + hexToRgb(themeColors.black.main) + ",.4)",
          callback: function (value) {
            if (!(value % 10)) {
              return value;
            }
          },
        },
        grid: {
          drawBorder: false,
          display: false,
        },
      },
    },
  },
  data: {
    labels: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Sales",
        data: [25, 20, 30, 22, 17, 29],
        maxBarThickness: 10,
        backgroundColor: themeColors.warning.main,
        borderRadius: 6,
        borderSkipped: false,
      },
    ],
  },
};

module.exports = {
  chartExample1,
  chartExample2,
};
