import React from 'react';

const Education = () => {
  return (
    <div className='container'>
      <div className='card m-2'>
        <p className='card-title text-center m-2'>My education</p>

        <div className='card-body'>
          <ul className='list-group-item-warning'>
            <li className='lead list-unstyled'>
              <span className='fa fa-graduation-cap' /> Education
            </li>

            <li>Bachelor of science in engineering</li>
            <li>Master of construction management </li>
            <li>Full stack developer Bootcamp</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Education;
