import Image from "next/image";

const products = [
  {
    image: "/laptop.png",
    title: "Magic Keyboard for iPad Air",
    price: "$260.00",
    oldPrice: "$320.00",
    discount: "-18%",
    colors: ["#fff", "#444"],
  },

  {
    image: "/earbuds.png",
    title: "Wireless Fitness Earbuds",
    price: "$290.00",
    colors: ["#ff7a59", "#444", "#f7b4d9"],
  },

  {
    image: "/hook-earbuds.png",
    title: "High-Performance Earbuds",
    price: "$199.00",
    oldPrice: "$240.00",
    discount: "-30%",
    colors: ["#d9d9ff", "#444", "#ff9c3d"],
  },

  {
    image: "/speaker.png",
    title: "HomePod mini - Blue",
    price: "$249.00",
    colors: ["#1d2b38", "#999", "#ff8a65"],
  },

  {
    image: "/cable.png",
    title: "Magic Keyboard for iPad Air",
    price: "$99.00",
    colors: ["#e44", "#777", "#ccc"],
  },

  {
    image: "/watch2.png",
    title: "Magic Keyboard for iPad Air",
    price: "$199.00",
    oldPrice: "$279.00",
    discount: "-29%",
    colors: ["#cfd2ff", "#222", "#eee"],
  },

  {
    image: "/phonecase.png",
    title: "Magic Keyboard for iPad Air",
    price: "$799.00",
    colors: ["#ffd4ea", "#455a7a", "#e7dede"],
  },

  {
    image: "/controller.png",
    title: "Magic Keyboard for iPad Air",
    price: "$250.00",
    oldPrice: "$500.00",
    discount: "-49%",
    colors: [],
  },
];

export default function NewArrivals() {
  return (

    <section className="arrivals">

      <div className="arrivalsTop">
        <h2>New Arrivals</h2>
        <a href="#">
          See all Products →
        </a>
      </div>

      <div className="arrivalsGrid">

        {products.map((item, index) => (

          <div className="arrivalCard" key={index}>

            {item.discount && (
              <div className="arrivalDiscount">
                {item.discount}
              </div>
            )}

            <div className="arrivalImage">

              <Image
                src={item.image}
                alt={item.title}
                fill
                className="arrivalImg"
              />

            </div>

            <div className="colors">

              {item.colors.map((color, i) => (
                <span
                  key={i}
                  style={{ background: color }}
                ></span>
              ))}

            </div>

            <h3>
              {item.title}
            </h3>

            <div className="arrivalPrice">

              <span className="arrivalNew">
                {item.price}
              </span>

              {item.oldPrice && (
                <span className="arrivalOld">
                  {item.oldPrice}
                </span>
              )}

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}