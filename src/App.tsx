import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import MarqueeSection from "./components/MarqueeSection";
import Click from "./components/Click";
import CardsSection from "./components/CardsSection";
import StackSection from "./components/StackSection";
import BuildSection from "./components/BuildSection";
import BusinessSection from "./components/BusinessSection";
import BusinessCardSection from "./components/BusinessCardSection";
import BuildCardSection from "./components/BuildCardSection";
import MigrationsSection from "./components/MigrationsSection";
import MigrationsCardSection from "./components/MigrationsCardSection";
import ProfileSection from "./components/ProfileSection";
import StatusSection from "./components/StatusSection";
import Footer from "./components/Footer";
import LinksSection from "./components/LinksSection";
function App() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <HeroSection />
      <MarqueeSection />
      <Click />
      <CardsSection />
      <StackSection />
      <BuildSection />
      <BuildCardSection />
      <BusinessSection />
      <BusinessCardSection />
      <MigrationsSection />
      <MigrationsCardSection />
      <ProfileSection />
      <StatusSection />
      <Footer />
      <LinksSection />
    </div>
  );
}

export default App;
