import AboutMe from "../components/AboutMe";
import TechStack from "../components/TechStack";
import PersonalRecommendations from "../components/PersonalRecommendations";
import Resume from "./Resume";
import AnimatedContainer from "../components/AnimatedContainer";
import Interchange from "../components/Interchange";

const About = () => {
  return (
    <AnimatedContainer className="space-y-8">
      <AboutMe />
      <Interchange/>
      <TechStack />
      <PersonalRecommendations />
      <Resume />
    </AnimatedContainer>
  );
};

export default About;
