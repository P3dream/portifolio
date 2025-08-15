import Resume from "./Resume";
import AboutMe from "../components/AboutMe";
import PersonalRecommendations from "../components/PersonalRecommendations";
import TechStack from "../components/TechStack";

const About = () => {
  return (
      <>
        <AboutMe/>
        <br></br>
        <TechStack/>
        <br></br>
        <PersonalRecommendations/>
        <br></br>
        <Resume></Resume>
      </>
  );
};

export default About;
