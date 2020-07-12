import React from 'react';
import { Container } from '../components/Grid';
import resume from '../json/resume.json'

const style = {
  height: "80vh",
  width: "100%"
}

const Resume = () => {

  return (
    <div className="mt-2">
      <Container other="vh-75">
        <div className="embed-responsive embed-responsive-4by3 z-depth-1-half" style={style}>
          <iframe
            className="embed-responsive-item"
            src={resume[0].link}
            title="Richard Wang"
          />
        </div>

        <a className="btn btn-primary mt-1" href={resume[0].download}>Download</a>

      </Container>
    </div>
  )
}


export default Resume;