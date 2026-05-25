"use client";

import { useEffect, useState } from "react";
import Product from "./Product";

export default function Home() {

  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {

    const fetchProducts = async () => {

      try {

        const response = await fetch("http://localhost:5000/products");

        const data = await response.json();

        console.log(data);

        setProducts(data);

      } catch (error) {

        console.log(error);

      }

    };

    fetchProducts();

  }, []);

  return (

    <div>

      {products.map((item) => (

        <Product
          key={item._id}
          image={item.image}
          category={item.category}
          title={item.name}
          price={item.price}
        />

      ))}

    </div>

  );
}