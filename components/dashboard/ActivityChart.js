import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export default function ActivityChart({
  title,
  subheader = "",
  chartColors,
  chartData,
  chartLabels,
  ...other
}) {
  const data = {
    series: [...chartData],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      legend: {
        show: true,
        showForZeroSeries: true,
        position: "top",
        horizontalAlign: "right",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        width: 3,
      },
      xaxis: {
        type: "category",
        categories: chartLabels,
      },

      colors: [...chartColors],
    },
  };

  return (
    <div {...other}>
      <div>
        <h2 className="font-bold text-lg -mb-0">{title}</h2>
        {subheader !== "" ? (
          <h4 className="text-[#858585] font-normal">{subheader}</h4>
        ) : null}
      </div>

      <div className="h-[250px] mt-5">
        <ReactApexChart
          series={data.series}
          options={data.options}
          height={250}
        />
      </div>
    </div>
  );
}
