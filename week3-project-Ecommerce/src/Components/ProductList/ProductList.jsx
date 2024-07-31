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
// Axios instance

// const axiosInstance = axios.create({
//   baseURL: "https://fakestoreapi.com/",
// });

// Fetcher function using Axios
// const fetcher = (url) => axiosInstance.get(url).then((res) => res.data);

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
          }}
          modules={[Pagination]}
          className=" p-5 "
        >
          {data.map((data, index) => (
            <>
              {/* <Link
              style={{ textDecoration: "none", color: "white" }}
              // to={/details/movie/${movie.id}}
            > */}
              <SwiperSlide
                className="sm:ml-10 max-sm:flex max-sm:items-center max-sm:justify-center "
                // style={{ cursor: "pointer" }}
                // onClick={(event) => {
                // Manually navigate to the desired URL
                // navigate(/details/movie/${movie.id});
                // Prevent the default behavior of the link
                //   event.preventDefault();
                // }}
              >
                <Card data={data} key={index} />
                {/* <div className="border-2 p-2 w-[300px] h-auto bg-red-400">
                <div className=" ">
                  <img className="w-full h-[400px]" src={${data.image}} />
                </div>
                <div className="posterImage__overlay">
                  <div className="posterImage__title">{data.title}</div>
                  <div className="posterImage__runtime">
                    {data.price}
                    <span className="posterImage__rating">
                      {data.rating.rate}
                      <i className="fas fa-star" />{" "}
                    </span>
                  </div>
                  <div className="posterImage__description"></div>
                </div>
              </div> */}
              </SwiperSlide>
              {/* </Link> */}
            </>
          ))}

          <div className="autoplay-progress" slot="container-end">
            {/* <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg> */}
            {/* <span ref={progressContent}></span> */}
          </div>
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
