import React, { useEffect, useState } from "react";
import "./Home.css";
import Hero from "../../Components/Hero/Hero";
import ProductList from "../../Components/ProductList/ProductList";

function Home() {
  return (
    <div>
      {/* Hero section********************************************************************* */}
      <section>
        <Hero />
      </section>
      {/* Products section********************************************************************* */}
      <section className="my-10 flex flex-col gap-10">
        <ProductList heading="Men's Clothing" category="men's clothing" />

        <ProductList heading="Women's Clothing" category="women's clothing" />

        <ProductList heading="Jewelery" category="jewelery" />

        <ProductList heading="Electronics" category="electronics" />
      </section>
    </div>
  );
}

export default Home;
