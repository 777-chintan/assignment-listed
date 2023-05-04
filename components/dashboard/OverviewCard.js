import React from "react";

// components
import { Icon } from "@iconify/react";

function OverviewCard({
  title = "",
  overview = "",
  className = "",
  icon = "",
}) {
  return (
    <div
      className={`flex flex-col gap-2 rounded-2xl p-4 text-black ${className}`}
    >
      <div className="self-end -mb-2">
        <Icon icon={icon} height={28} />
      </div>
      <p className="font-normal text-sm">{title}</p>
      <h3 className="font-bold text-2xl">{overview}</h3>
    </div>
  );
}

export default OverviewCard;
