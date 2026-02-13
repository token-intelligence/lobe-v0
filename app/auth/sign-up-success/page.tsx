import Link from "next/link";

export default function SignUpSuccessPage() {
  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <div className="w-full max-w-sm text-center">
        <Link href="/" className="font-serif text-3xl tracking-tight text-foreground">
          Lobe
        </Link>
        <div className="mt-8 rounded-lg border border-border bg-card p-6">
          <h2 className="text-lg font-medium text-foreground">Check your email</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {"We've sent you a confirmation link. Click it to activate your account and start exploring your dreams."}
          </p>
          <Link
            href="/auth/login"
            className="mt-6 inline-block rounded-md border border-border px-6 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
          >
            Back to Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}
