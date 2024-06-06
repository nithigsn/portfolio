export default function ContactPage() {
    return (

        <>
            <div className="contact-container" id="section5">
                <h2> Contact</h2>
                <form action="">
                    <input type="name" placeholder="Name" />
                    <input type="email" placeholder="E-mail" />
                    <input type="number" placeholder="Number" />
                    <input type="text" placeholder="Message" />
                    <button>Send</button>
                </form>
                <div className="contact">
                    <div className="phone">
                        {" "}
                        <i className="fa-solid fa-phone " style={{ color: "#fafafa" }} />
                        +91 9751552404
                    </div>
                    <div className="mail">
                        <i className="fa-regular fa-envelope " style={{ color: "#fcfcfc" }} />
                        <a href="mailto:nithishgsn000@gmail.com">Send Email</a>
                    </div>
                    <div className="instagram">
                        <i className="fa-brands fa-instagram " style={{ color: "#ffffff" }} />
                        <a href="" >
                            instagram
                        </a>
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
                    <p>© 2024 NithishKumar.com. All rights reserved.</p>
                </div>
            </footer>

        </>
    );
}