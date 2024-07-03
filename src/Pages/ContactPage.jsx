import { useEffect, useState } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'


export default function ContactPage() {

    const [name, setName] = useState('');
    const [number, setNumber] = useState();
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState("");







    //on scroll transitions
    useEffect(() => {


        AOS.init({ duration: 2000 });

    }, [])






    function handleSend() {

        if (name && email && number && message) {
            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
        
            const raw = JSON.stringify({
                "name": name,
                "email": email,
                "number": number,
                "message": message
            });
        
            const requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: raw,
                redirect: "follow"
            };
        
            fetch("https://myportfolio-black-mu-95.vercel.app/user/contact", requestOptions)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    return response.json();
                })
                .then((result) => console.log(result))
                .catch((error) => console.error('There was a problem with the fetch operation:', error));
        } else {
            console.error('All fields (name, email, number, message) are required and must not be empty.');
        }
        
       
    }

    return (

        <>
            <div className="contact-container" id="section5">
                <h2> Contact</h2>


                <form action="post" className="" data-aos='flip-right'>

                    <div className="form">
                        <input type="name" placeholder="Name" className="input" value={name} onChange={(e) => setName(e.target.value)} />
                        <span className="input-border"></span>
                    </div>
                    <div className="form">
                        <input type="email" placeholder="E-mail" className="input" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <span className="input-border"></span></div>
                    <div className="form">
                        <input type="text" placeholder="Number" className="input" value={number} onChange={(e) => setNumber(e.target.value)} />
                        <span className="input-border"></span></div>
                    <div className="form">
                        <input type="text" placeholder="Message" className="input" value={message} onChange={(e) => setMessage(e.target.value)} />
                        <span className="input-border"></span>
                    </div>




                    <button onClick={handleSend}>Send</button>
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