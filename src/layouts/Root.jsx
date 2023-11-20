import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Root = () => {
  return (
    <div className="font-monserrat relative bg-main bg-cover h-screen">
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="relative max-w-7xl mx-auto z-10">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
