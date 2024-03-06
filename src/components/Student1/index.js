import React from 'react';
import './student1.css'

const student1 = () => {
  return (
    <div className='student-details-container'>
        <div className='student-card'>
            <div className='student-img-container'>
                <img src='https://res.cloudinary.com/sushwakekar/image/upload/v1709666230/student_hdabcj.jpg'
                alt='student-img'
                className='student-img'
                />
            </div>
            <div>
                <h2 className='name-heading'>NAME : Student1</h2>
                <p className='student-details'>Gender : Male</p>
                <p className='student-details'>AGE : 28</p>
                <p className='student-details'>ADDRESS : Gadchiroli</p>
                <p className='student-details'>EDUCATION : MCA</p>
                <p className='student-details'>PHONE NO. : 0000000000</p>
            </div>
            
        </div>
    </div>
  )
}

export default student1