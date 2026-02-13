const features = [
  {
    title: "REM-Triggered Recording",
    description:
      "Lobe syncs with your biometric tracker to detect REM sleep, then automatically begins passive audio capture. You never have to press a button.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2a7 7 0 0 0-7 7c0 3 2 5.5 4 7.5S12 22 12 22s3-3.5 3-5.5 4-4.5 4-7.5a7 7 0 0 0-7-7z" />
        <circle cx="12" cy="9" r="2" />
      </svg>
    ),
  },
  {
    title: "Biometric Integration",
    description:
      "Works with Oura Ring, Apple Watch, Garmin, Fitbit, and Eight Sleep. Your heart rate, movement, and sleep stages become part of your dream profile.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    title: "Dream Completion",
    description:
      "Speak your fragmented memories when you wake. Lobe combines your words, the passive recording, and biometric data to reconstruct the full dream.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M8 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Dream Interpretation",
    description:
      "Unlock deeper meaning. Our AI analyzes recurring patterns, symbols, and emotional arcs across your dream history to surface insights about your subconscious.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 16v-4M12 8h.01" />
      </svg>
    ),
  },
  {
    title: "Dream Visualization",
    description:
      "Generate stunning images or video of your dreams using AI. See the landscapes, faces, and moments your subconscious created while you slept.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" />
        <line x1="7" y1="2" x2="7" y2="22" />
        <line x1="17" y1="2" x2="17" y2="22" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <line x1="2" y1="7" x2="7" y2="7" />
        <line x1="2" y1="17" x2="7" y2="17" />
        <line x1="17" y1="7" x2="22" y2="7" />
        <line x1="17" y1="17" x2="22" y2="17" />
      </svg>
    ),
  },
  {
    title: "Shared Dreams",
    description:
      "Share your dream narratives and visuals with a partner. Compare dreams side by side and discover the surprising connections between your subconscious minds.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

export function Features() {
  return (
    <section id="features" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block text-xs tracking-widest text-accent uppercase">
            Features
          </span>
          <h2 className="font-serif text-3xl leading-tight text-foreground text-balance md:text-5xl">
            Everything your dreams need
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground text-pretty">
            From passive capture to vivid visualization, Lobe transforms the way
            you understand your sleeping mind.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-lg border border-border bg-card p-8 transition-colors hover:border-accent/30"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-md bg-accent/10 text-accent">
                {feature.icon}
              </div>
              <h3 className="font-serif text-xl text-foreground">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground text-pretty">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
