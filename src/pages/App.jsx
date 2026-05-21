import "../styles/App.css";

import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import SecuritySection from "../components/SecuritySection";
import SavingsSection from "../components/SavingsSection";
import SaverSection from "../components/SaverSection";
import CustomerSection from "../components/CustomerSection";
import PartnerSection from "../components/PartnerSection";
import Footer from "../components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <SecuritySection />
      <SavingsSection />
      <SaverSection />
      <CustomerSection />
      <PartnerSection />
      <Footer />
    </>
  );
}

export default App;