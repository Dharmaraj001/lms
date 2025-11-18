import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/educator/Navbar'
import Sidebar from '../../components/educator/Sidebar'
import Footer from '../../components/educator/Footer'
import { DollarSign, Users, BookOpen } from 'lucide-react'

const Educator = () => {
  const enrollments = [
    { student: 'Aarav Patel', course: 'Full Stack Web Development' },
    { student: 'Sneha Sharma', course: 'Data Structures & Algorithms' },
    { student: 'Rohan Mehta', course: 'React.js for Beginners' },
    { student: 'Priya Nair', course: 'Machine Learning Basics' },
    { student: 'Kunal Verma', course: 'Backend Development with Node.js' },
  ]

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />

        <div className="flex-1 p-6">
          {/* Dashboard Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            {/* Enrollments Card */}
            <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center justify-center hover:shadow-lg transition-all">
              <Users size={40} className="text-blue-600 mb-3" />
              <h3 className="text-gray-600 text-sm font-medium">Total Enrollments</h3>
              <p className="text-3xl font-semibold mt-1">5</p>
            </div>

            {/* Courses Card */}
            <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center justify-center hover:shadow-lg transition-all">
              <BookOpen size={40} className="text-green-600 mb-3" />
              <h3 className="text-gray-600 text-sm font-medium">Total Courses</h3>
              <p className="text-3xl font-semibold mt-1">8</p>
            </div>

            {/* Earnings Card */}
            <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center justify-center hover:shadow-lg transition-all">
              <DollarSign size={40} className="text-yellow-600 mb-3" />
              <h3 className="text-gray-600 text-sm font-medium">Total Earnings</h3>
              <p className="text-3xl font-semibold mt-1">$150</p>
            </div>
          </div>

          {/* Latest Enrollments Section */}
          <div className="bg-white shadow-md rounded-2xl p-6">
            <h2 className="text-lg font-semibold mb-4 border-b pb-2">
              Latest Enrollments
            </h2>
            <div className="space-y-3">
              {enrollments.map((enroll, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center bg-gray-50 rounded-lg p-3 hover:bg-gray-100 transition"
                >
                  <span className="font-medium text-gray-700">{enroll.student}</span>
                  <span className="text-sm text-gray-600">{enroll.course}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Educator
