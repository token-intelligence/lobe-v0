"use client";

import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

interface BiometricRow {
  id: string;
  source: string;
  heart_rate_avg: number;
  hrv_avg: number;
  spo2_avg: number;
  rem_duration_min: number;
  deep_sleep_min: number;
  light_sleep_min: number;
  total_sleep_min: number;
  sleep_score: number;
  recorded_at: string;
  dreams: { title: string } | null;
}

const tooltipStyle = {
  contentStyle: {
    backgroundColor: "hsl(240 25% 10%)",
    border: "1px solid hsl(240 15% 18%)",
    borderRadius: "8px",
    color: "hsl(40 24% 92%)",
    fontSize: "12px",
  },
  labelStyle: {
    color: "hsl(240 10% 55%)",
  },
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}

export function BiometricsCharts({
  biometrics,
}: {
  biometrics: BiometricRow[];
}) {
  const chartData = biometrics.map((b) => ({
    date: formatDate(b.recorded_at),
    dreamTitle: b.dreams?.title ?? "Unknown",
    sleepScore: b.sleep_score,
    heartRate: b.heart_rate_avg,
    hrv: b.hrv_avg,
    spo2: b.spo2_avg,
    rem: b.rem_duration_min,
    deep: b.deep_sleep_min,
    light: b.light_sleep_min,
    total: b.total_sleep_min,
  }));

  return (
    <div className="flex flex-col gap-6">
      {/* Sleep Score Trend */}
      <div className="rounded-lg border border-border bg-card p-6">
        <h3 className="mb-4 text-sm font-medium text-foreground">
          Sleep Score Trend
        </h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="hsl(240 15% 18%)"
              />
              <XAxis
                dataKey="date"
                stroke="hsl(240 10% 55%)"
                fontSize={12}
              />
              <YAxis
                domain={[60, 100]}
                stroke="hsl(240 10% 55%)"
                fontSize={12}
              />
              <Tooltip {...tooltipStyle} />
              <Area
                type="monotone"
                dataKey="sleepScore"
                name="Sleep Score"
                stroke="hsl(37 42% 60%)"
                fill="hsl(37 42% 60%)"
                fillOpacity={0.15}
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Sleep Stages */}
      <div className="rounded-lg border border-border bg-card p-6">
        <h3 className="mb-4 text-sm font-medium text-foreground">
          Sleep Stages (minutes)
        </h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="hsl(240 15% 18%)"
              />
              <XAxis
                dataKey="date"
                stroke="hsl(240 10% 55%)"
                fontSize={12}
              />
              <YAxis stroke="hsl(240 10% 55%)" fontSize={12} />
              <Tooltip {...tooltipStyle} />
              <Bar
                dataKey="rem"
                name="REM"
                fill="hsl(37 42% 60%)"
                radius={[2, 2, 0, 0]}
                stackId="sleep"
              />
              <Bar
                dataKey="deep"
                name="Deep"
                fill="hsl(217 91% 60%)"
                radius={[0, 0, 0, 0]}
                stackId="sleep"
              />
              <Bar
                dataKey="light"
                name="Light"
                fill="hsl(240 10% 35%)"
                radius={[0, 0, 0, 0]}
                stackId="sleep"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-3 flex items-center gap-5 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <span className="inline-block h-2.5 w-2.5 rounded-sm bg-accent" />
            REM
          </span>
          <span className="flex items-center gap-1.5">
            <span className="inline-block h-2.5 w-2.5 rounded-sm bg-blue-500" />
            Deep
          </span>
          <span className="flex items-center gap-1.5">
            <span className="inline-block h-2.5 w-2.5 rounded-sm bg-muted-foreground/30" />
            Light
          </span>
        </div>
      </div>

      {/* Heart Rate & HRV */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="rounded-lg border border-border bg-card p-6">
          <h3 className="mb-4 text-sm font-medium text-foreground">
            Heart Rate (avg bpm)
          </h3>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="hsl(240 15% 18%)"
                />
                <XAxis
                  dataKey="date"
                  stroke="hsl(240 10% 55%)"
                  fontSize={11}
                />
                <YAxis stroke="hsl(240 10% 55%)" fontSize={11} />
                <Tooltip {...tooltipStyle} />
                <Area
                  type="monotone"
                  dataKey="heartRate"
                  name="Heart Rate"
                  stroke="hsl(0 84% 60%)"
                  fill="hsl(0 84% 60%)"
                  fillOpacity={0.1}
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-lg border border-border bg-card p-6">
          <h3 className="mb-4 text-sm font-medium text-foreground">
            HRV (avg ms)
          </h3>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="hsl(240 15% 18%)"
                />
                <XAxis
                  dataKey="date"
                  stroke="hsl(240 10% 55%)"
                  fontSize={11}
                />
                <YAxis stroke="hsl(240 10% 55%)" fontSize={11} />
                <Tooltip {...tooltipStyle} />
                <Area
                  type="monotone"
                  dataKey="hrv"
                  name="HRV"
                  stroke="hsl(142 71% 45%)"
                  fill="hsl(142 71% 45%)"
                  fillOpacity={0.1}
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
