import BlogCard from "./BlogCard";

const blogs = [
  {
    image: "/blog1.png",
    date: "06 July, 2025",
    title: "Fast fashion: How clothes are linked to climate change",
    category: "🏷 Fashion, Lifestyle, News",
  },

  {
    image: "/blog2.png",
    date: "04 April, 2024",
    title: "Smart Gadgets in Modern Life: Design and Innovation",
    category: "🏷 Technology, Design",
  },

  {
    image: "/blog3.png",
    date: "18 July, 2023",
    title: "Minimal Design Trends That Are Shaping Digital World",
    category: "🏷 UI/UX, Trends",
  },
];

export default function BlogSection() {

  return (

    <section className="blogs">

      <div className="blogsTop">
        <p>
          Our Blog & News
        </p>
        <h2>
          Latest blogs & News
        </h2>
      </div>

      <div className="blogsGrid">
        {blogs.map(function (Blog:any, index:number, arr:any) {
          return (
            <BlogCard
              key={index}
              image={Blog.image}
              date={Blog.date}
              title={Blog.title}
              category={Blog.category}
            />
          );
        })}
      </div>

    </section>
  );
}