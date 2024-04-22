import React from "react";
import ReactEcharts from "echarts-for-react";

const HorizontalBar = ({
  datas = [{ name: "", value: 0, color: "" }],
  symbol = "",
}) => {
  const seriesData = datas.map((item) => ({
    value: item.value,
    itemStyle: {
      color: item.color,
    },
  }));
  const valueFormatter = (value) => {
    if (typeof value !== 'number') {
      return ""; // or any other default value you prefer
    }
    if (value >= 1000000) {
      return (value / 1000000).toFixed(2) + "M";
    } else if (value >= 1000) {
      return (value / 1000).toFixed(2) + "K";
    } else {
      return value.toFixed(0);
    }
  };
  const option = {
    title: {
      text: "",
    },
    tooltip: {
      trigger: "axis",
      formatter: function (params) {
        return `${params[0].name}: ${
          params[0].name === "Digipoints" ? "" : symbol
        } ${valueFormatter(params[0].value)}`;
      },
      axisPointer: {
        type: "shadow",
      },
    },
    legend: {},
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: {
      type: "value",
      axisLabel: {
        formatter: function (value) {
          if (value >= 1000000) {
            return (value / 1000000).toFixed(0) + "M";
          } else if (value >= 1000) {
            return (value / 1000).toFixed(0) + "K";
          } else {
            return value?.toFixed(0);
          }
        },
      },
      boundaryGap: [0, 0.01],
    },
    yAxis: {
      type: "category",
      data: datas.map((item) => item.name),
    },
    series: [
      {
        data: seriesData,
        type: "bar",
        showBackground: true,
        backgroundColor: "#828282",
        label: {
          show: true,
          position: "inside",
          formatter: function (params) {
            return `${
              params.name === "Digipoints" ? "" : symbol
            } ${valueFormatter(params.value)}`;
          },
        },
      },
    ],
  };
  return (
    <div className="w-full">
      <ReactEcharts option={option} />
    </div>
  );
};

export default HorizontalBar;
