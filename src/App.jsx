import React from "react";
import Contactpage from "./componets/screen/Contact";
import Nav from "./componets/screen/Navigation";
import Home from "./componets/screen/Home";
import Skill from "./componets/screen/Skill";
import Test from "./componets/screen/test";
import About from "./componets/screen/About";
import AppleCardsCarouselDemo from "./componets/apple";
import Services from "./componets/Myservices";
import ThemeToggle from "./componets/ThemeToggle";


function App() {
  return (
    <div className="mt-0 mb-0 dark:bg-black dark:text-white">
   
      <ThemeToggle />
      <Nav />
      <Home />
      <About />
      <Skill />
      <AppleCardsCarouselDemo />
      <Services />
      <Test />
      <Contactpage />
    </div>
  );
}

export default App;
