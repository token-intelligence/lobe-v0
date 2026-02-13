import Image from "next/image";

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-20">
      {/* Background image with overlay */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/lobe-hero.jpg"
          alt=""
          fill
          sizes="100vw"
          loading="eager"
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        {/* Eyebrow */}
        <span className="mb-6 inline-block rounded-full border border-border px-4 py-1.5 text-xs tracking-widest text-muted-foreground uppercase">
          Introducing Lobe
        </span>

        {/* Headline */}
        <h1 className="font-serif text-5xl leading-tight tracking-tight text-foreground text-balance md:text-7xl md:leading-tight">
          Your Dreams,
          <br />
          <span className="text-accent">Completed.</span>
        </h1>

        {/* Subline */}
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty md:text-xl">
          A screenless AI device that listens while you sleep, captures the
          fragments you remember, and reconstructs your dreams into vivid,
          complete narratives.
        </p>

        {/* CTA */}
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#pricing"
            className="rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Join the Waitlist
          </a>
          <a
            href="#how-it-works"
            className="rounded-md border border-border px-8 py-3 text-sm font-medium text-foreground transition-colors hover:bg-card"
          >
            How It Works
          </a>
        </div>

        {/* Device tagline */}
        <p className="mt-16 text-xs tracking-widest text-muted-foreground uppercase">
          No screen. No buttons. Just place it on your nightstand.
        </p>
      </div>
    </section>
  );
}
