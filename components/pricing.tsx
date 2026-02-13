const tiers = [
  {
    name: "Starter",
    price: "Free",
    description: "Begin capturing your dreams and building dream patterns.",
    features: [
      "3 dream captures per month",
      "Basic dream completion",
      "Single biometric integration",
      "Dream journal access",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Dreamer",
    price: "$14",
    period: "/mo",
    description:
      "Full dream completion and interpretation for the curious mind.",
    features: [
      "Unlimited dream captures",
      "Full dream completion",
      "AI dream interpretation",
      "All biometric integrations",
      "Dream pattern analysis",
      "Shared dreams with partner",
    ],
    cta: "Join Waitlist",
    highlighted: true,
  },
  {
    name: "Visionary",
    price: "$29",
    period: "/mo",
    description:
      "See your dreams. Generate images and video from your subconscious.",
    features: [
      "Everything in Dreamer",
      "Dream image generation",
      "Dream video generation",
      "Priority processing",
      "Export & share visuals",
      "Early access to new features",
    ],
    cta: "Join Waitlist",
    highlighted: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block text-xs tracking-widest text-accent uppercase">
            Pricing
          </span>
          <h2 className="font-serif text-3xl leading-tight text-foreground text-balance md:text-5xl">
            Choose how deep you go
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground text-pretty">
            Start free. Upgrade when you want to understand your dreams on a
            deeper level, or see them come to life.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`flex flex-col rounded-lg border p-8 ${
                tier.highlighted
                  ? "border-accent bg-card"
                  : "border-border bg-card"
              }`}
            >
              {/* Badge */}
              {tier.highlighted && (
                <span className="mb-4 inline-block self-start rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                  Most Popular
                </span>
              )}

              <h3 className="font-serif text-2xl text-foreground">
                {tier.name}
              </h3>

              <div className="mt-4 flex items-baseline gap-1">
                <span className="font-serif text-4xl text-foreground">
                  {tier.price}
                </span>
                {tier.period && (
                  <span className="text-sm text-muted-foreground">
                    {tier.period}
                  </span>
                )}
              </div>

              <p className="mt-3 text-sm leading-relaxed text-muted-foreground text-pretty">
                {tier.description}
              </p>

              {/* Features */}
              <ul className="mt-8 flex flex-1 flex-col gap-3">
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-foreground"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="mt-0.5 shrink-0 text-accent"
                    >
                      <path
                        d="M3 8l3 3 7-7"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#"
                className={`mt-8 block rounded-md py-3 text-center text-sm font-medium transition-opacity hover:opacity-90 ${
                  tier.highlighted
                    ? "bg-primary text-primary-foreground"
                    : "border border-border text-foreground hover:bg-muted"
                }`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
