import React from 'react';
import resume from '../json/resume.json'

const Resume = () => {

  return (
    <iframe
      className=""
      src={resume[0].link}
      width="100%"
      height="800px"
      title="Richard Wang"
    />

  )
}


export default Resume;