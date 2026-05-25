import Product from "../Product/Product";
import Link from "next/link"
const products = [

  {
    image: "/watch-big.png",
    category: "Smart Watch",
    title:"Apple Watch Ultra",
    price: "$499",
  },

];

export default function ProductShowcase() {

  return (

    <section className="showcaseSection">

      <div className="showcaseGrid">

        {products.map(function(product:any, index:number, arr:any){

          return(

            <Product
              key={index}

              image={product.image}

              category={product.category}

              title={product.title}

              price={product.price}
            />

          );
        })}
         <div className="ProductMiddle">
        <Link href="./Product"> 
          <button className="ProductBtn"> Available Products</button>
        </Link>
         </div>

      </div>
    </section>

  );
}