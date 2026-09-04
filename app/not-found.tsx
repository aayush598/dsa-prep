import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center px-4">
        <div className="text-8xl font-bold text-white/5 mb-4">404</div>
        <h1 className="text-2xl font-bold text-white mb-2">Page not found</h1>
        <p className="text-zinc-500 mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist. It might have been
          moved or deleted.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white rounded-xl font-medium hover:from-violet-500 hover:to-fuchsia-500 transition-all"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
