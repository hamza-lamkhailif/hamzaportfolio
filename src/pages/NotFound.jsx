import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-background text-text">
      {/* 404 Text */}
      <h1 className="text-[8rem] md:text-[10rem] font-extrabold leading-none text-accent opacity-90">
        404
      </h1>

      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-semibold mb-3">
        Page Not Found
      </h2>

      {/* Description */}
      <p className="text-muted max-w-md mb-8">
        Sorry, the page you’re looking for doesn’t exist, was removed, or is
        temporarily unavailable.
      </p>

      {/* CTA */}
      <Link
        to="/"
        className="px-6 py-3 rounded-lg bg-accent text-background font-semibold hover:scale-105 transition-transform"
      >
        Go back home
      </Link>
    </div>
  );
};

export default NotFound;
