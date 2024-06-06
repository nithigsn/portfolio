import ContactPage from "./Pages/ContactPage";
import EducationandExperience from "./Pages/EducationandExperiencePage";
import HomePage from "./Pages/HomePage";
import ProjectPage from "./Pages/ProjectPage";
import SkillsPage from "./Pages/SkillsPage";


export default function Portfolio(){
  return(

    <>
    <HomePage/>
    <ProjectPage/>
    <EducationandExperience/>
    <SkillsPage/>
    <ContactPage/>

    </>
  );
}