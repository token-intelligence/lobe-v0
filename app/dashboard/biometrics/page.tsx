import { createClient } from "@/lib/supabase/server";
import { BiometricsCharts } from "@/components/dashboard/biometrics-charts";

export default async function BiometricsPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: biometrics } = await supabase
    .from("biometrics")
    .select("*, dreams(title)")
    .eq("user_id", user!.id)
    .order("recorded_at", { ascending: true });

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="font-serif text-3xl tracking-tight text-foreground">
          Biometrics
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Sleep and health data from your connected devices
        </p>
      </div>

      {!biometrics || biometrics.length === 0 ? (
        <div className="rounded-lg border border-border bg-card p-12 text-center">
          <p className="text-sm text-muted-foreground">
            No biometric data yet. Connect a device and start tracking.
          </p>
        </div>
      ) : (
        <BiometricsCharts biometrics={biometrics} />
      )}
    </div>
  );
}
