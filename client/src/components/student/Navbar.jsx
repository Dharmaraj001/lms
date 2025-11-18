import React, { useContext, useState, useEffect } from "react";
import { assets } from "../../assets/assets";
import { Link, useLocation } from "react-router-dom";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { Appcontext } from "../../context/Appcontext";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const { navigate, isEducator } = useContext(Appcontext);
  const location = useLocation();
  const isCourseListPage = location.pathname.includes("/course-list");

  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const [mobileOpen, setMobileOpen] = useState(false);

  const { openSignIn } = useClerk();
  const { user } = useUser();

  const logoSizeClass = isCourseListPage
    ? "w-8 md:w-10"
    : "w-10 md:w-12 lg:w-14";

  const linkClass =
    "relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-cyan-500 after:transition-all hover:after:w-full hover:text-cyan-600 font-medium transition-colors";

     const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setShowNav(false); // scrolling down → hide navbar
    } else {
      setShowNav(true); // scrolling up → show navbar
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`sticky z-50 backdrop-blur-xl bg-gray-50 shadow-md border-b rounded-2xl top-5 ml-5 mr-5 transition-transform duration-300 ${isCourseListPage ? "border-amber-200" : "border-gray-200"} ${showNav ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <nav className="flex items-center justify-between h-20">
          
          {/* 🔰 Logo */}
          <div
            className="flex items-center gap-3 cursor-pointer select-none"
            onClick={() => navigate("/")}
          >
            <img
              src={assets.brainbox}
              alt="BrainBox logo"
              className={`${logoSizeClass} object-contain drop-shadow-md`}
            />
            <span className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
              BrainBox
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10 text-gray-700">
            <Link to="/" className={linkClass}>
              Home
            </Link>

            <Link to="/course-list" className={linkClass}>
              Courses
            </Link>

            <Link to="/about" className={linkClass}>
              About
            </Link>

            {user && (
              <>
                <button
                  onClick={() => navigate("/educator")}
                  className="text-gray-700 hover:text-cyan-600 transition font-medium"
                >
                  {isEducator ? "Dashboard" : "Become Educator"}
                </button>

                <Link to="/my-enrollments" className={linkClass}>
                  Enrollments
                </Link>
              </>
            )}
          </div>

          {/* Desktop User Actions */}
          <div className="hidden md:flex items-center gap-5">
            {user ? (
              <UserButton />
            ) : (
              <button
                onClick={() => openSignIn()}
                className="px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-[1.03] transition hover:cursor-pointer"
              >
                Sign In
              </button>
            )}
          </div>

          {/* 📱 Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </nav>

        {/* 📱 Mobile Menu Slide */}
        {mobileOpen && (
          <div className="md:hidden bg-white/90 backdrop-blur-xl rounded-lg shadow-xl p-6 mt-3 space-y-5 text-gray-800 font-medium">
            <Link to="/" onClick={() => setMobileOpen(false)}>
              Home
            </Link>
            <Link to="/course-list" onClick={() => setMobileOpen(false)}>
              Courses
            </Link>
            <Link to="/about" onClick={() => setMobileOpen(false)}>
              About
            </Link>

            {user && (
              <>
                <button onClick={() => navigate("/educator")}>
                  {isEducator ? "Dashboard" : "Become Educator"}
                </button>

                <Link
                  to="/my-enrollments"
                  onClick={() => setMobileOpen(false)}
                >
                  Enrollments
                </Link>
              </>
            )}

            {user ? (
              <UserButton afterSignOutUrl="/" />
            ) : (
              <button
                onClick={() => {
                  openSignIn();
                  setMobileOpen(false);
                }}
                className="w-full py-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md"
              >
                Sign In
              </button>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
