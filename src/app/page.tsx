import Image from "next/image";
import Banner from "./Components/Banner/Banner";
import Card from "./Components/Card/Card";
import OurContribution from "./Components/OurContribution/OurContribution";
import ProjectSection from "./Components/ProjectSection/ProjectSection";
import Footer from "./Components/Footer/Footer";
import { SpaceContainer } from "./Components/SpaceContianer/SpaceContainer";

export default function Home() {
  return (
    <>
      <Banner />
      <SpaceContainer />
      <Card />
      <SpaceContainer />
      <OurContribution />
      <SpaceContainer />
      <ProjectSection />
      <SpaceContainer />
      <Footer />
    </>
  );
}
