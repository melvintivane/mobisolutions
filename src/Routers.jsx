import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home1 from "./pages/homePages/Home1";
import Home1Dark from "./pages/homePages/Home1Dark";
import Services3 from "./pages/servicePages/Services3";
import ServicesDetails from "./pages/servicePages/ServicesDetails";
// import Team2 from "./pages/teamPages/Team2";
// import TeamDetails from "./pages/teamPages/TeamDetails";
import ProjectDetails from "./pages/project/ProjectDetails";
import AboutUs from "./pages/innerPages/AboutUs";
import Pricing from "./pages/innerPages/Pricing";
import ContactUs from "./pages/innerPages/ContactUs";
import Error404 from "./pages/innerPages/Error404";
import BlogStandard from "./pages/blogPages/BlogStandard";
import BlogSingle from "./pages/blogPages/BlogSingle";
import ScrollToTop from "./components/utilities/ScrollToTop";

const Routers = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home1 />}></Route>
        {/* <Route path="/home-dark" element={<Home1Dark />}></Route> */}
        <Route path="/services" element={<Services3 />}></Route>
        <Route
          path="/services-details/:id"
          element={<ServicesDetails />}
        ></Route>
        <Route
          path="/services-details"
          element={<Navigate to="/services-details/1" />}
        ></Route>
        <Route path="/project-details/:id" element={<ProjectDetails />}></Route>
        <Route
          path="/project-details"
          element={<Navigate to="/project-details/1" />}
        ></Route>
        {/* <Route path="/teams" element={<Team2 />}></Route> */}
        {/* <Route path="/team-details/:id" element={<TeamDetails />}></Route> */}
        {/* <Route
          path="/team-details"
          element={<Navigate to="/team-details/1" />}
        /> */}
        <Route path="/about-us" element={<AboutUs />}></Route>
        <Route path="/pricing" element={<Pricing />}></Route>
        <Route path="/contact-us" element={<ContactUs />}></Route>
        <Route path="/blog" element={<BlogStandard />}></Route>
        <Route path="/blog/:id" element={<BlogSingle />}></Route>
        <Route path="*" element={<Error404 />}></Route>
      </Routes>
    </>
  );
};

export default Routers;
