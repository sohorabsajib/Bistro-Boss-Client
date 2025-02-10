import React from "react";
import Banner from "./Banner/Banner";
import Cantegory from "./Category/Cantegory";
import PopularMenu from "./PopularMenu/PopularMenu";
import MenuItem from "../Shared/MenuItem/MenuItem";
import Featured from "./Featured/Featured";
import Testimonials from "./Testimonials/Testimonials";

function Home() {
  return <div>

    <Banner />
    <Cantegory></Cantegory>
    <PopularMenu></PopularMenu>
    <MenuItem></MenuItem>
    <Featured></Featured>
    <Testimonials></Testimonials>
  </div>;
}

export default Home;
