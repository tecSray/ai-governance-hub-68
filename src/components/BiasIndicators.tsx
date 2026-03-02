import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const biasData = [
  { model: "Credit Score", gender: 3.2, race: 4.8, age: 2.1 },
  { model: "Hiring Filter", gender: 6.1, race: 3.4, age: 1.9 },
  { model: "Fraud Detect", gender: 1.1, race: 2.3, age: 0.8 },
  { model: "Churn Pred", gender: 2.4, race: 1.7, age: 3.5 },
  { model: "Loan Approval", gender: 4.7, race: 5.9, age: 2.8 },
  { model: "Content Mod", gender: 0.9, race: 1.2, age: 0.5 },
];

const colors = {
  gender: "hsl(280, 60%, 60%)",
  race: "hsl(0, 72%, 55%)",
  age: "hsl(38, 92%, 55%)",
};

export default function BiasIndicators() {
  return (
    <div className="glass-card p-5 space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="section-title">Data Bias Indicators</h3>
        <div className="flex gap-3">
          {Object.entries(colors).map(([key, color]) => (
            <div key={key} className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full" style={{ background: color }} />
              <span className="text-xs text-muted-foreground capitalize">{key}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={biasData} barGap={2} barSize={10}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 14%, 18%)" />
            <XAxis dataKey="model" tick={{ fill: "hsl(215, 15%, 52%)", fontSize: 10 }} axisLine={false} />
            <YAxis tick={{ fill: "hsl(215, 15%, 52%)", fontSize: 11 }} axisLine={false} label={{ value: "Bias %", angle: -90, position: "insideLeft", style: { fill: "hsl(215, 15%, 52%)", fontSize: 11 } }} />
            <Tooltip
              contentStyle={{
                background: "hsl(220, 18%, 12%)",
                border: "1px solid hsl(220, 14%, 18%)",
                borderRadius: 8,
                fontSize: 12,
                color: "hsl(210, 20%, 92%)",
              }}
            />
            <Bar dataKey="gender" fill={colors.gender} radius={[3, 3, 0, 0]} name="Gender" />
            <Bar dataKey="race" fill={colors.race} radius={[3, 3, 0, 0]} name="Race" />
            <Bar dataKey="age" fill={colors.age} radius={[3, 3, 0, 0]} name="Age" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
