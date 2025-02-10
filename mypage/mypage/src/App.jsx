import React from "react";
import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";

const App = () => {
  React.useEffect(() => {
    console.log("Page loaded!");
  }, []);

  return (
    <div>
      <Header />
      <Section id="about" title="About Us" content="This is the about section of the website." />
      <Section id="services" title="Our Services" content="We provide amazing services to our customers." />
      <Section id="contact" title="Contact Us" content="Email: contact@website.com" />
      <Footer />
    </div>
  );
};

export default App;
