import React from 'react';

import skills01 from './pic-skills/skills-01.png'
import skills02 from './pic-skills/skills-02.png'
import skills03 from './pic-skills/skills-03.png'
import skills04 from './pic-skills/skills-04.png'
import skills05 from './pic-skills/skills-05.png'

console.log(skills01);
console.log(skills02);
console.log(skills03);
console.log(skills04);
console.log(skills05);

function skills(){


    return(
        <div className='container-AboutMe skills' id='section-Skills'>
        <div className=' header-02 font-weight-bold pt-5'>
            Skills 
        </div>

        <div className ="text-center pb-5">
            <div className='row'>
                <div className='col-4 '> <img src={skills01} className='photo' alt="skills01" />
                    <div className='skills-text'> Beginner</div>
                </div>
                <div className='col-4'>  <img src={skills02} className='photo' alt="skills02" /> 
                    <div className='skills-text'> Beginner</div>
                </div>
                <div className='col-4'> <img src={skills03} className='photo' alt="skills03" /> 
                    <div className='skills-text'> Beginner</div>
                </div>
            </div>
            <div className='row d-flex justify-content-center '>
                 <div className='col-4'> <img src={skills04} className='photo' alt="skills04" /> 
                     <div className='skills-text'> Learning </div>
                 </div>
                 <div className='col-4'> <img src={skills05} className='photo' alt="skills05" />
                    <div className='skills-text'> Learning </div>
                  </div>
            </div>
        
       
         
         
         
        </div>
        </div>
    );
}

export default skills;