import React from "react";
import { signOut } from "next-auth/react";

// hooks
import { useSession } from "next-auth/react";
import useTitle from "@/hooks/useTitle";
import { useRouter } from "next/router";

// component
import { Icon } from "@iconify/react";
import withLayout from "@/components/hoc/withLayout";
import DashboardLayout from "@/layout";
import OverviewCard from "@/components/dashboard/OverviewCard";
import ActivityChart from "@/components/dashboard/ActivityChart";
import OverviewPieChart from "@/components/dashboard/OverviewPieChart";
import ScheduleItem from "@/components/dashboard/ScheduleItem";
import Loader from "@/components/Loader";

function Dashboard() {
  useTitle("Dashboard");
  const router = useRouter();
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader />
      </div>
    );
  }

  if (!!!session?.user?.email) {
    router.push("/login");
  }

  return (
    <div className="px-2 md:px-8 lg:px-20 py-6 flex flex-col gap-4 lg:gap-8">
      {/* headings */}
      <div className="flex justify-start md:justify-between md:items-center flex-col md:flex-row gap-2">
        <h2>Dashboard</h2>
        <div className="flex items-center gap-4">
          <form className="flex items-center">
            <label htmlFor="simple-search" className="sr-only">
              Search
            </label>
            <div className="relative w-full">
              <input
                type="text"
                className="bg-gray-50 border  text-gray-700 text-sm rounded-lg block w-full pr-10 p-2.5  placeholder-gray-400  focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <Icon icon="tabler:search" />
              </div>
            </div>
          </form>
          <div className="hidden md:block">
            <Icon icon={"ic:baseline-notifications-none"} height={24} />
          </div>

          <div
            class="relative w-8 h-8 overflow-hidden bg-gray-400 rounded-full hidden md:block cursor-pointer hover:opacity-80 transition"
            onClick={() => {
              signOut();
            }}
          >
            {session?.user?.image ? (
              <img src={session?.user?.image} className="oveflow-hidden" />
            ) : (
              <svg
                class="absolute w-10 h-10 text-gray-200 -left-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            )}
          </div>
        </div>
      </div>

      <div
        id="tooltip-dark"
        role="tooltip"
        class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
      >
        Tooltip content
        <div class="tooltip-arrow" data-popper-arrow></div>
      </div>

      {/* overview */}
      <div className="grid grid-cols-12 gap-4 lg:gap-8 ">
        <div className="col-span-12 sm:col-span-6 lg:col-span-3">
          <OverviewCard
            title={"Total Revenues"}
            overview={"$2,129,430"}
            className="bg-[#DDEFE0]"
            icon="uil:money-withdraw"
          />
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-3">
          <OverviewCard
            title={"Total Transactions"}
            overview={"1,520"}
            className="bg-[#F4ECDD]"
            icon="mdi:tag-multiple-outline"
          />
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-3">
          <OverviewCard
            title={"Total Likes"}
            overview={"9,721"}
            className="bg-[#EFDADA]"
            icon="ant-design:like-outlined"
          />
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-3">
          <OverviewCard
            title={"Total Users"}
            overview={"892"}
            className="bg-[#DEE0EF]"
            icon="ph:users"
          />
        </div>
      </div>

      {/* activity chart */}
      <div className="w-full bg-white rounded-xl p-4">
        <ActivityChart
          title="Activity"
          subheader="May - June 2021"
          chartLabels={[
            "Week 1",
            "Week 2",
            "Week 3",
            "Week 4",
            "Week 5",
            "Week 4",
            "Week 5",
          ]}
          chartData={[
            {
              name: "Guest",
              data: [100, 280, 450, 100, 350, 200, 350],
              type: "line",
            },
            {
              name: "User",
              data: [200, 300, 100, 350, 200, 350, 100],
              type: "line",
            },
          ]}
          chartColors={["#9BDD7C", "#E9A0A0"]}
        />
      </div>

      <div className="w-full grid grid-cols-2 gap-4 lg:gap-8">
        <div className="col-span-2 lg:col-span-1 p-4 bg-white rounded-xl">
          <div>
            <OverviewPieChart
              title="Top products"
              subheader="May - June 2021"
              chartData={[
                { label: "Basic Tees", value: 110 },
                { label: "Custom Short Pants", value: 62 },
                { label: "Super Hoodies", value: 28 },
              ]}
              chartColors={["#98D89E", "#EE8484", "#F7DC7D"]}
            />
          </div>
        </div>
        <div className="col-span-2 lg:col-span-1 p-4 bg-white rounded-xl">
          <div className="flex justify-between items-center mb-2">
            <h2 className="font-bold text-lg -mb-0">Today’s schedule</h2>
            <h4 className="text-[#858585] font-normal text-xs">See All</h4>
          </div>
          <ScheduleItem
            title={"Meeting with suppliers from Kuta Bali"}
            time={"14.00-15.00"}
            place={"at Sunset Road, Kuta, Bali "}
          />
          <ScheduleItem
            title={"Check operation at Giga Factory 1"}
            time={"18.00-20.00"}
            place={"at Central Jakarta "}
            color="#6972C3"
          />
        </div>
      </div>
    </div>
  );
}

export default withLayout(Dashboard, DashboardLayout);
