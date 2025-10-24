import React from 'react'
import { Route, Routes, useMatch } from 'react-router-dom'
import Home from './pages/student/Home'
import Courselist from './pages/student/CoursesList'
import Coursedetails from './pages/student/Coursedetails'
import Myenrollments from './pages/student/Myenrollments'
import Player from './pages/student/Player';
import Loading from './components/student/Loading'
import Educator from './pages/educator/Educator'
import Dashboard from './pages/educator/Dashbard'
import AddCourses from './pages/educator/Addcourse'
import Mycourses from './pages/educator/Mycourses'
import Studentenrolled from './pages/educator/Studentsenrolled'
import Navbar from './components/student/Navbar'
import "quill/dist/quill.snow.css";

const App = () => {

    const iseduatorRoute = useMatch('/educator/*')

  return (
    <div className='text-default min-h-screen bg-white'>
      {!iseduatorRoute && <Navbar/>}
      
      <Routes>

        <Route path='/' element={ <Home /> } />
        <Route path='/course-list' element={ <Courselist /> } />
        <Route path='/course-list/:input' element={ <Courselist /> } />
        <Route path='/course/:id' element={ <Coursedetails /> } />
        <Route path='/my-enrollments' element={ <Myenrollments /> } />
        <Route path='/course-list' element={ <Courselist /> } />
        <Route path='/player/:courseId' element={ < Player/> } />
        <Route path='/loading/:path' element={ <Loading /> } />

        <Route path='/educator' element={< Educator />}>
          <Route path='/educator' element={<Dashboard/>}  />
          <Route path='add-course' element={<AddCourses/>}  />
          <Route path='my-course' element={<Mycourses/>}  />
          <Route path='student-enrolled' element={<Studentenrolled/>}  />
        </Route>
        

      </Routes>
    </div>
  )
}

export default App
