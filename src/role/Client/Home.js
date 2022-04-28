import React from "react";
import ClientHeader from "./ClientHeader/ClientHeader";
import HowToWork from "./HowToWork/HowToWork";
import WhyChooseUs from "./WhyChooseUs";
import Footer from "./Footer";
const Home = () => {
  return (
    <React.Fragment>
      <ClientHeader />
      <HowToWork />
      <WhyChooseUs />
      <Footer />
    </React.Fragment>
  );
};
export default Home;
