import React from 'react'
import { assets } from '../../assets/assets'
import Searchbar from './Searchbar'

const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full md:pt-36 pt-20 px-7 md:px-0 space-y-7 text-center bg-gradient-to-b from-cyan-100/70'>

      <h1 className="text-5xl md:text-3xl relative font-bold text-grey-800 max-w-2xl mx-auto">
  👋 Empowering your mind with tools, insights, and innovation to help you 
  <span className="text-blue-600"> Think beyond limits.</span>
  <img 
    src={assets.sketch} 
    alt="sketch" 
    className="md:block hidden absolute -bottom-7 right-0" 
  />
</h1>


      <p className='md:block hidden text-grey-500 max-w-2xl mx-auto'>BrainBox is your go-to place to learn new things, test your skills, and unlock the creative power within you. <span className="text-blue-600">Start discovering your potential today!</span></p>

      <p className='md:hidden text-grey-500 max-w-sm mx-auto'>BrainBox blends technology, creativity, and knowledge to help you achieve excellence.</p>

      <Searchbar/>
    </div>
  )
}

export default Hero
