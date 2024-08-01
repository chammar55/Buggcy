import React from "react";
import useSWR from "swr";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Card from "../card/card";

function ProductList({ heading, category }) {
  const { data, error } = useSWR(
    `https://fakestoreapi.com/products/category/${category}`
  );
  // console.log(data);

  // if (error) return <div>Error loading data.</div>;
  if (!data) return <div>Loading...</div>;
  return (
    <div className="">
      <h1 className="capitalize px-20 text-2xl sm:text-3xl font-bold">
        {heading}
      </h1>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
            1440: {
              slidesPerView: 6,
              spaceBetween: 20,
            },
          }}
          modules={[Pagination]}
          className=" p-5 "
        >
          {data.map((data, index) => (
            <>
              <SwiperSlide className="sm:ml-10 max-sm:flex max-sm:items-center max-sm:justify-center ">
                <Card data={data} key={index} />
              </SwiperSlide>
            </>
          ))}

          <div className="autoplay-progress" slot="container-end"></div>
        </Swiper>
      </ul>
    </div>
  );
}

export default ProductList;

{
  /* <li
key={product.id}
style={{
  marginBottom: "20px",
  border: "1px solid #ccc",
  padding: "10px",
  borderRadius: "8px",
}}
> 
<img
  src={product.image}
  alt={product.title}
  style={{ width: "100px", height: "100px", objectFit: "cover" }}
/>
<h2>{product.title}</h2>
<p>{product.description}</p>
<p>Price: ${product.price}</p>
</li> */
}
