import React from 'react';
import './student3.css'

const Student3 = () => {
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
              <h2 className='name-heading'>NAME : Student3</h2>
              <p className='student-details'>Gender : Male</p>
              <p className='student-details'>AGE : 30</p>
              <p className='student-details'>ADDRESS : Armori</p>
              <p className='student-details'>EDUCATION : Bsc cs</p>
              <p className='student-details'>PHONE NO. : 1111111111</p>
            </div>
            
        </div>
    </div>
  )
}

export default Student3