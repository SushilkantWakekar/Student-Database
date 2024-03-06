import React from 'react';
import './student6.css'

const Student6 = () => {
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
              <h2 className='name-heading'>NAME : Student6</h2>
              <p className='student-details'>Gender : Male</p>
              <p className='student-details'>AGE : 25</p>
              <p className='student-details'>ADDRESS : Aheri</p>
              <p className='student-details'>EDUCATION : BTech</p>
              <p className='student-details'>PHONE NO. : 5555555555</p>
            </div>
           
        </div>
    </div>
  )
}

export default Student6