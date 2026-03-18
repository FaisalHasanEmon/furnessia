import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 py-20 text-center font-inter">
      <h1 className="text-8xl font-bold text-gray-900 mb-4">404</h1>
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">Page Not Found</h2>
      <p className="text-gray-600 max-w-md mx-auto mb-10 text-lg">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link 
        to="/" 
        className="px-8 py-3 bg-gray-900 text-white rounded-md font-medium hover:bg-gray-800 transition-colors duration-200 shadow-sm"
      >
        Back to Home
      </Link>
    </div>
  );
}
