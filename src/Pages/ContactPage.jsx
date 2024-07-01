import { useEffect } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'


export default function ContactPage() {


    useEffect(()=>{
        AOS.init({duration:2000});
    
       },[])


    return (

        <>
            <div className="contact-container" id="section5">
                <h2> Contact</h2>


                <form action="" className="" data-aos='flip-right'>

                    <div className="form">
                        <input type="name" placeholder="Name" className="input" />
                        <span className="input-border"></span>
                    </div>
                    <div className="form"> <input type="email" placeholder="E-mail" className="input" />
                        <span className="input-border"></span></div>
                    <div className="form"><input type="number" placeholder="Number" className="input" />
                        <span className="input-border"></span></div>
                    <div className="form">
                        <input type="text" placeholder="Message" className="input" />
                        <span className="input-border"></span>
                    </div>




                    <button>Send</button>
                </form>




                <div className="contact">
                    <div className="phone">
                        <i className="fa-solid fa-phone " style={{ color: "#fafafa" }} />
                        +91 9751552404
                    </div>
                    <div className="mail">

                        <a href="mailto:nithishgsn000@gmail.com"><i className="fa-regular fa-envelope " style={{ color: "#fcfcfc" }} />Send Email</a>
                    </div>
                    <div className="instagram">

                        <a href="https://instagram.com/nitty_gsn/?next=%2F" > <i className="fa-brands fa-instagram " style={{ color: "#ffffff" }} />Instagram</a>
                    </div>
                </div>
            </div>



            {/*----------------------------------------- Footer --------------------------------------- */}

            <footer>
                <div className="footer-nav">
                    <a href="#section1" className="footer-item">
                        Home
                    </a>
                    <a href="#section2" className="footer-item">
                        Projects
                    </a>
                    <a href="#section3" className="footer-item">
                        Education
                    </a>
                    <a href="#section4" className="footer-item">
                        Skills
                    </a>
                    <a href="#section5" className="footer-item">
                        Contact
                    </a>
                </div>
                <div className="links">
                    <a href="https://github.com/nithigsn" >
                        <i className="fa-brands fa-github" style={{ color: "#fffbfb" }} />
                    </a>
                    <a href="https://linkedin.com/in/nithish-kumar-gs/" >
                        <i className="fa-brands fa-linkedin" style={{ color: "#ffffff" }} />
                    </a>
                    <a href="https://instagram.com/nitty_gsn/?next=%2F" >
                        <i className="fa-brands fa-instagram " style={{ color: "#ffffff" }} />
                    </a>
                </div>
                <div className="copyright">
                    <p> All rights reserved.</p>
                </div>
            </footer>

        </>
    );
}