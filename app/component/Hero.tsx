
"use client";

import Image from "next/image";
import { useState } from "react";

const slides = [

  {
    title: "Future Smart Phones",
    desc: "Discover premium flagship smartphones with modern technology.",
    image: "/phone.png",
    price: "$1,299",
    bg: "#efedf3",
  },

  {
    title: "Professional Cameras",
    desc: "Capture every moment in ultra HD quality.",
    image: "/camera.png",
    price: "$2,499",
    bg: "#dde6e8",
  },

  {
    title: "Smart Watch Collection",
    desc: "Modern watches with premium smart features.",
    image: "/watch.png",
    price: "$899",
    bg: "#ece8e6",
  },
];

export default function Hero() {

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  return (

    <section
      className="hero"
      style={{
        background: `linear-gradient(
          to right,
          #ece8e6 35%,
          ${slides[current].bg} 35%
        )`,
      }}
    >

      {/* LEFT */}

      <div className="heroText">

        <p className="tag">
          SMART ELECTRONICS
        </p>

        <h1>
          {slides[current].title}
        </h1>

        <p className="desc">
          {slides[current].desc}
        </p>

        <h2 className="price">
          From {slides[current].price}
        </h2>

        <button className="shopBtn">
          SHOP NOW
        </button>

      </div>

      {/* RIGHT */}

      <div className="heroImage">

        <Image
          key={slides[current].image}
          src={slides[current].image}
          alt="product"
          fill
          priority
          className="heroProduct"
        />

      </div>

      {/* BUTTONS */}

      <div className="slideButtons">

        <button
          type="button"
          onClick={prevSlide}
        >
          ←
        </button>

        <button
          type="button"
          onClick={nextSlide}
        >
          →
        </button>

      </div>

    </section>
  );
}