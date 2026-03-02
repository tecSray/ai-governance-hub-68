import { Shield } from "lucide-react";

export default function DashboardHeader() {
  return (
    <header className="flex items-center justify-between py-5">
      <div className="flex items-center gap-3">
        <div className="h-9 w-9 rounded-lg bg-primary/15 flex items-center justify-center">
          <Shield className="h-5 w-5 text-primary" />
        </div>
        <div>
          <h1 className="text-lg font-semibold text-foreground tracking-tight">AI Governance Dashboard</h1>
          <p className="text-xs text-muted-foreground">ISO 42001 Compliance & Risk Monitor</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <span className="status-badge status-success">Systems Nominal</span>
        <span className="text-xs text-muted-foreground font-mono">
          {new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })}
        </span>
      </div>
    </header>
  );
}
