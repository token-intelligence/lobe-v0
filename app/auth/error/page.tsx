import Link from "next/link";

export default function AuthErrorPage() {
  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <div className="w-full max-w-sm text-center">
        <Link href="/" className="font-serif text-3xl tracking-tight text-foreground">
          Lobe
        </Link>
        <div className="mt-8 rounded-lg border border-border bg-card p-6">
          <h2 className="text-lg font-medium text-foreground">Something went wrong</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            There was an error with your authentication request. Please try again.
          </p>
          <Link
            href="/auth/login"
            className="mt-6 inline-block rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Try Again
          </Link>
        </div>
      </div>
    </div>
  );
}
