import { AboutMe } from "./componets/AboutMe";
import { FeaturedProjects } from "./componets/FeaturedProjects";
import { Navbar } from "./componets/NavBar";
import { PortfolioFooter } from "./componets/PortfolioFooter";
import { PortfolioHero } from "./componets/PortfolioHero";
import { PortfolioTestimonials } from "./componets/PortfolioTestimonials";
import { Services } from "./componets/Service";
import { WorkProcess } from "./componets/WorkProcess";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <PortfolioHero />
      <AboutMe />
      <FeaturedProjects />
      <WorkProcess />
      <PortfolioTestimonials />
      {/* <Services /> */}
      <PortfolioFooter />
    </div>
  );
}
