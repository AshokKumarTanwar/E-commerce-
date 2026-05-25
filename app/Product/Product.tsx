"use client";

import Image from "next/image";
import { useState } from "react";

export default function ProductCard(props: any) {

  const [count, setCount] = useState(0);

  return (

    <section className="showcase">

      <div className="showcaseImage">

        <Image
          src={props.image}
          alt={props.title}
          fill
          sizes="100vw"
          className="showcaseImg"
        />

      </div>

      <div className="showcaseContent">

        <p className="category">
          {props.category}
        </p>

        <h2>
          {props.title}
        </h2>

        <div className="rating">

          ⭐⭐⭐⭐⭐

          <span>(1 review)</span>

          <p>🔥 41 sold in last 16 hours</p>

        </div>

        <h3>
          ${props.price}
        </h3>

        <div className="colorOptions">

          <div className="colorBox active">

            <Image
              src={props.image}
              alt={props.title}
              fill
              sizes="100vw"
              className="ProductImg"
            />

          </div>

        </div>

        <div className="cartRow">

          <div className="quantity">

            <button
              onClick={() =>
                setCount(count > 0 ? count - 1 : 0)
              }
            >
              -
            </button>

            <span>{count}</span>

            <button
              onClick={() =>
                setCount(count < 5 ? count + 1 : 5)
              }
            >
              +
            </button>

          </div>

          <button className="cartBtn">
            ADD TO CART
          </button>

          <button className="iconBtn">
            ♡
          </button>

          <button className="iconBtn">
            ↺
          </button>

        </div>

        <button className="buyBtn">
          BUY NOW
        </button>

      </div>

    </section>

  );
}