import { User, Key, Eye, Settings, AlertTriangle } from "lucide-react";

const actionIcons: Record<string, typeof User> = {
  access: Key,
  view: Eye,
  config: Settings,
  alert: AlertTriangle,
  user: User,
};

const logs = [
  { time: "2 min ago", user: "sarah.chen@corp.com", action: "access", detail: "Granted admin access to Credit Score model", severity: "warning" },
  { time: "18 min ago", user: "system", action: "alert", detail: "Bias threshold exceeded on Hiring Filter (gender: 6.1%)", severity: "danger" },
  { time: "1 hr ago", user: "james.wu@corp.com", action: "config", detail: "Updated drift threshold for Fraud Detection model", severity: "info" },
  { time: "2 hr ago", user: "m.patel@corp.com", action: "view", detail: "Exported compliance report for Q4 audit", severity: "info" },
  { time: "3 hr ago", user: "system", action: "alert", detail: "Model drift alert: Loan Approval accuracy dropped to 91.9%", severity: "danger" },
  { time: "5 hr ago", user: "k.johnson@corp.com", action: "access", detail: "Revoked API access for deprecated Churn model v2", severity: "warning" },
  { time: "8 hr ago", user: "a.garcia@corp.com", action: "user", detail: "Added 3 new reviewers to Content Moderation model team", severity: "info" },
  { time: "1 day ago", user: "system", action: "config", detail: "Automated retraining triggered for Credit Score model", severity: "info" },
];

const severityClasses: Record<string, string> = {
  info: "status-info",
  warning: "status-warning",
  danger: "status-danger",
};

const iconColorClasses: Record<string, string> = {
  info: "text-status-info",
  warning: "text-status-warning",
  danger: "text-status-danger",
};

export default function AuditLog() {
  return (
    <div className="glass-card p-5 space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="section-title">Access Audit Log</h3>
        <span className="text-xs text-muted-foreground">Last 24 hours</span>
      </div>
      <div className="space-y-1 max-h-80 overflow-y-auto pr-1">
        {logs.map((log, i) => {
          const Icon = actionIcons[log.action] || User;
          return (
            <div
              key={i}
              className="flex items-start gap-3 py-2.5 px-3 rounded-md hover:bg-accent/50 transition-colors"
            >
              <Icon className={`h-4 w-4 mt-0.5 shrink-0 ${iconColorClasses[log.severity]}`} />
              <div className="flex-1 min-w-0">
                <p className="text-sm text-foreground truncate">{log.detail}</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs text-muted-foreground font-mono">{log.user}</span>
                  <span className="text-xs text-muted-foreground">·</span>
                  <span className="text-xs text-muted-foreground">{log.time}</span>
                </div>
              </div>
              <span className={`status-badge ${severityClasses[log.severity]} shrink-0`}>
                {log.severity}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
