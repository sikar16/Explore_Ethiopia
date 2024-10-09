import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "../feature/Home";
import Aboutus from "../feature/AboutUs";
import Hero from "../component/Hero";
import Hero1 from "../component/Hero1";


export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about_us" element={<Aboutus />} />
      <Route path="/hero" element={<Hero1 />} />


    </>
  )
);

