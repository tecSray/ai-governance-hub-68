import DashboardHeader from "@/components/DashboardHeader";
import MetricCards from "@/components/MetricCards";
import ModelDriftChart from "@/components/ModelDriftChart";
import BiasIndicators from "@/components/BiasIndicators";
import AuditLog from "@/components/AuditLog";
import ComplianceGrid from "@/components/ComplianceGrid";

const Index = () => {
  return (
    <div className="min-h-screen bg-background px-4 md:px-8 pb-10">
      <div className="max-w-7xl mx-auto">
        <DashboardHeader />
        <div className="space-y-4">
          <MetricCards />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <ModelDriftChart />
            <BiasIndicators />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <AuditLog />
            <ComplianceGrid />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
