export default function NotFound() {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center">
        <h1 className="text-6xl font-bold text-gray-800">404</h1>
        <p className="text-xl text-gray-600 mt-2">Oops! Page not found.</p>
        <a
          href="/"
          className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700"
        >
          Go Home
        </a>
      </div>
    );
  }
  