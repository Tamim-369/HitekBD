import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const About = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        // element.scrollIntoView();
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.hash]);
  return <div id="about"></div>;
};

export default About;
