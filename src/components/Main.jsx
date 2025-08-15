
import { Outlet } from "react-router-dom";
import Navbar from "./section/navbar/Navbar";
import Footer from "./section/footer/Footer";

export default function Main() {
  return (
    <>
      <Navbar />
      <div className="bg-rose pt-16 text-red-500">
        <Outlet />
      </div>
      <Footer/>
    </>
  );
}
