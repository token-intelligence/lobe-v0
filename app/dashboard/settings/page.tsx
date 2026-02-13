import { createClient } from "@/lib/supabase/server";
import { SettingsForm } from "@/components/dashboard/settings-form";

export default async function SettingsPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: profile } = await supabase
    .from("profiles")
    .select("display_name")
    .eq("id", user!.id)
    .single();

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="font-serif text-3xl tracking-tight text-foreground">
          Settings
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Manage your account and device preferences
        </p>
      </div>

      <SettingsForm
        email={user!.email ?? ""}
        displayName={profile?.display_name ?? ""}
        userId={user!.id}
      />
    </div>
  );
}
