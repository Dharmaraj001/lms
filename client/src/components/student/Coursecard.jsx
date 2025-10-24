import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { Appcontext } from '../../context/Appcontext'
import { Link } from 'react-router-dom'

const Coursecard = ({course}) => {

  const {currency, calculaterating} = useContext(Appcontext)

  return (
   <Link
  to={`/course/${course._id}`}
  onClick={() => scrollTo(0, 0)}
  className="group flex flex-col border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-[1.01]"
>
  {/* Course Image */}
  <div className="relative w-full h-48 sm:h-52 md:h-56 overflow-hidden">
    <img
      src={course.courseThumbnail}
      alt={course.courseTitle}
      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
    />
    {course.discount > 0 && (
      <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full shadow">
        {course.discount}% OFF
      </span>
    )}
  </div>

  {/* Content */}
  <div className="p-4 flex flex-col grow">
    <h3 className="text-base md:text-lg font-semibold text-gray-900 line-clamp-2">
      {course.courseTitle}
    </h3>

    <p className="text-sm text-gray-500 mt-1 truncate">BrainBox</p>

    {/* Ratings */}
    <div className="flex items-center space-x-2 mt-3">
      <p className="text-sm font-medium">{calculaterating(course)}</p>
      <div className="flex space-x-0.5">
        {[...Array(5)].map((_, i) => (
          <img key={i} src={i<Math.floor(calculaterating(course)) ? assets.star : assets.star_blank} alt="star" className="w-4 h-4" />
        ))}
      </div>
      <p className="text-sm text-gray-500">{course.courseRatings.length}</p>
    </div>

    {/* Price */}
    <p className="mt-3 text-base md:text-lg font-semibold text-gray-800">
      {currency}
      {(course.coursePrice - (course.discount * course.coursePrice) / 100).toFixed(2)}
    </p>
  </div>
</Link>


  )
}

export default Coursecard
