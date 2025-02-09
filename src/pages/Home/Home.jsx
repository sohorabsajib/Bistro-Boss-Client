import React from "react";
import Banner from "./Banner/Banner";
import Cantegory from "./Category/Cantegory";
import PopularMenu from "./PopularMenu/PopularMenu";
import MenuItem from "../Shared/MenuItem/MenuItem";

function Home() {
  return <div>

    <Banner />
    <Cantegory></Cantegory>
    <PopularMenu></PopularMenu>
    <MenuItem></MenuItem>
  </div>;
}

export default Home;
