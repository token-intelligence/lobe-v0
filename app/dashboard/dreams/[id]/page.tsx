import { createClient } from "@/lib/supabase/server";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { BiometricCard } from "@/components/dashboard/biometric-card";
import { InterpretationCard } from "@/components/dashboard/interpretation-card";

export default async function DreamDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supabase = await createClient();

  const { data: dream } = await supabase
    .from("dreams")
    .select("*")
    .eq("id", id)
    .single();

  if (!dream) {
    notFound();
  }

  const { data: interpretation } = await supabase
    .from("interpretations")
    .select("*")
    .eq("dream_id", id)
    .single();

  const { data: biometric } = await supabase
    .from("biometrics")
    .select("*")
    .eq("dream_id", id)
    .single();

  return (
    <div className="flex flex-col gap-8">
      {/* Back link */}
      <Link
        href="/dashboard/dreams"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Dreams
      </Link>

      {/* Dream header */}
      <div>
        <div className="flex flex-wrap items-center gap-3">
          <h1 className="font-serif text-3xl tracking-tight text-foreground">
            {dream.title}
          </h1>
          {dream.emotion && (
            <span className="rounded-full bg-accent/10 px-3 py-1 text-sm text-accent">
              {dream.emotion}
            </span>
          )}
        </div>
        <p className="mt-2 text-sm text-muted-foreground">
          {new Date(dream.recorded_at).toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
        <div className="mt-3 flex items-center gap-4 text-sm text-muted-foreground">
          <span>Clarity: {dream.clarity_score}/10</span>
          <span>Lucidity: {dream.lucidity_score}/10</span>
        </div>
        {dream.tags && dream.tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {dream.tags.map((tag: string) => (
              <span
                key={tag}
                className="rounded-md bg-muted px-2.5 py-1 text-xs text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* What you remembered */}
      <section className="rounded-lg border border-border bg-card p-6">
        <h2 className="mb-3 text-xs font-medium tracking-widest text-muted-foreground uppercase">
          What You Remembered
        </h2>
        <p className="text-sm leading-relaxed text-foreground/80 italic">
          {'"'}{dream.fragment}{'"'}
        </p>
      </section>

      {/* Completed dream */}
      <section className="rounded-lg border border-accent/20 bg-card p-6">
        <h2 className="mb-3 text-xs font-medium tracking-widest text-accent uppercase">
          Completed Dream
        </h2>
        <p className="text-sm leading-relaxed text-foreground">
          {dream.completed_dream}
        </p>
      </section>

      {/* Two-column layout for interpretation and biometrics */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {interpretation && <InterpretationCard interpretation={interpretation} />}
        {biometric && <BiometricCard biometric={biometric} />}
      </div>
    </div>
  );
}
