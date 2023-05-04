import SideBar from "./SideBar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex overflow-hidden p-4 md:p-6 bg-[#F5F5F5]">
      <div className="hidden lg:block lg:w-1/5  h-[90vh] sticky top-0 bg-black rounded-[36px]">
        <SideBar />
      </div>
      <div className="w-full lg:w-4/5">{children}</div>
    </div>
  );
}
