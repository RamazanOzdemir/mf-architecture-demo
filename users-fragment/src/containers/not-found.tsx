import { AlertTriangle } from "lucide-react";
import { Link } from "react-router";

export default function NotFoundPage() {
  return (
    <section className="flex items-center justify-center min-h-screen bg-white px-4">
      <div className="text-center max-w-md">
        <div className="flex justify-center mb-4">
          <AlertTriangle className="w-16 h-16 text-yellow-500" />
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          404 - Page Not Found
        </h1>
        <p className="text-gray-600 mb-6">
          The page you’re looking for doesn’t exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-block bg-indigo-600 text-white px-5 py-2 rounded-xl text-sm font-medium hover:bg-indigo-700 transition"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
