import React from "react";
import Banner from "./Banner/Banner";
import Cantegory from "./Category/Cantegory";
import PopularMenu from "./PopularMenu/PopularMenu";
import MenuItem from "../Shared/MenuItem/MenuItem";
import Featured from "./Featured/Featured";

function Home() {
  return <div>

    <Banner />
    <Cantegory></Cantegory>
    <PopularMenu></PopularMenu>
    <MenuItem></MenuItem>
    <Featured></Featured>
  </div>;
}

export default Home;
