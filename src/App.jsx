import React from "react";
import "./App.css";
import Hero from "./componets/Hero/Hero";
import Header from "./componets/Header/Header";
// import Onwe from "./componets/WhatIsOnwe/Onwe";
import Onwe from "./componets/WhatIsOnwe/WhatisOnwe";
import Clubs from "./componets/clubs/Clubs";
import Crew from "./componets/Crew/Crew";
import Events from "./componets/Events/Events";
import Updates from "./componets/Updates/Updates";
import Footer from "./componets/Footer/Footer";
import InfiniteScrollComponent from "./componets/WhatIsOnwe/HorizontalScroll";
import Anime from "./componets/Hero/Anime";

const App = () => {
  return (
    <div className="black-border">
      {/* <Header /> */}
      {/* <Anime/> */}
      <Hero />
     
      <Onwe />
      {/* <InfiniteScrollComponent /> */}
      <Clubs />
      <Events />
      <Crew />
      <Updates />
      <Footer />
      
    </div>
  );
};

export default App;
