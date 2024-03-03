import Navbar from "@/components/molecules/NavBar/Navbar";
import React, { ReactNode } from "react";
import Footer from "../Footer";

const Layouts = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-screen overflow-hidden">
      <header className="container header-wrapper overflow-hidden">
        <Navbar />
      </header>
     <div className="over overflow-auto h-[100vh] pb-36">
     {children}
     </div>
    </div>
  );
};

export default Layouts;
