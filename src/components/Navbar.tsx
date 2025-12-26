import Link from "next/link";

const navLinks = ["Home", "Courses", "Blog", "About", "Pricing"];

type NavbarProps = {
  active?: string;
};

export default function Navbar({ active = "Home" }: NavbarProps) {
  return (
    <header className="flex items-center justify-between bg-white rounded-full px-6 py-3.5 shadow-sm">
      <div className="flex items-center gap-2.5">
        <div className="w-14 h-14 flex items-center justify-center">
          <img src="/homepage/logo.png" alt="NDSA Logo" className="w-full h-full object-contain" />
        </div>
      </div>
      
      <nav className="hidden md:flex items-center gap-8">
        {navLinks.map((item) => {
          const isActive = item === active;
          return (
            <Link
              key={item}
              href="#"
              className={`text-sm font-semibold transition ${
                isActive ? "text-[#ff5722]" : "text-gray-700 hover:text-[#ff5722]"
              }`}
            >
              {item}
            </Link>
          );
        })}
      </nav>
      
      <div className="flex items-center gap-3">
        <button className="text-sm font-semibold text-teal-700 px-6 py-2.5 rounded-full border border-gray-200 hover:bg-gray-50 transition uppercase tracking-wide">
          Log in
        </button>
        <button className="text-sm font-semibold text-white bg-teal-600 px-6 py-2.5 rounded-full hover:bg-teal-700 transition uppercase tracking-wide">
          Sign up
        </button>
      </div>
    </header>
  );
}
