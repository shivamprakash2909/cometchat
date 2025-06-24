import Advantage from "../../components/Advantage/Advantage";
import Customers from "../../components/Customers/Customers";
import FAQSection from "../../components/FAQSection/FAQSection";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import { Partner } from "../../components/Partner/Partner";
import PartnershipPgm from "../../components/PartnershipPgm/PartnershipPgm";
import PreFooter from "../../components/PreFooter/PreFooter";
import ProgramTitle from "../../components/ProgramTitle/ProgramTitle";

const Home = () => {
  return (
    <div>
      <Hero />
      <Customers />
      <Partner />
      <Advantage />
      <PartnershipPgm />
      <ProgramTitle />
      <FAQSection />
      <PreFooter />
      <Footer />
    </div>
  );
};

export default Home;
