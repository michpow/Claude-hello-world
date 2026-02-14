import Link from "next/link";

// This page shows when someone visits a URL that doesn't exist.
// Having a custom 404 page is much friendlier than the default error page.
export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <p className="mb-2 text-6xl font-bold text-pink-primary">404</p>
      <h1 className="mb-4 text-2xl font-bold text-heading">page not found</h1>
      <p className="mb-8 max-w-md text-gray">
        Oops! The page you&apos;re looking for doesn&apos;t exist. It might have been
        moved or deleted.
      </p>
      <Link
        href="/"
        className="rounded-full bg-pink-dark px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-pink-medium"
      >
        go back home
      </Link>
    </div>
  );
}
