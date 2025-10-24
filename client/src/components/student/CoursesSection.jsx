import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Appcontext } from "../../context/Appcontext";
import Coursecard from "./Coursecard";

const CoursesSection = () => {
  const { allCourses } = useContext(Appcontext);

  return (
    <section className="relative py-20 bg-gradient-to-b from-white via-cyan-50/40 to-white overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70%] h-60 bg-cyan-100/40 blur-3xl opacity-60 rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-8 md:px-16 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 leading-tight">
          Learn from <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">top-notch educators</span>
        </h2>

        <p className="text-gray-600 mt-4 max-w-2xl mx-auto md:text-lg text-sm leading-relaxed">
          Discover our top-rated courses across diverse categories. Whether you’re diving into <span className="font-medium text-gray-800">coding, design, or business</span>,
          our content is crafted to help you grow and achieve real results.
        </p>

        {/* Course grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-14">
          {allCourses.slice(0, 4).map((course, index) => (
            <div
              key={index}
              className="transform hover:-translate-y-2 transition-transform duration-300"
            >
              <Coursecard course={course} />
            </div>
          ))}
        </div>

        {/* Button */}
        <Link
          to={"/course-list"}
          onClick={() => scrollTo(0, 0)}
          className="inline-block mt-10 text-gray-700 border border-gray-300 hover:border-cyan-400 hover:text-cyan-600 px-10 py-3 rounded-md shadow-sm hover:shadow-md transition-all duration-300"
        >
          Show all courses
        </Link>
      </div>
    </section>
  );
};

export default CoursesSection;
