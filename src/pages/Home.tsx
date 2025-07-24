import DashboardLayout from "@/components/layout/DashboardLayout";
import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import CapabilitiesSection from "@/components/home/CapabilitiesSection";
import SystemStatusSection from "@/components/home/SystemStatusSection";

export default function Home() {
  return (
    <DashboardLayout>
      <div className="space-y-16">
        <HeroSection />
        <StatsSection />
        <FeaturesSection />
        <CapabilitiesSection />
        <SystemStatusSection />
      </div>
    </DashboardLayout>
  );
}
