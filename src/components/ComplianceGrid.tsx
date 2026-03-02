import { CheckCircle2, AlertCircle, Clock, XCircle } from "lucide-react";

const controls = [
  { id: "5.1", name: "AI Policy & Objectives", status: "compliant", progress: 100 },
  { id: "6.1", name: "Risk Assessment", status: "compliant", progress: 100 },
  { id: "6.2", name: "Risk Treatment", status: "partial", progress: 72 },
  { id: "7.1", name: "Resources & Competence", status: "compliant", progress: 100 },
  { id: "7.4", name: "Communication", status: "partial", progress: 58 },
  { id: "8.1", name: "Operational Planning", status: "compliant", progress: 100 },
  { id: "8.2", name: "AI Impact Assessment", status: "in-review", progress: 85 },
  { id: "9.1", name: "Monitoring & Measurement", status: "partial", progress: 64 },
  { id: "9.2", name: "Internal Audit", status: "in-review", progress: 90 },
  { id: "9.3", name: "Management Review", status: "non-compliant", progress: 30 },
  { id: "10.1", name: "Nonconformity & Corrective Action", status: "partial", progress: 45 },
  { id: "10.2", name: "Continual Improvement", status: "compliant", progress: 100 },
];

const statusConfig: Record<string, { icon: typeof CheckCircle2; label: string; class: string; barClass: string }> = {
  compliant: { icon: CheckCircle2, label: "Compliant", class: "status-success", barClass: "bg-status-success" },
  partial: { icon: AlertCircle, label: "Partial", class: "status-warning", barClass: "bg-status-warning" },
  "in-review": { icon: Clock, label: "In Review", class: "status-info", barClass: "bg-status-info" },
  "non-compliant": { icon: XCircle, label: "Non-Compliant", class: "status-danger", barClass: "bg-status-danger" },
};

export default function ComplianceGrid() {
  const compliant = controls.filter((c) => c.status === "compliant").length;
  const total = controls.length;

  return (
    <div className="glass-card p-5 space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="section-title">ISO 42001 Compliance</h3>
        <div className="flex items-center gap-2">
          <span className="text-xs text-muted-foreground">{compliant}/{total} controls met</span>
          <span className="status-badge status-warning">In Progress</span>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {controls.map((ctrl) => {
          const cfg = statusConfig[ctrl.status];
          const Icon = cfg.icon;
          return (
            <div key={ctrl.id} className="flex items-center gap-3 p-3 rounded-md bg-accent/30 hover:bg-accent/50 transition-colors">
              <Icon className={`h-4 w-4 shrink-0 ${ctrl.status === "compliant" ? "text-status-success" : ctrl.status === "partial" ? "text-status-warning" : ctrl.status === "in-review" ? "text-status-info" : "text-status-danger"}`} />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-medium text-foreground truncate">
                    <span className="font-mono text-muted-foreground mr-1.5">{ctrl.id}</span>
                    {ctrl.name}
                  </span>
                  <span className="text-xs font-mono text-muted-foreground ml-2">{ctrl.progress}%</span>
                </div>
                <div className="h-1 w-full bg-muted rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all ${cfg.barClass}`}
                    style={{ width: `${ctrl.progress}%` }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
