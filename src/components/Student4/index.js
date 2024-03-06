import React from 'react';
import './student4.css'

const Student4 = () => {
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
              <h2 className='name-heading'>NAME : Student4</h2>
              <p className='student-details'>Gender : Male</p>
              <p className='student-details'>AGE : 27</p>
              <p className='student-details'>ADDRESS : Chamorshi</p>
              <p className='student-details'>EDUCATION : Bsc Agree</p>
              <p className='student-details'>PHONE NO. : 2222222222</p>
            </div>
            
        </div>
    </div>
  )
}

export default Student4