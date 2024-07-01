import { useEffect } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'


export default function SkillsPage() {
    useEffect(()=>{
        AOS.init({duration:2000});
    
       },[])

    return (

        <div className="skill-two" id="section4">
            <h2>Skills</h2>

            <div className="skillbar-container" data-aos='flip-left'>

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




    );
}