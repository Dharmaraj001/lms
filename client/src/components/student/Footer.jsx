import React from "react";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-12 w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-12 border-t border-gray-800">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand + blurb */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-3">
              <img src={assets.brainbox} alt="BrainBox logo" className="w-10 md:w-12" />
              <span className="text-xl font-semibold">BrainBox</span>
            </div>

            <p className="mt-4 text-sm text-gray-300 max-w-md">
              Upskill with bite-sized lessons, hands-on projects, and mentorship from industry experts.
              Build real skills, faster — whether you’re starting out or leveling up.
            </p>

            <div className="flex items-center gap-3 mt-6">
              {/* social icons if available in assets, else simple placeholders */}
              <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-white">
                <img src={assets.twitter_icon} alt="twitter" className="w-5 h-5" />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-white">
                <img src={assets.linkedin_icon} alt="linkedin" className="w-5 h-5" />
              </a>
              <a href="#" aria-label="YouTube" className="text-gray-400 hover:text-white">
                <img src={assets.youtube_icon} alt="youtube" className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col md:items-start items-center">
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="/" className="hover:text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-white transition">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white transition">
                  Contact
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-white transition">
                  Privacy policy
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col items-start">
            <h3 className="text-white font-semibold mb-3">Subscribe</h3>
            <p className="text-sm text-gray-300 mb-4">
              Get weekly tips, new course announcements, and curated resources right in your inbox.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                // hook into your subscribe API here
                // e.target.elements.email.value
              }}
              className="flex w-full max-w-sm gap-2"
            >
              <input
                name="email"
                type="email"
                placeholder="Enter your email"
                required
                className="flex-1 px-3 py-2 rounded bg-gray-800 border border-gray-700 text-gray-200 placeholder-gray-500 outline-none text-sm"
                aria-label="Email address"
              />
              <button
                type="submit"
                className="px-4 py-2 rounded bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-sm shadow"
              >
                Subscribe
              </button>
            </form>

            <p className="text-xs text-gray-400 mt-4">
              By subscribing you agree to our <a href="/privacy" className="underline">Privacy Policy</a>.
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-800 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} BrainBox. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
