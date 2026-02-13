"use client";

import { createClient } from "@/lib/supabase/client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export function SettingsForm({
  email,
  displayName: initialDisplayName,
  userId,
}: {
  email: string;
  displayName: string;
  userId: string;
}) {
  const [displayName, setDisplayName] = useState(initialDisplayName);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const router = useRouter();

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setMessage(null);

    const supabase = createClient();
    const { error } = await supabase
      .from("profiles")
      .update({ display_name: displayName })
      .eq("id", userId);

    if (error) {
      setMessage("Failed to update profile. Please try again.");
    } else {
      setMessage("Profile updated successfully.");
      router.refresh();
    }
    setSaving(false);
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Profile section */}
      <div className="rounded-lg border border-border bg-card p-6">
        <h2 className="mb-4 text-sm font-medium text-foreground">Profile</h2>
        <form onSubmit={handleSave} className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-sm font-medium text-muted-foreground"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              disabled
              className="rounded-md border border-border bg-muted px-3 py-2.5 text-sm text-muted-foreground"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="displayName"
              className="text-sm font-medium text-foreground"
            >
              Display Name
            </label>
            <input
              id="displayName"
              type="text"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              className="rounded-md border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          {message && (
            <p
              className={`text-sm ${
                message.includes("Failed") ? "text-red-400" : "text-green-400"
              }`}
            >
              {message}
            </p>
          )}
          <button
            type="submit"
            disabled={saving}
            className="self-start rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-50"
          >
            {saving ? "Saving..." : "Save Changes"}
          </button>
        </form>
      </div>

      {/* Connected devices */}
      <div className="rounded-lg border border-border bg-card p-6">
        <h2 className="mb-4 text-sm font-medium text-foreground">
          Connected Devices
        </h2>
        <div className="flex flex-col gap-3">
          {[
            { name: "Oura Ring", connected: true },
            { name: "Apple Watch", connected: false },
            { name: "Fitbit", connected: false },
            { name: "Garmin", connected: false },
            { name: "Eight Sleep", connected: false },
          ].map((device) => (
            <div
              key={device.name}
              className="flex items-center justify-between rounded-md border border-border px-4 py-3"
            >
              <span className="text-sm text-foreground">{device.name}</span>
              <span
                className={`text-xs ${
                  device.connected ? "text-green-400" : "text-muted-foreground"
                }`}
              >
                {device.connected ? "Connected" : "Not connected"}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Subscription */}
      <div className="rounded-lg border border-border bg-card p-6">
        <h2 className="mb-4 text-sm font-medium text-foreground">
          Subscription
        </h2>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-foreground">Dreamer Plan</p>
            <p className="text-xs text-muted-foreground">
              Dream completion + interpretation
            </p>
          </div>
          <span className="rounded-full bg-accent/10 px-3 py-1 text-xs text-accent">
            Active
          </span>
        </div>
      </div>
    </div>
  );
}
