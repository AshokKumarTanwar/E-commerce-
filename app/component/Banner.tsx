import Image from "next/image";

export default function Banners() {
  return (

    <section className="banners">

      <div className="bannerCard">

        <div className="bannerContent">

          <p>Homepod mini</p>

          <h2>
            Max Portable Speaker
          </h2>

          <span>
            From $2,999
          </span>

          <button>
            SHOP NOW
          </button>

        </div>

        <div className="bannerImage">

          <Image
            src="/speaker-banner.png"
            alt="speaker"
            fill
            className="bannerImg"
          />

        </div>

      </div>

      <div className="bannerCard">

        <div className="bannerContent">

          <p>Smart Watch</p>

          <h2>
            Gift of Smart Technology
          </h2>

          <span>
            From €2,999
          </span>

          <button>
            SHOP NOW
          </button>

        </div>

        <div className="bannerImage">

          <Image
            src="/watch-banner.png"
            alt="watch"
            fill
            className="bannerImg"
          />

        </div>

      </div>

    </section>
  );
}