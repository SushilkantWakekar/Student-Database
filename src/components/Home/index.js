import React from 'react';
import './home.css';

import StudentCard from '../StudentCard';

const studentData = [
    {
        id : 'student1',
        name : 'student1',
        imageUrl : 'https://res.cloudinary.com/sushwakekar/image/upload/v1709666230/student_hdabcj.jpg'
    },
    {
        id : 'student2',
        name : 'student2',
        imageUrl : 'https://res.cloudinary.com/sushwakekar/image/upload/v1709666230/student_hdabcj.jpg'
    },
    {
        id : 'student3',
        name : 'student3',
        imageUrl : 'https://res.cloudinary.com/sushwakekar/image/upload/v1709666230/student_hdabcj.jpg'
    },
    {
        id : 'student4',
        name : 'student4',
        imageUrl : 'https://res.cloudinary.com/sushwakekar/image/upload/v1709666230/student_hdabcj.jpg'
    },
    {
        id : 'student5',
        name : 'student5',
        imageUrl : 'https://res.cloudinary.com/sushwakekar/image/upload/v1709666230/student_hdabcj.jpg' 
    },
    {
        id : 'student6',
        name : 'student6',
        imageUrl : 'https://res.cloudinary.com/sushwakekar/image/upload/v1709666230/student_hdabcj.jpg'
    },
];

const renderStudentList = () => {
    return(
        <ul className="student-list">
            {
                studentData.map( eachData =>
                    
                    (
                        <StudentCard studentDetails = {eachData} key={eachData.id}/>
                    ))
            }
        </ul>
    )
}

const Home = () => {
  return (
    <div className="home-route-container">
        <div className="student-list-container">
            <div className="student-data-heading-conatiner">
                <h1 className="student-data-heading">Student Data</h1>
            </div>
            {renderStudentList()}
        </div>
    </div>
  )
}

export default Home