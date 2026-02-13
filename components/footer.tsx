export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 md:flex-row md:justify-between">
        {/* Brand */}
        <div className="max-w-sm">
          <span className="font-serif text-2xl tracking-tight text-foreground">
            Lobe
          </span>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            An AI-powered screenless device that captures, completes, and
            interprets your dreams. Place it on your nightstand and discover
            what your sleeping mind creates.
          </p>
        </div>

        {/* Links */}
        <div className="flex gap-16">
          <div>
            <h4 className="mb-4 text-xs font-medium tracking-widest text-foreground uppercase">
              Product
            </h4>
            <ul className="flex flex-col gap-3">
              {["How It Works", "Features", "Integrations", "Pricing"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-medium tracking-widest text-foreground uppercase">
              Company
            </h4>
            <ul className="flex flex-col gap-3">
              {["About", "Blog", "Careers", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-medium tracking-widest text-foreground uppercase">
              Legal
            </h4>
            <ul className="flex flex-col gap-3">
              {["Privacy", "Terms", "Security"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mx-auto mt-12 flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
        <p className="text-xs text-muted-foreground">
          {"2025 Lobe, Inc. All rights reserved."}
        </p>
        <div className="flex gap-6">
          {["Twitter", "Instagram", "LinkedIn"].map((social) => (
            <a
              key={social}
              href="#"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              {social}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
