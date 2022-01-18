import React from 'react';


import profile from './pic-profile/profile.jpg'
import banner from './pic-profile/banner.jpg'


console.log(profile);
console.log(banner);


function Banner() {
    return(
        <div className='Banner'>

        
            <div className=" d-flex justify-content-center"> <img src={banner} className='Banner-b' alt="banner" />
       
         </div>
         
    
 
        </div>
    );
}

export default Banner;