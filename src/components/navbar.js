/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/rules-of-hooks */
import React , { useEffect , useState } from 'react';

function navbar(props){

    const [isActive , setIsActive] = useState({
        home:true,
        // aboutMe:false,
        // education:false,
        // experience:false,
        // skills:false,
        // contact:false
    })

    const [sections , setSection] = useState([])
    const [navLi , setNavLi] = useState([])

    useEffect(() => {
        if (sections.length === 0) {
             let sections = document.querySelectorAll("section");
             setSection(sections)
        }

        if (navLi.length === 0) {
            let navLi = document.querySelectorAll("nav .container .navbar-nav a");
            setNavLi(navLi)
       }
       
        // console.log("🚀 ~ file: navbar.js ~ line 19 ~ navbar ~ sections", sections)
        // const navLi = document.querySelectorAll("nav .container .navbar-nav a");
        // console.log("🚀 ~ file: navbar.js ~ line 19 ~ navbar ~ navLi", navLi)
    }, [sections,navLi])

    // const sections = document.querySelectorAll("section");
    // console.log("🚀 ~ file: navbar.js ~ line 19 ~ navbar ~ sections", sections)
    // const navLi = document.querySelectorAll("nav .container .navbar-nav a");
    // console.log("🚀 ~ file: navbar.js ~ line 19 ~ navbar ~ navLi", navLi)

    window.addEventListener("scroll", () => {
      let current = "";
     let pageYOffsetValue = window.pageYOffset
        sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffsetValue >= sectionTop - sectionHeight / 2) {
          current = section.getAttribute("id");
        }
      });
      navLi.forEach((li) => {
        li.classList.remove("nav-active");
        if (li.classList.contains(current)) {
          li.classList.add("nav-active");
        }
      });
    });


    
    return(
        <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
{/*             
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button> */}

        <div className="collapse navbar-collapse justify-content-center container" id="navbarNavAltMarkup">
             <div className="navbar-nav text-center ">
             <a className={`nav-item nav-link pl-4 pr-4 Section-Home ${isActive.home === true ? 'nav-active' : ''}`} onClick={() => {setIsActive({home:true})}} href="#">Home <span class="sr-only">(current)</span></a>
            <a className={`nav-item nav-link pl-4 pr-4 Section-AboutMe ${isActive.aboutMe === true ? 'nav-active' : ''}`} onClick={() => {setIsActive({aboutMe:true})}} href="#section-aboutme">About Me</a>
            <a className={`nav-item nav-link pl-4 pr-4 Section-Education ${isActive.education === true ? 'nav-active' : ''}`} onClick={() => {setIsActive({education:true})}} href="#section-Education">Education</a>
            <a className={`nav-item nav-link pl-4 pr-4 Section-Experience ${isActive.experience === true ? 'nav-active' : ''}`} onClick={() => {setIsActive({experience:true})}} href="#section-Experience">Experience</a>
            <a className={`nav-item nav-link pl-4 pr-4 Section-Skills ${isActive.skills === true ? 'nav-active' : ''}`} onClick={() => {setIsActive({skills:true})}} href="#section-Skills">Skills</a>
            <a className={`nav-item nav-link pl-4 pr-4 Section-Contact ${isActive.contact === true ? 'nav-active' : ''}`} onClick={() => {setIsActive({contact:true})}} href="#section-Contact">Contact</a>
      
    </div>
  </div>
</nav>
        </div>

    );
}

export default navbar;