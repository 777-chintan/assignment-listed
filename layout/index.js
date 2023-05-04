import SideBar from "./SideBar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex-col lg:flex-row flex overflow-hidden p-4 md:p-6 bg-[#F5F5F5]">
      <SideBar />
      <div className="w-full lg:w-4/5">{children}</div>
    </div>
  );
}
