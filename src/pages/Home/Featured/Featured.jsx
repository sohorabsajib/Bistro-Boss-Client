import React from "react";
import featuredImg from "../../../assets/home/featured.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import "./Featured.css";

function Featured() {
  return (
    <div className="featured-item bg-fixed text-white pt-8 my-10">
      <SectionTitle
        heading={"Featured Item"}
        subHeading={"check it out"}
      ></SectionTitle>

      <div className="md:flex justify-center bg-slate-500 bg-opacity-40 items-center px-16 py-8">
        <div>
          <img src={featuredImg} alt="" />
        </div>

        <div className="md:ml-3 text-white">
          <p> Dec 16, 2026</p>
          <p>WHERE I CAN GET SOME</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi fugiat perspiciatis dolores, quis error deserunt, rerum veniam laboriosam quae exercitationem doloribus odio. Dolor cupiditate libero cum sint consequatur voluptatibus tenetur.</p>
          <button className="btn btn-outline border border-b-4 text-white mt-2">Order Now</button>
        </div>
      </div>
    </div>
  );
}

export default Featured;
