import AboutMe from "../components/AboutMe";
import TechStack from "../components/TechStack";
import PersonalRecommendations from "../components/PersonalRecommendations";
import Resume from "./Resume";
import AnimatedContainer from "../components/AnimatedContainer";
import Interchange from "../components/Interchange";
import { certificates } from "../data/certificates";
import CertificateCarousel from "../components/CertificateCarousel";

const About = () => {
  return (
    <AnimatedContainer className="space-y-8">
      <AboutMe />
      <Interchange/>
      <TechStack />
      <PersonalRecommendations />
      <CertificateCarousel certificates={certificates} autoPlayInterval={5000} />
      <Resume />
    </AnimatedContainer>
  );
};

export default About;
