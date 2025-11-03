import React from "react";
import CyberRisk from "./components/CyberRisk";
import FlipCards from "./components/FlipCards";
import { assets } from "./assets/assets";
import Home_2 from "./components/Home_2";
import Navbar from "./components/Navbar";
import CyberReportCard from "./components/CyberReportCard";
import StatsSlider from "./components/StatsSlider";
import Home_3 from "./components/Home_3";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";

const App = () => {
  const cards = [
    {
      id: 1,
      link: "/solutions/insurance-brokers",
      front: {
        title: "Insurance Brokers",
        image: assets.news1,
        textColor: "text-white",
      },
      back: {
        title:
          "Gain deeper insights to understand the dynamic cyber risk landscape and better advise clients.",
        buttonText: "Learn More",
        textColor: "text-white",
      },
    },
    {
      id: 2,
      link: "/solutions/insurers",
      front: {
        title: "Insurers",
        image: assets.news2,
        textColor: "text-white",
      },
      back: {
        title:
          "Filter out the noise of irrelevant data to make more informed risk decisions.",
        buttonText: "Learn More",
        textColor: "text-white",
      },
    },
    {
      id: 3,
      link: "/solutions/reinsurance-brokers",
      front: {
        title: "Reinsurance Brokers",
        image: assets.news3,
        textColor: "text-white",
      },
      back: {
        title:
          "Obtain insights to improve reinsurance client advisory and better understand the financial impact of cyber.",
        buttonText: "Learn More",
        textColor: "text-white",
      },
    },
    {
      id: 4,
      link: "/solutions/reinsurers",
      front: {
        title: "Reinsurers",
        image: assets.news4,
        textColor: "text-white",
      },
      back: {
        title:
          "Develop a forward-looking view of risk to manage cyber risk portfolio accumulations and set risk tolerance thresholds.",
        buttonText: "Learn More",
        textColor: "text-white",
      },
    },
    {
      id: 5,
      link: "/mga-solutions",
      front: {
        title: "MGAs",
        image: assets.news1,
        textColor: "text-white",
      },
      back: {
        title:
          "Upskill your underwriting and sustainably grow business with your own view of risk.",
        buttonText: "Learn More",
        textColor: "text-white",
      },
    },
    {
      id: 6,
      link: "/insurance-linked-securities",
      front: {
        title: "Insurance-Linked Securities",
        image: assets.news2,
        textColor: "text-white",
      },
      back: {
        title:
          "Access the rigorous analysis and support required to create investment vehicles with confidence.",
        buttonText: "Learn More",
        textColor: "text-white",
      },
    },
    {
      id: 7,
      link: "/services/cybercube-consulting",
      front: {
        title: "Government",
        image: assets.news3,
        textColor: "text-white",
      },
      back: {
        title:
          "Quantify the impact of catastrophic cyber events to make informed policy decisions.",
        buttonText: "Learn More",
        textColor: "text-white",
      },
    },
    {
      id: 8,
      link: "/services/cybercube-consulting",
      front: {
        title: "Regulators / Rating Agencies",
        image: assets.news4,
        textColor: "text-white",
      },
      back: {
        title:
          "Quantify risk to understand the financial health of an institution's balance sheet.",
        buttonText: "Learn More",
        textColor: "text-white",
      },
    },
  ];

  return (
    <div className="bg-black">
      <HeroSection />
      <Navbar />
      <Home_2 />
      <Home_3 />
      <StatsSlider />
      <FlipCards cards={cards} />
      <CyberRisk />
      <CyberReportCard />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
