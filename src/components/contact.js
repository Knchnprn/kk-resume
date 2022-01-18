import React from 'react';

import fb from './pic-contact/fb.png'
import gmail from './pic-contact/gmail.png'
import tel from './pic-contact/tel.png'


console.log(fb);
console.log(gmail);
console.log(tel);


function contact(){
    return(
        <div className='container-contact container-AboutMe' id='section-Contact'>
            <div className='header font-weight-bold pt-3 '> Contact </div>
            
            <div className =" pb-5  pt-4 ">
            <div className='row d-flex justify-content-center '>
                <div className='col-3 d-flex justify-content-center'> <img src={fb} className='photo-2' alt="fb" />
                </div>
                <div className='col-4 d-flex'> 
                    <div className='contact-text'> Kanchanaporn Kusonchotikul  </div>
                </div>
                
            </div>
            <div className='row d-flex justify-content-center'>
                
                <div className='col-3 d-flex justify-content-center'>  <img src={gmail} className='photo-2' alt="gmail" />
                </div>
                <div className='col-4 d-flex'> 
                    <div className='contact-text'> Kanchanaporn4428@gmail.com </div>
                </div>
               
            </div>
            <div className='row d-flex justify-content-center'>
               
                <div className='col-3 d-flex justify-content-center'> <img src={tel} className='photo-2' alt="tel" />
                </div>
                <div className='col-4 d-flex '> 
                    <div className='contact-text'> 093-1274428  </div>
                </div>
            </div>
       
         
        </div>
        </div>
        
    );
}

export default contact;