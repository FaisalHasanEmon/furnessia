import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4  py-20 text-center font-inter bg-white text-[#ED3B25]">
      <h1 className="text-9xl font-extrabold tracking-widest mb-4 drop-shadow-sm">404</h1>
      <div className="bg-[#ED3B25] text-white px-3 py-1 text-sm rounded rotate-12 shadow-md">
        Page Not Found 😥
      </div>
      <h2 className="text-4xl font-bold mt-8 mb-6 text-gray-900">Oops! We couldn't find that page.</h2>
      <p className="text-gray-600 max-w-md mx-auto mb-10 text-lg">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link
        to="/"
        className="px-8 py-4 bg-[#ED3B25] text-white rounded-md font-bold hover:bg-[#D52914] transition-colors duration-300 shadow-lg hover:shadow-xl"
      >
        Back to Home
      </Link>
    </div>
  );
}
