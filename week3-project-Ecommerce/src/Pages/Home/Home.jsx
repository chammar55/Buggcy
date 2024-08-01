import React, { useEffect, useState } from "react";
import "./Home.css";
import Hero from "../../Components/Hero/Hero";
import ProductList from "../../Components/ProductList/ProductList";
import { categoryNames } from "./categoryNames";

function Home() {
  return (
    <div>
      {/* Hero section********************************************************************* */}
      <section>
        <Hero />
      </section>
      {/* Filters section********************************************************************** */}
      <section>
        {/* Navigation Buttons */}
        <nav className="flex my-8 justify-center text-[3vw] sm:text-xl md:text-2xl">
          {categoryNames.map((category, index) => (
            <a
              key={category}
              href={`#${category.replace(/ /g, "-")}`}
              className={` text-black p-2 sm:py-2 sm:px-4 border ${
                index === 0 ? "rounded-l-full" : ""
              } ${index === categoryNames.length - 1 ? "rounded-r-full" : ""}`}
            >
              {category}
            </a>
          ))}
        </nav>
      </section>
      {/* Products section********************************************************************* */}
      <section className="my-10 flex flex-col gap-10 max-w-[1440px] mx-auto ">
        <div id="men's-clothing" className="my-5">
          <ProductList heading="Men's Clothing" category="men's clothing" />
        </div>
        <div id="women's-clothing" className="my-5">
          <ProductList heading="Women's Clothing" category="women's clothing" />
        </div>
        <div id="jewelery" className="my-5">
          <ProductList heading="Jewelery" category="jewelery" />
        </div>
        <div id="electronics" className="my-5">
          <ProductList heading="Electronics" category="electronics" />
        </div>
      </section>
    </div>
  );
}

export default Home;
