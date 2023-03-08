import React from "react";
import { Route, Routes } from "react-router-dom";
import Catalog from "../../pages/Catalog";
import Contact from "../../pages/Contact";
import Home from "../../pages/Home";

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default MyRoutes;
