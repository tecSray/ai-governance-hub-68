import { Shield, Activity, AlertTriangle, Users, Clock } from "lucide-react";

const metrics = [
  {
    label: "Overall Compliance",
    value: "87%",
    change: "+2.4%",
    trend: "up" as const,
    icon: Shield,
    status: "success" as const,
  },
  {
    label: "Active AI Models",
    value: "24",
    change: "3 flagged",
    trend: "warning" as const,
    icon: Activity,
    status: "warning" as const,
  },
  {
    label: "Bias Alerts",
    value: "7",
    change: "-3 this week",
    trend: "down" as const,
    icon: AlertTriangle,
    status: "danger" as const,
  },
  {
    label: "Access Reviews Due",
    value: "12",
    change: "5 overdue",
    trend: "warning" as const,
    icon: Users,
    status: "warning" as const,
  },
  {
    label: "Last Audit",
    value: "3d",
    change: "ago",
    trend: "up" as const,
    icon: Clock,
    status: "info" as const,
  },
];

const statusClasses: Record<string, string> = {
  success: "text-status-success",
  warning: "text-status-warning",
  danger: "text-status-danger",
  info: "text-status-info",
};

const dotClasses: Record<string, string> = {
  success: "bg-status-success",
  warning: "bg-status-warning",
  danger: "bg-status-danger",
  info: "bg-status-info",
};

export default function MetricCards() {
  return (
    <div className="grid grid-cols-2 gap-3 lg:grid-cols-5">
      {metrics.map((m) => (
        <div key={m.label} className="glass-card p-4 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground font-medium">{m.label}</span>
            <m.icon className={`h-4 w-4 ${statusClasses[m.status]}`} />
          </div>
          <p className="metric-value">{m.value}</p>
          <div className="flex items-center gap-1.5">
            <span className={`h-1.5 w-1.5 rounded-full ${dotClasses[m.status]} animate-pulse-slow`} />
            <span className={`text-xs ${statusClasses[m.status]}`}>{m.change}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
