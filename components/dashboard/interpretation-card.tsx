interface Symbol {
  symbol: string;
  meaning: string;
}

interface Interpretation {
  id: string;
  summary: string;
  themes: string[];
  symbols: Symbol[];
  mood_analysis: string;
}

export function InterpretationCard({
  interpretation,
}: {
  interpretation: Interpretation;
}) {
  return (
    <div className="rounded-lg border border-border bg-card p-6">
      <h3 className="mb-4 text-xs font-medium tracking-widest text-accent uppercase">
        Interpretation
      </h3>

      <p className="text-sm leading-relaxed text-foreground/90">
        {interpretation.summary}
      </p>

      {/* Themes */}
      {interpretation.themes && interpretation.themes.length > 0 && (
        <div className="mt-5">
          <h4 className="mb-2 text-xs font-medium text-muted-foreground">
            Themes
          </h4>
          <div className="flex flex-wrap gap-2">
            {interpretation.themes.map((theme) => (
              <span
                key={theme}
                className="rounded-full bg-accent/10 px-3 py-1 text-xs text-accent"
              >
                {theme}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Symbols */}
      {interpretation.symbols && interpretation.symbols.length > 0 && (
        <div className="mt-5">
          <h4 className="mb-2 text-xs font-medium text-muted-foreground">
            Symbols
          </h4>
          <div className="flex flex-col gap-2">
            {interpretation.symbols.map((sym) => (
              <div key={sym.symbol} className="flex flex-col gap-0.5">
                <span className="text-sm font-medium text-foreground">
                  {sym.symbol}
                </span>
                <span className="text-xs text-muted-foreground">
                  {sym.meaning}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Mood analysis */}
      {interpretation.mood_analysis && (
        <div className="mt-5 rounded-md bg-muted p-4">
          <h4 className="mb-1 text-xs font-medium text-muted-foreground">
            Mood Analysis
          </h4>
          <p className="text-sm leading-relaxed text-foreground/80">
            {interpretation.mood_analysis}
          </p>
        </div>
      )}
    </div>
  );
}
