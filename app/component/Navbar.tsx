import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        Mar<span>Ket</span>
      </div>

      <ul className="navlinks">
        <li>HOME</li>
        <li>SHOP</li>
        <li>PRODUCTS</li>
        <li>PAGES</li>
        <li>BLOG</li>
        <li>CONTACT</li>
      </ul>

      <div className="navicons">

        <Link href="/Login">
           <button className="loginBtn">
            Login
           </button>
        </Link>

        <span>⌕</span>

        <span>👤</span>

        <div className="iconbox">
          <span>♡</span>
          <span className="count">2</span>
        </div>

        <div className="iconbox">
          <span>👜</span>
          <span className="count">3</span>
        </div>

        

      </div>
    </nav>
  );
}