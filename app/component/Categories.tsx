import Image from "next/image";

const categories = [
  {
    name: "Smart Watches",
    image: "/cat-watch.jpg",
  },

  {
    name: "Laptop",
    image: "/cat-laptop.jpg",
  },

  {
    name: "TV & Home",
    image: "/cat-Speakers.jpg",
  },

  {
    name: "Accessories",
    image: "/cat-camera.jpg",
  },

  {
    name: "Phones",
    image: "/cat-phones.jpg",
  },

  {
    name: "Earphones",
    image: "/cat-earphone.jpg",
  },

  {
    name: "Cables",
    image: "/cat-cables.jpg",
  },
];

export default function Categories() {
  return (
    <section className="categoriesSection">

      {/* CATEGORY ITEMS */}

      <div className="categoriesRow">

        {categories.map((item, index) => (
          <div className="categoryItem" key={index}>

            <div className="categoryCircle">

              <Image
                src={item.image}
                alt={item.name}
                width={90}
                height={90}
                className="categoryImg"
              />

            </div>

            <h3>{item.name}</h3>

          </div>
        ))}

      </div>

      {/* DISCOUNT BAR */}

      <div className="discountBar">

        <p>
          Super discount for your first purchase
          <span> COUPON96 </span>
          Use discount code in the checkout!
        </p>

      </div>

    </section>
  );
}