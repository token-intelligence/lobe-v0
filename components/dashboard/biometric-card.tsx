import { Heart, Activity, Clock, Zap } from "lucide-react";

interface Biometric {
  id: string;
  source: string;
  heart_rate_avg: number;
  heart_rate_min: number;
  heart_rate_max: number;
  hrv_avg: number;
  spo2_avg: number;
  rem_duration_min: number;
  deep_sleep_min: number;
  light_sleep_min: number;
  total_sleep_min: number;
  sleep_score: number;
}

function formatDuration(minutes: number) {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return h > 0 ? `${h}h ${m}m` : `${m}m`;
}

export function BiometricCard({ biometric }: { biometric: Biometric }) {
  const sleepStages = [
    {
      label: "REM",
      value: biometric.rem_duration_min,
      color: "bg-accent",
    },
    {
      label: "Deep",
      value: biometric.deep_sleep_min,
      color: "bg-blue-500",
    },
    {
      label: "Light",
      value: biometric.light_sleep_min,
      color: "bg-muted-foreground/30",
    },
  ];

  return (
    <div className="rounded-lg border border-border bg-card p-6">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-xs font-medium tracking-widest text-accent uppercase">
          Biometrics
        </h3>
        <span className="text-xs text-muted-foreground">
          via {biometric.source}
        </span>
      </div>

      {/* Sleep score */}
      <div className="mb-5 flex items-center gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-accent">
          <span className="text-xl font-semibold text-accent">
            {biometric.sleep_score}
          </span>
        </div>
        <div>
          <p className="text-sm font-medium text-foreground">Sleep Score</p>
          <p className="text-xs text-muted-foreground">
            {formatDuration(biometric.total_sleep_min)} total sleep
          </p>
        </div>
      </div>

      {/* Sleep stages bar */}
      <div className="mb-4">
        <div className="mb-2 flex h-3 overflow-hidden rounded-full bg-muted">
          {sleepStages.map((stage) => (
            <div
              key={stage.label}
              className={`${stage.color} transition-all`}
              style={{
                width: `${(stage.value / biometric.total_sleep_min) * 100}%`,
              }}
            />
          ))}
        </div>
        <div className="flex justify-between text-xs text-muted-foreground">
          {sleepStages.map((stage) => (
            <span key={stage.label} className="flex items-center gap-1.5">
              <span
                className={`inline-block h-2 w-2 rounded-full ${stage.color}`}
              />
              {stage.label} {formatDuration(stage.value)}
            </span>
          ))}
        </div>
      </div>

      {/* Vital stats grid */}
      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-md bg-muted p-3">
          <div className="flex items-center gap-2">
            <Heart className="h-3.5 w-3.5 text-red-400" />
            <span className="text-xs text-muted-foreground">Heart Rate</span>
          </div>
          <p className="mt-1 text-sm font-medium text-foreground">
            {biometric.heart_rate_avg} bpm
          </p>
          <p className="text-xs text-muted-foreground">
            {biometric.heart_rate_min}–{biometric.heart_rate_max} range
          </p>
        </div>
        <div className="rounded-md bg-muted p-3">
          <div className="flex items-center gap-2">
            <Activity className="h-3.5 w-3.5 text-green-400" />
            <span className="text-xs text-muted-foreground">HRV</span>
          </div>
          <p className="mt-1 text-sm font-medium text-foreground">
            {biometric.hrv_avg} ms
          </p>
          <p className="text-xs text-muted-foreground">avg variability</p>
        </div>
        <div className="rounded-md bg-muted p-3">
          <div className="flex items-center gap-2">
            <Zap className="h-3.5 w-3.5 text-accent" />
            <span className="text-xs text-muted-foreground">SpO2</span>
          </div>
          <p className="mt-1 text-sm font-medium text-foreground">
            {biometric.spo2_avg}%
          </p>
          <p className="text-xs text-muted-foreground">blood oxygen</p>
        </div>
        <div className="rounded-md bg-muted p-3">
          <div className="flex items-center gap-2">
            <Clock className="h-3.5 w-3.5 text-blue-400" />
            <span className="text-xs text-muted-foreground">REM</span>
          </div>
          <p className="mt-1 text-sm font-medium text-foreground">
            {formatDuration(biometric.rem_duration_min)}
          </p>
          <p className="text-xs text-muted-foreground">REM duration</p>
        </div>
      </div>
    </div>
  );
}
