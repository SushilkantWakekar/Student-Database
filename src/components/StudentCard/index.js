import React from 'react';
import {Link} from 'react-router-dom';
import './studentCard.css'

const StudentCard = props => {
 
    const {studentDetails} = props ;
    const {id, name, imageUrl}   = studentDetails ;

  return (
    <li className="student-item">
      <Link to={`/student-info/${id}`} className="link">
        <img src={imageUrl} alt={name} className="student-logo" />
        <p className="student-name">{name}</p>
      </Link>
    </li>
  )
}

export default StudentCard