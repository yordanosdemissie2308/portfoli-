import { useRef, useState } from "react";
import { AboutMe } from "./componets/AboutMe";
import { FeaturedProjects } from "./componets/FeaturedProjects";
import { NavBar } from "./componets/NavBar";
import { PortfolioFooter } from "./componets/PortfolioFooter";
import { PortfolioHero } from "./componets/PortfolioHero";
import { PortfolioTestimonials } from "./componets/PortfolioTestimonials";
import { WorkProcess } from "./componets/WorkProcess";
import { Contact } from "./componets/Contact";

export default function App() {
  const [showContact, setShowContact] = useState(false);
  const contactRef = useRef<HTMLDivElement>(null);

  const handleContactClick = () => {
    setShowContact(true);

    // Optional: scroll smoothly to contact section
    setTimeout(() => {
      contactRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="min-h-screen">
      {/* Pass the click handler to NavBar */}
      <NavBar onContactClick={handleContactClick} />

      {/* Main sections */}
      <PortfolioHero onContactClick={handleContactClick} />
      <AboutMe />
      <FeaturedProjects />
      <WorkProcess />
      <PortfolioTestimonials />

      {/* Show contact only when requested */}
      {showContact && (
        <div ref={contactRef}>
          <Contact />
        </div>
      )}

      <PortfolioFooter />
    </div>
  );
}
