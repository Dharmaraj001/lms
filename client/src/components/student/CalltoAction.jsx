import React from 'react'
import { assets } from '../../assets/assets'

const CalltoAction = () => {
  return (
    <section className="relative w-full py-24 bg-gradient-to-b from-white via-cyan-50 to-white overflow-hidden">
      {/* Background glow for extra flair */}
      <div className="absolute inset-0 flex justify-center">
        <div className="w-[70%] h-[50%] bg-cyan-100/40 blur-3xl rounded-full opacity-60 top-0"></div>
      </div>

      <div className="relative flex flex-col items-center text-center gap-6 px-6 md:px-10">
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-800 leading-snug max-w-3xl">
          Master <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">anything</span>, anytime, anywhere
        </h1>

        <p className="text-gray-600 max-w-xl md:text-lg text-sm leading-relaxed">
          Expand your skills with world-class mentors and on-demand lessons designed to fit your lifestyle. Learn at your own pace — wherever curiosity takes you.
        </p>

        <div className="flex flex-wrap justify-center items-center font-medium gap-5 mt-6">
          <button className="px-8 py-3 md:px-10 md:py-4 rounded-md text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-cyan-500 hover:to-blue-600 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
            Get Started
          </button>

          <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors duration-300 cursor-pointer">
            Learn More 
            <img 
              src={assets.arrow_icon} 
              alt="Arrow icon" 
              className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
            />
          </button>
        </div>
      </div>
    </section>
  )
}

export default CalltoAction
