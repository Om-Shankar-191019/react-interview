// problem statement :
// make multiple tabs to navigate on multiple pages.

import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useParams,
  useLocation,
} from "react-router-dom";

const CustomTabs = () => {
  return (
    <BrowserRouter>
      <Homewrapper />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default CustomTabs;

const Homewrapper = () => {
  const { pathname } = useLocation();
  const [selectedPath, setSelectedPath] = useState(pathname);
  const navigate = useNavigate();
  const handleRoute = (path) => {
    navigate(path);
    setSelectedPath(path);
  };
  return (
    <div>
      <h1>Custom Tabs</h1>
      <ul className="flex m-2 space-x-4">
        <li
          onClick={() => handleRoute("/")}
          className={`cursor-pointer ${
            selectedPath === "/" ? "border-b-2 border-red-600" : ""
          } `}
        >
          Home
        </li>
        <li
          onClick={() => handleRoute("/about")}
          className={`cursor-pointer ${
            selectedPath === "/about" ? "border-b-2 border-red-600" : ""
          } `}
        >
          About
        </li>
        <li
          onClick={() => handleRoute("/contact")}
          className={`cursor-pointer ${
            selectedPath === "/contact" ? "border-b-2 border-red-600" : ""
          } `}
        >
          Contact
        </li>
      </ul>
    </div>
  );
};

const Home = () => {
  return <div>This is HOME component</div>;
};

const About = () => {
  return <div>This is ABOUT component</div>;
};

const Contact = () => {
  return <div>This is CONTACT component</div>;
};
