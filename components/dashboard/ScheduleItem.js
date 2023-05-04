import React from "react";

const ScheduleItem = ({ title, time, place, color = "#9BDD7C" }) => {
  return (
    <div className="border-l-8 pl-2 my-4" style={{ borderColor: color }}>
      <p className="text-[#666666] font-bold text-sm capitalize my-2">
        {title}
      </p>
      <p className="text-[#999999] font-normal text-xs my-1">{time}</p>
      <p className="text-[#999999] font-normal text-xs my-2">{place}</p>
    </div>
  );
};

export default ScheduleItem;
