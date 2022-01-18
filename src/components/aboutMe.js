import React from 'react';

import profile from './pic-profile/profile.jpg'


console.log(profile);

function aboutMe (){
    return (
        <div className='AboutMe' id='section-aboutme'>
    <div className="container-AboutMe">
  <div className="row">
      <div className="col-4 d-flex justify-content-center"> <img src={profile} className='photo-profile' alt="profile" />
    </div>
    <div className="col-8 text p-5" > 

     <div className="col-4 header-02 font-weight-bold pb-2">
     About Me
    
    </div>
      Hello. I'm Pheung. I graduated Naresuan University.
      I want to be proficient in front-end development and back-end development, 
      coding for the client-side and maintaining databases 
      and infrastructure server-side.
    </div>
     
  </div>
</div>
            
        </div>
    )
}

export default aboutMe;