export default function Portfolio() {
  return (
    <>
      {/*-------------------------------------- Home Page -------------------------------------------*/}
      <div className="home" id="section1">
        {/* header */}
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
              <a href="www.linkedin.com/in/nithish-kumar-gs/" >
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
      {/*---------------------------------------------- Project Page-------------------------------------------------------*/}
      <div className="project-page" id="section2">
        <h2>Projects</h2>
        <div className="project-container">
          <div className="todo-project">
            <h5>ToDo List</h5>
            <div className="todo-project-img" />
            <div className="about-project">
              <p>
                "My todo list project is a simple yet effective task management tool
                that helps users stay organized by allowing them to create,
                prioritize, and track their tasks. It provides a user-friendly
                interface where tasks can be added, marked as completed, edited, and
                deleted, ensuring seamless task management and productivity
                enhancement."
              </p>
              <button>Click Here</button>
            </div>
          </div>
          <div className="ncs-project">
            <h5>NCS Player</h5>
            <div className="ncs-project-img" />
            <div className="about-project">
              <p>
                "The music player project I developed is a versatile application
                designed to play audio files in various formats. It offers a sleek
                and intuitive interface with features such as play, pause, skip,
                shuffle, and repeat functionalities. Users can create playlists,
                manage their music library, and customize the player's appearance to
                suit their preferences. It aims to provide a seamless listening
                experience for users while offering robust functionality and ease of
                use."
              </p>
              <button>Click Here</button>
            </div>
          </div>
        </div>
      </div>
      {/*------------------------------------ Education Page-------------------------------------------------*/}
      <div className="edu-container" id="section3">
        <h2>Education</h2>
        <div className="wrap">
          <div className="timeline">
            <h3>Bacheleor Of Computer Science</h3>
            <p>June 2018 - June 2021</p>
          </div>
          <div className="center">
            <div className="icon">
              <i
                className="fa-solid fa-building-columns fa-bounce"
                style={{ color: "#f7f7f7" }}
              />
            </div>
            <div className="line" />
          </div>
          <div className="content">
            <h3>CMS College Of Commerce and Science</h3>
            <p>
              Words Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Accusamus, harum. Hic distinctio quod ratione ad harum ducimus sunt
              nostrum officia! Laudantium vel laborum voluptates eveniet sequi
              quibusdam quod quam laboriosam.
            </p>
          </div>
        </div>
        <h2>Experience</h2>
        <div className="wrap">
          <div className="timeline">
            <h3>Freelancing</h3>
            <p>April 2024 - Till</p>
          </div>
          <div className="center">
            <div className="icon">
              <i
                className="fa-solid fa-briefcase fa-bounce"
                style={{ color: "#f7f7f7" }}
              />
            </div>
            <div className="line" />
          </div>
          <div className="content">
            <h3>Full Stack Developer</h3>
            <p>
              Words Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Accusamus, harum. Hic distinctio quod ratione ad harum ducimus sunt
              nostrum officia! Laudantium vel laborum voluptates eveniet sequi
              quibusdam quod quam laboriosam.
            </p>
          </div>
        </div>
        <div className="wrap">
          <div className="timeline">
            <h3>
              L&amp;T Financial <br />
              Services
            </h3>
            <p>May 2022 - July 2023</p>
          </div>
          <div className="center">
            <div className="icon">
              <i
                className="fa-solid fa-briefcase fa-bounce"
                style={{ color: "#f7f7f7" }}
              />
            </div>
            <div className="line" />
          </div>
          <div className="content">
            <h3>Sales Officer</h3>
            <p>
              Words Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Accusamus, harum. Hic distinctio quod ratione ad harum ducimus sunt
              nostrum officia! Laudantium vel laborum voluptates eveniet sequi
              quibusdam quod quam laboriosam.
            </p>
          </div>
        </div>
      </div>
      {/*------------------------ Skills --------------------------*/}
      <div className="skill-two" id="section4">
        <h2>Skills</h2>

        <div className="skillbar-container">

          <div className="bar">

            <div className="info">
              <span>HTML</span>
            </div>
            <div className="progress-line-html html">
              <span></span>
            </div>


          </div>


          <div className="bar">

            <div className="info">
              <span>Css</span>
            </div>
            <div className="progress-line-css css">
              <span></span>
            </div>


          </div>

          <div className="bar">

            <div className="info">
              <span>Javascript</span>
            </div>
            <div className="progress-line-js js">
              <span></span>
            </div>


          </div>

          <div className="bar">

            <div className="info">
              <span>React.js</span>
            </div>
            <div className="progress-line-react react">
              <span></span>
            </div>


          </div>

          <div className="bar">

            <div className="info">
              <span>Node.js</span>
            </div>
            <div className="progress-line-node node">
              <span></span>
            </div>


          </div>

          <div className="bar">

            <div className="info">
              <span>Express.js</span>
            </div>
            <div className="progress-line-express express">
              <span></span>
            </div>


          </div>

          <div className="bar">

            <div className="info">
              <span>Mongo DB</span>
            </div>
            <div className="progress-line-mongo mongo">
              <span></span>
            </div>


          </div>



          <div className="bar">

            <div className="info">
              <span>Github</span>
            </div>
            <div className="progress-line-git   p-line git">
              <span></span>
            </div>


          </div>








        </div>


      </div>





      {/*------------------------ About ------------------*/}
      <div className="about-page">
        <div className="about-container"></div>
      </div>
      {/*-------------------------------- Contact Page --------------------------------*/}
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
      {/*---------------------- Footer ----------------------------------------*/}
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
          <a href="www.linkedin.com/in/nithish-kumar-gs/" >
            <i className="fa-brands fa-linkedin" style={{ color: "#ffffff" }} />
          </a>
          <a href="" >
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