"use client";
import Image from "next/image";
import { useState } from "react";
export default function BlogCard(props:any) {

  const [count, setCount] = useState(0);

  return (

    <div className="blogCard">
      <div className="blogImage">
        <Image
          src={props.image}
          alt="blog"
          fill
          className="blogImg"
        />

        <div className="blogDate">
          {props.date}
        </div>
      </div>

      <div className="blogCategory">
        {props.category}
      </div>
      <h3>
        {props.title}
      </h3>

    </div>
    
    
  );
}