import React from 'react';

const Skill = () => {
  return (
    <div className='container-fluid'>
      <div className='card m-2'>
        <p className='card-title text-center m-2'> My Skills</p>
        <div className='card-body'>
          Python
          <div className='progress m-2'>
            <div
              className='progress-bar bg-warning'
              role='progressbar'
              style={{ width: '80%' }}
            />
          </div>
          Node JS
          <div className='progress m-2'>
            <div
              className='progress-bar bg-danger'
              role='progressbar'
              style={{ width: '90%' }}
            />
          </div>
          React JS
          <div className='progress m-2'>
            <div
              className='progress-bar bg-primary'
              role='progressbar'
              style={{ width: '80%' }}
            />
          </div>
          Bootstrap
          <div className='progress m-2'>
            <div
              className='progress-bar bg-success'
              role='progressbar'
              style={{ width: '50%' }}
            />
          </div>
          MongoDB
          <div className='progress m-2'>
            <div
              className='progress-bar bg-dark'
              role='progressbar'
              style={{ width: '85%' }}
            />
          </div>
          React Native
          <div className='progress m-2'>
            <div
              className='progress-bar bg-secondary'
              role='progressbar'
              style={{ width: '95%' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
