import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import { Link, useLocation } from "react-router-dom";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { Appcontext } from "../../context/Appcontext";

const Navbar = () => {
  const { navigate, isEducator } = useContext(Appcontext);
  const location = useLocation();
  const isCourseListPage = location.pathname.includes("/course-list");

  const { openSignIn } = useClerk();
  const { user } = useUser();

  // logo size classes adjust based on page and viewport
  const logoSizeClass = isCourseListPage
    ? "w-8 md:w-10" // slightly smaller on course-list pages
    : "w-10 md:w-12 lg:w-14"; // normal size elsewhere

  return (
    <header
      className={`sticky top-0 z-40 backdrop-blur-sm bg-white/80 border-b ${
        isCourseListPage ? "border-gray-200" : "border-gray-100"
      }`}
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        <nav className="flex items-center justify-between h-16">
          {/* Left: logo */}
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => navigate("/")}
            role="button"
            aria-label="Go to homepage"
          >
            <img
              src={assets.brainbox}
              alt="BrainBox logo"
              className={`${logoSizeClass} object-contain`}
            />
            <span className="text-lg md:text-xl font-semibold text-gray-800 tracking-tight">
              BrainBox
            </span>
          </div>

          {/* Center/Links (desktop) */}
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-600">
            <Link
              to="/"
              className={`hover:text-cyan-600 transition-colors ${
                isCourseListPage ? "text-gray-700" : ""
              }`}
            >
              Home
            </Link>

            <Link
              to="/course-list"
              className="hover:text-cyan-600 transition-colors"
            >
              Courses
            </Link>

            <Link to="/about" className="hover:text-cyan-600 transition-colors">
              About
            </Link>

            {/* Conditional links only shown when signed in */}
            {user && (
              <>
                <button
                  onClick={() => navigate("/educator")}
                  className="text-sm text-gray-700 hover:text-cyan-600 transition-colors"
                >
                  {isEducator ? "Educator Dashboard" : "Become Educator"}
                </button>

                <Link
                  to="/my-enrollments"
                  className="text-sm text-gray-700 hover:text-cyan-600 transition-colors"
                >
                  My Enrollments
                </Link>
              </>
            )}
          </div>

          {/* Right: auth / user (desktop) */}
          <div className="hidden md:flex items-center gap-4">
            {user ? (
              <div className="flex items-center gap-4">
                <UserButton />
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <button
                  onClick={() => openSignIn()}
                  className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium shadow-md hover:brightness-95 transition"
                >
                  Create account
                </button>
              </div>
            )}
          </div>

          {/* Mobile: compact controls */}
          <div className="md:hidden flex items-center gap-3">
            {/* Quick links condensed for mobile */}
            <div className="flex items-center gap-2 text-sm text-gray-600">
              {user && (
                <>
                  <button
                    onClick={() => navigate("/educator")}
                    className="text-xs px-2 py-1 rounded text-gray-700 bg-white/60 border border-gray-200"
                  >
                    {isEducator ? "Educator" : "Become"}
                  </button>
                  <Link
                    to="/my-enrollments"
                    className="text-xs px-2 py-1 rounded text-gray-700 bg-white/60 border border-gray-200"
                  >
                    Enrolls
                  </Link>
                </>
              )}
            </div>

            {user ? (
              <UserButton />
            ) : (
              <button
                onClick={() => openSignIn()}
                className="p-2 rounded-full bg-white/90 border border-gray-200 shadow-sm"
                aria-label="Sign in or create account"
              >
                <img src={assets.user_icon} alt="user" className="w-5 h-5" />
              </button>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
