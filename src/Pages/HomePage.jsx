export default function HomePage() {
    return (


        
            
            <div className="home" id="section1">
                <header>
                    <div className="name">Nithish Kumar</div>
                    <div className="right-nav">
                        <a href="#section1" className="nav-item">
                            Home
                        </a>
                        <a href="#section2" className="nav-item">
                            Projects
                        </a>
                        <a href="#section3" className="nav-item">
                            Education
                        </a>
                        <a href="#section4" className="nav-item">
                            Skills
                        </a>
                        <a href="#section5" className="nav-item">
                            Contact
                        </a>
                    </div>
                </header>

                
                {/*--------- Main ---------*/}
                <main>
                    <div>
                        <div className="profile-picture" />
                    </div>
                    <div className="profile">
                        <h3>I'm Nithish Kumar</h3>
                        <h4>I'm a Full Stack Developer</h4>
                        <p>
                            Experienced full stack developer with over 5 years of hands-on
                            experience in designing, developing, and maintaining web applications.
                            Proficient in both front-end and back-end technologies, with a strong
                            understanding of software engineering principles. Adept at
                            collaborating with cross-functional teams to deliver high-quality,
                            scalable solutions that meet business objectives.
                        </p>
                        <div className="btn-profile">
                            <a href="https://github.com/nithigsn" >
                                <i className="fa-brands fa-github" style={{ color: "#fffbfb" }} />
                            </a>
                            <a href="https://linkedin.com/in/nithish-kumar-gs/" >
                                <i className="fa-brands fa-linkedin" style={{ color: "#ffffff" }} />
                            </a>
                        </div>
                        <div className="res">
                            <a className="resume" href="/Assets/" download="Nithish Resume">
                                Download Resume
                            </a>
                        </div>
                    </div>
                </main>
            </div>
        


    );
}