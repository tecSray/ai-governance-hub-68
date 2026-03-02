import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const driftData = [
  { date: "Jan", accuracy: 96.2, drift: 0.8, threshold: 5 },
  { date: "Feb", accuracy: 95.8, drift: 1.2, threshold: 5 },
  { date: "Mar", accuracy: 95.1, drift: 1.9, threshold: 5 },
  { date: "Apr", accuracy: 94.5, drift: 2.5, threshold: 5 },
  { date: "May", accuracy: 93.8, drift: 3.1, threshold: 5 },
  { date: "Jun", accuracy: 94.2, drift: 2.8, threshold: 5 },
  { date: "Jul", accuracy: 93.1, drift: 3.9, threshold: 5 },
  { date: "Aug", accuracy: 92.5, drift: 4.5, threshold: 5 },
  { date: "Sep", accuracy: 93.6, drift: 3.4, threshold: 5 },
  { date: "Oct", accuracy: 92.8, drift: 4.2, threshold: 5 },
  { date: "Nov", accuracy: 91.9, drift: 5.1, threshold: 5 },
  { date: "Dec", accuracy: 92.4, drift: 4.6, threshold: 5 },
];

export default function ModelDriftChart() {
  return (
    <div className="glass-card p-5 space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="section-title">Model Drift Detection</h3>
        <span className="status-badge status-warning">2 models above threshold</span>
      </div>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={driftData}>
            <defs>
              <linearGradient id="driftGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(38, 92%, 55%)" stopOpacity={0.3} />
                <stop offset="100%" stopColor="hsl(38, 92%, 55%)" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="accGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(173, 58%, 48%)" stopOpacity={0.3} />
                <stop offset="100%" stopColor="hsl(173, 58%, 48%)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 14%, 18%)" />
            <XAxis dataKey="date" tick={{ fill: "hsl(215, 15%, 52%)", fontSize: 11 }} axisLine={false} />
            <YAxis tick={{ fill: "hsl(215, 15%, 52%)", fontSize: 11 }} axisLine={false} />
            <Tooltip
              contentStyle={{
                background: "hsl(220, 18%, 12%)",
                border: "1px solid hsl(220, 14%, 18%)",
                borderRadius: 8,
                fontSize: 12,
                color: "hsl(210, 20%, 92%)",
              }}
            />
            <Legend wrapperStyle={{ fontSize: 11, color: "hsl(215, 15%, 52%)" }} />
            <Area
              type="monotone"
              dataKey="accuracy"
              stroke="hsl(173, 58%, 48%)"
              fill="url(#accGrad)"
              strokeWidth={2}
              name="Accuracy %"
            />
            <Area
              type="monotone"
              dataKey="drift"
              stroke="hsl(38, 92%, 55%)"
              fill="url(#driftGrad)"
              strokeWidth={2}
              name="Drift Score"
            />
            <Area
              type="monotone"
              dataKey="threshold"
              stroke="hsl(0, 72%, 55%)"
              strokeDasharray="6 3"
              fill="none"
              strokeWidth={1.5}
              name="Drift Threshold"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
