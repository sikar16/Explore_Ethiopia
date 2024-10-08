import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "../feature/Home";
import Aboutus from "../feature/AboutUs";
import Sliders from "../feature/Slider";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about_us" element={<Aboutus />} />
      <Route path="/slider" element={<Sliders />} />
    </>
  )
);

