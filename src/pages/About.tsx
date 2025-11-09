import AboutMe from "../components/AboutMe";
import TechStack from "../components/TechStack";
import PersonalRecommendations from "../components/PersonalRecommendations";
import Resume from "./Resume";
import AnimatedContainer from "../components/AnimatedContainer";
import Interchange from "../components/Interchange";
import Badges from "../components/Badges";
import {badges} from "../data/badges";

const About = () => {
  return (
    <AnimatedContainer className="space-y-8">
      <AboutMe />
      <Interchange/>
      <Badges badges={badges}/>
      <TechStack />
      <PersonalRecommendations />
      <Resume />
    </AnimatedContainer>
  );
};

export default About;
