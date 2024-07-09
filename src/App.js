import React from 'react';
import TopBar from './components/top-bar/Top-bar';
import Navbar from './components/nav-bar/Nav-bar';
import HeroSection from './components/hero-section/Hero-section';
import ServiceSection from './components/services-section/Services';
import Services from './components/feature-section/Feature-section';
import Industries from './components/industries/Industries';
import Products from './components/products/Products';
import CaseStudies from './components/caseStudy/CaseStudy';
import TechnologyStack from './components/technology/Technology';
import TopClients from './components/topClient/TopClient';
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';
function App() {
  return (
    <div className="App">
      <TopBar />
      <Navbar />
      <HeroSection />
      <ServiceSection />   
      <Services />
      <Industries /> 
      <Products />
      <CaseStudies /> 
      <TechnologyStack /> 
      <TopClients />
      <Contact />
      <Footer />                    
    </div>
  );
}

export default App;
