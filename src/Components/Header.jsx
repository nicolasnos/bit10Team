import React from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import List from "./List";
import Team from "./Team";

const Header = () => {
  return (
    <header>
      <BrowserRouter>
        <nav className="py-4 text-center">
          <Link className="px-4" to="/">
            Aplicacion
          </Link>
          <Link className="px-4" to="/team">
            Team
          </Link>
          <Routes>
            <Route path="/" element={<List />} />
            <Route path="/team" element={<Team />} />
          </Routes>
        </nav>
      </BrowserRouter>
    </header>
  );
};

export default Header;
