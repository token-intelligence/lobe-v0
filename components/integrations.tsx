const integrations = [
  {
    name: "Oura Ring",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="20" cy="20" r="8" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    name: "Apple Watch",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect x="12" y="6" width="16" height="28" rx="4" stroke="currentColor" strokeWidth="1.5" />
        <rect x="14" y="9" width="12" height="18" rx="2" stroke="currentColor" strokeWidth="1" />
      </svg>
    ),
  },
  {
    name: "Garmin",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M20 6L6 20l14 14 14-14L20 6z" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="20" cy="20" r="4" stroke="currentColor" strokeWidth="1" />
      </svg>
    ),
  },
  {
    name: "Fitbit",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="10" r="3" fill="currentColor" />
        <circle cx="20" cy="20" r="3" fill="currentColor" />
        <circle cx="20" cy="30" r="3" fill="currentColor" />
        <circle cx="12" cy="15" r="2" fill="currentColor" />
        <circle cx="12" cy="25" r="2" fill="currentColor" />
        <circle cx="28" cy="15" r="2" fill="currentColor" />
        <circle cx="28" cy="25" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "Eight Sleep",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="14" r="6" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="20" cy="26" r="6" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
];

export function Integrations() {
  return (
    <section
      id="integrations"
      className="border-y border-border bg-card px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl text-center">
        <span className="mb-4 inline-block text-xs tracking-widest text-accent uppercase">
          Integrations
        </span>
        <h2 className="font-serif text-3xl leading-tight text-foreground text-balance md:text-5xl">
          Works with what you wear
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground text-pretty">
          Lobe connects to your existing sleep and biometric trackers to detect
          REM cycles and enrich your dream data with heart rate, movement, and
          sleep stage information.
        </p>

        {/* Integration logos */}
        <div className="mx-auto mt-16 flex max-w-3xl flex-wrap items-center justify-center gap-10 md:gap-16">
          {integrations.map((integration) => (
            <div
              key={integration.name}
              className="flex flex-col items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
            >
              {integration.icon}
              <span className="text-xs tracking-wide">{integration.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
