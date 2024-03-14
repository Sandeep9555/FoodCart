import React from 'react'
import User from './User'
import UserClass from './UserClass'


const About = () => {
  return (
    <div className='about'>
      <h1>About</h1>
      <h2>This is Namaste React Web Series</h2>
      <UserClass name={"Sandeep Singh1"} location={"shimla"} />
    </div>
  )
}

export default About