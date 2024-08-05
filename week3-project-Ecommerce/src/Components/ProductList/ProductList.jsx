import React from "react";
import useSWR from "swr";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Card from "../card/card";
import useProducts from "../../Hooks/useProducts";
import { TailSpin } from "react-loader-spinner";

function ProductList({ heading, category }) {
  const { data, isLoading, isError } = useProducts({ category });

  if (isError) return <div>Error loading data.</div>;
  if (!data) {
    return (
      <div className="flex justify-center items-center h-screen">
        <TailSpin
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    );
  }
  return (
    <div className="">
      <h1 className="capitalize px-20 whitespace-nowrap flex justify-center text-3xl font-bold">
        {heading}
      </h1>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        <Swiper
          slidesPerView={"auto"}
          // centeredSlides={true}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className=" p-5 "
          breakpoints={{
            768: {
              slidesPerView: 3,
              spaceBetween: 60,
            },

            1024: {
              slidesPerView: 4,
              spaceBetween: 60,
            },
            1440: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}
        >
          {data.map((data, index) => (
            <>
              <SwiperSlide className=" max-md:flex max-md:items-center max-md:justify-center ">
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
