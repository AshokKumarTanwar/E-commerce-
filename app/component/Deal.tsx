import Image from "next/image";

const deals = [
  {
    discount: "-11%",
    image: "/Laptop.png",
    category: "Laptop",
    title: "Laptop Model X (Core i5, 8GB RAM)",
    price: "$210.36",
    oldPrice: "$240.00",
  },

  {
    discount: "-18%",
    image: "/earphone.png",
    category: "Earbuds",
    title: "True Wireless Noise Cancelling Earbuds",
    price: "$49.20",
    oldPrice: "$60.00",
  },

  {
    discount: "-20%",
    image: "/watch.png",
    category: "Watch",
    title: "Smart Watch X3 (41mm)",
    price: "$440.00",
    oldPrice: "$550.00",
  },

  {
    discount: "-12%",
    image: "/camera.png",
    category: "Camera",
    title: "Wireless Smart Camera (IP65 Rated)",
    price: "$260.00",
    oldPrice: "$300.00",
  },

  {
    discount: "-10%",
    image: "/speakers.png",
    category: "Speaker",
    title: "Bose SoundLink Max Portable Speaker",
    price: "$270.00",
    oldPrice: "$300.00",
  },

  {
    discount: "-7%",
    image: "/toycamera.png",
    category: "Camera",
    title: "Kidamento Lightweight Kid Toy Camera",
    price: "$111.60",
    oldPrice: "$120.00",
  },
];

export default function Deals() {
  return (
    <section className="deals">

      {/* TOP */}

      <div className="dealsTop">

        <h2>
          Today's best Deals
        </h2>

        <div className="dealRight">

          <div className="timer">

            <p>Ends in</p>

            <span>276</span>
            <span>00</span>
            <span>45</span>
            <span>17</span>

          </div>

          <a href="#">
            See all Products →
          </a>

        </div>

      </div>

      {/* GRID */}

      <div className="dealsGrid">

        {deals.map((item, index) => (

          <div className="dealCard" key={index}>

            {/* DISCOUNT */}

            <div className="discountTag">
              {item.discount}
            </div>

            {/* IMAGE */}

            <div className="dealImage">

              <Image
                src={item.image}
                alt={item.title}
                fill
                className="dealImg"
              />

            </div>

            {/* CONTENT */}

            <div className="dealContent">

              <p className="dealCategory">
                {item.category}
              </p>

              <h3>
                {item.title}
              </h3>

              <div className="dealPrice">

                <span className="newPrice">
                  {item.price}
                </span>

                <span className="oldPrice">
                  {item.oldPrice}
                </span>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}