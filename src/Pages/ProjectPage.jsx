import { useEffect } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'



export default function ProjectPage() {

    useEffect(() => {
        AOS.init({ duration: 2000 });

    }, [])

    return (


        <div className="project-page" id="section2">
            <h2>Projects</h2>
            <div className="project-container">
                <div className="todo-project" data-aos='fade-right'>
                    <h5>Task Champ</h5>
                    <div className="todo-project-img" />
                    <div className="about-project">
                        <p>
                            "My todo list project is a simple yet effective task management tool
                            that helps users stay organized by allowing them to create,
                            prioritize, and track their tasks. It provides a user-friendly
                            interface where tasks can be added,edited and
                            deleted, ensuring seamless task management and productivity
                            enhancement."
                        </p>
                        <button><a href="https://champtodo.vercel.app/">Click Here</a></button>
                    </div>
                </div>
                <div className="ncs-project" data-aos='fade-left'>
                    <h5>Sonique Wave</h5>
                    <div className="ncs-project-img" />
                    <div className="about-project">
                        <p>
                            "The music player project I developed is a versatile application
                            designed to play audio files in various formats. It offers a sleek
                            and intuitive interface with features such as play, pause, next and previous functionalities.
                            Users can create playlists,manage their music library. It aims to provide a seamless listening
                            experience for users while offering robust functionality and ease of
                            use."
                        </p>
                        <button>Click Here</button>
                    </div>
                </div>
            </div>
        </div>


    );
}