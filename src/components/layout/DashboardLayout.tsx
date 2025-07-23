import type { ReactNode } from "react";
import { Car } from "lucide-react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen bg-[#91C8E4] text-[#9ECAD6] flex flex-col">
      {/* Header */}
      <header className="bg-[#9ECAD6] text-white px-6 py-4 shadow-md">
        <div className="max-w-6xl mx-auto flex justify-center items-center gap-3">
          <Car className="w-16 h-16 text-white" />
          <h1 className="text-xl font-bold text-center">Vehicle Tracker</h1>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 p-6 w-full max-w-6xl mx-auto">
        <div className="bg-white rounded-xl shadow p-6 text-[#9ECAD6]">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center text-md text-[#456882] py-4">
        © {new Date().getFullYear()} Vehicle Tracker App. All rights reserved.
      </footer>
    </div>
  );
};

export default DashboardLayout;
