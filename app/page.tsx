import Topbar from "./component/Topbar";  
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Features from "./component/Features";
import Categories from "./component/Categories";
import Deal from "./component/Deal";
import Banner from "./component/Banner";
import NewArrival from "./component/NewArrival";
import ProductShowcase from "./component/ProductShowcase";
import BlogSection from "./component/BlogSection";
import Link from "next/link";
export default function Page() {
  return (
    <div>
      <Topbar />
      <Navbar/>
      <Link href="/Login"> </Link>
      <Hero />
      <Features />
      <Categories />
      <Deal />
      <Banner />
      <NewArrival />
      <ProductShowcase />
      <Link href="/Product"> </Link>
      <BlogSection />
    </div>
  );
}

