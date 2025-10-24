import { createContext, useEffect, useState } from "react";
import { dummyCourses } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import humanizeDuration from 'humanize-duration'

export const Appcontext = createContext();  

export const AppcontexProvider = (props) => {

    const currency = import.meta.env.VITE_CURRENCY

    const navigate = useNavigate()

    const [allCourses, setallCorses] = useState([])
    const [isEducator, setisEducator] = useState(true)
    const [enrolledCourses, setenrolledCourses] = useState([])

    // Fetch all courses
    const fetchallcourses = async () => {
        setallCorses(dummyCourses)
    }

    //Function to calculate average rating of course
    const calculaterating = (course) => {
        if(course.courseRatings.length === 0){
            return 0;
        }
        let totalrating = 0
        course.courseRatings.forEach(rating => {
            totalrating += rating.rating
        })
        return totalrating / course.courseRatings.length
    }

    //Function to calculate chapter time
    const calculatechapterTime = (chapter)=> {
        let time = 0
        chapter.chapterContent.map((lecture)=> time += lecture.lectureDuration)
        return humanizeDuration(time * 60 * 1000, {units: ['h', 'm']})
    }

    //Function to Calculate course duration
    const calculateCourseDuration = (course)=> {
        let time = 0

        course.courseContent.map((chapter)=> chapter.chapterContent.map(
            (lecture) => time += lecture.lectureDuration 
        ))

        return humanizeDuration(time * 60 * 1000, {units: ['h', 'm']})
    }

    //Function to Calculate number of lectures in the course
    const calculateNOofLectures = (course) =>{
        let totalLectures = 0;
        course.courseContent.forEach(chapter => {
            if(Array.isArray(chapter.chapterContent)){
                totalLectures += chapter.chapterContent.length
            }
        });
        return totalLectures;
    }

    //Fetch user Enrolled Courses
    const fetchUserEnrolledCourses = async () => {
        setenrolledCourses(dummyCourses)
    }

    useEffect(() => {
        fetchallcourses()
        fetchUserEnrolledCourses()
    },[])

    const value = {
        currency, allCourses, navigate, calculaterating, isEducator, setisEducator, calculateNOofLectures, calculateCourseDuration, calculatechapterTime, enrolledCourses, fetchUserEnrolledCourses
    }
    return (
        <Appcontext.Provider value={value}>
            {props.children}
        </Appcontext.Provider>
    )
}

export default Appcontext; 
