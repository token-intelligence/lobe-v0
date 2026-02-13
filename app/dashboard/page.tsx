import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import { Moon, Brain, Activity, TrendingUp } from "lucide-react";

export default async function DashboardOverviewPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: dreams } = await supabase
    .from("dreams")
    .select("id, title, recorded_at, emotion, clarity_score, lucidity_score")
    .eq("user_id", user!.id)
    .order("recorded_at", { ascending: false });

  const { data: biometrics } = await supabase
    .from("biometrics")
    .select("sleep_score, rem_duration_min, total_sleep_min")
    .eq("user_id", user!.id)
    .order("recorded_at", { ascending: false });

  const totalDreams = dreams?.length ?? 0;
  const avgClarity =
    totalDreams > 0
      ? Math.round(
          (dreams?.reduce((sum, d) => sum + (d.clarity_score ?? 0), 0) ?? 0) /
            totalDreams
        )
      : 0;
  const avgSleepScore =
    biometrics && biometrics.length > 0
      ? Math.round(
          biometrics.reduce((sum, b) => sum + (b.sleep_score ?? 0), 0) /
            biometrics.length
        )
      : 0;
  const totalRemMin =
    biometrics?.reduce((sum, b) => sum + (b.rem_duration_min ?? 0), 0) ?? 0;

  const stats = [
    {
      label: "Total Dreams",
      value: totalDreams,
      icon: Moon,
      description: "Dreams recorded",
    },
    {
      label: "Avg Clarity",
      value: `${avgClarity}/10`,
      icon: Brain,
      description: "Dream clarity score",
    },
    {
      label: "Avg Sleep Score",
      value: avgSleepScore,
      icon: TrendingUp,
      description: "From biometric data",
    },
    {
      label: "Total REM",
      value: `${Math.round(totalRemMin / 60)}h ${totalRemMin % 60}m`,
      icon: Activity,
      description: "REM sleep tracked",
    },
  ];

  const recentDreams = dreams?.slice(0, 3) ?? [];

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="font-serif text-3xl tracking-tight text-foreground">
          Dashboard
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Your dream activity at a glance
        </p>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className="rounded-lg border border-border bg-card p-5"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-md bg-accent/10 p-2">
                  <Icon className="h-4 w-4 text-accent" />
                </div>
                <span className="text-sm text-muted-foreground">
                  {stat.label}
                </span>
              </div>
              <p className="mt-3 text-2xl font-semibold text-foreground">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                {stat.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Recent dreams */}
      <div>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-serif text-xl text-foreground">Recent Dreams</h2>
          <Link
            href="/dashboard/dreams"
            className="text-sm text-accent hover:underline"
          >
            View all
          </Link>
        </div>

        {recentDreams.length === 0 ? (
          <div className="rounded-lg border border-border bg-card p-8 text-center">
            <Moon className="mx-auto h-8 w-8 text-muted-foreground" />
            <p className="mt-3 text-sm text-muted-foreground">
              No dreams recorded yet. Place Lobe on your nightstand and start
              dreaming.
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            {recentDreams.map((dream) => (
              <Link
                key={dream.id}
                href={`/dashboard/dreams/${dream.id}`}
                className="group rounded-lg border border-border bg-card p-5 transition-colors hover:border-accent/30"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-medium text-foreground group-hover:text-accent transition-colors">
                      {dream.title}
                    </h3>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {new Date(dream.recorded_at).toLocaleDateString("en-US", {
                        weekday: "short",
                        month: "short",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    {dream.emotion && (
                      <span className="rounded-full bg-accent/10 px-3 py-1 text-xs text-accent">
                        {dream.emotion}
                      </span>
                    )}
                    <span className="text-xs text-muted-foreground">
                      {dream.clarity_score}/10 clarity
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
