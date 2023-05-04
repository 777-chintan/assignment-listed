import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export default function OverviewPieChart({
  title,
  subheader = "",
  chartColors,
  chartData,
  ...other
}) {
  const chartLabels = chartData.map((i) => i.label);

  const chartSeries = chartData.map((i) => i.value);

  const data = {
    series: [...chartSeries],
    labels: chartLabels,
    options: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      legend: {
        show: false,
        showForZeroSeries: true,
        position: "right",
        horizontalAlign: "center",
      },
      colors: [...chartColors],
    },
  };

  return (
    <div {...other}>
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-lg -mb-0">{title}</h2>
        {subheader !== "" ? (
          <h4 className="text-[#858585] font-normal text-xs">{subheader}</h4>
        ) : null}
      </div>

      <div className="grid grid-cols-2 gap-4 h-full">
        <div className="col-span-2 lg:col-span-1">
          <div className="h-[200px] mt-5">
            <ReactApexChart
              type="pie"
              series={data.series}
              options={data.options}
              height={200}
            />
          </div>
        </div>
        <div className="col-span-2 lg:col-span-1 flex flex-col gap-2 justify-center">
          {chartData.map((data, index) => (
            <div key={index}>
              <div className="flex items-center gap-2">
                <div
                  className={`w-4 h-4 rounded-full`}
                  style={{
                    backgroundColor: chartColors?.[index]
                      ? chartColors[index]
                      : "#ffffff",
                  }}
                ></div>
                <div className="font-bold text-sm">{data.label}</div>
              </div>
              <div className="pl-6 font-normal text-xs">
                {`${
                  (data.value * 100) /
                  chartData.reduce((prev, curr) => prev + curr.value, 0)
                }%`}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
