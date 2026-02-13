import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import { Moon } from "lucide-react";

export default async function DreamsListPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: dreams } = await supabase
    .from("dreams")
    .select("id, title, recorded_at, fragment, emotion, clarity_score, lucidity_score, tags")
    .eq("user_id", user!.id)
    .order("recorded_at", { ascending: false });

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="font-serif text-3xl tracking-tight text-foreground">
          Your Dreams
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          {dreams?.length ?? 0} dreams recorded
        </p>
      </div>

      {!dreams || dreams.length === 0 ? (
        <div className="rounded-lg border border-border bg-card p-12 text-center">
          <Moon className="mx-auto h-10 w-10 text-muted-foreground" />
          <h3 className="mt-4 font-medium text-foreground">No dreams yet</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            When Lobe captures your first dream, it will appear here.
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {dreams.map((dream) => (
            <Link
              key={dream.id}
              href={`/dashboard/dreams/${dream.id}`}
              className="group rounded-lg border border-border bg-card p-6 transition-colors hover:border-accent/30"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <h3 className="font-medium text-foreground group-hover:text-accent transition-colors">
                      {dream.title}
                    </h3>
                    {dream.emotion && (
                      <span className="rounded-full bg-accent/10 px-2.5 py-0.5 text-xs text-accent">
                        {dream.emotion}
                      </span>
                    )}
                  </div>
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                    {dream.fragment}
                  </p>
                  {dream.tags && dream.tags.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {dream.tags.map((tag: string) => (
                        <span
                          key={tag}
                          className="rounded-md bg-muted px-2 py-0.5 text-xs text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                <div className="flex flex-row items-center gap-4 sm:flex-col sm:items-end sm:gap-2">
                  <span className="text-xs text-muted-foreground">
                    {new Date(dream.recorded_at).toLocaleDateString("en-US", {
                      weekday: "short",
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span>Clarity {dream.clarity_score}/10</span>
                    <span className="text-border">|</span>
                    <span>Lucidity {dream.lucidity_score}/10</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
