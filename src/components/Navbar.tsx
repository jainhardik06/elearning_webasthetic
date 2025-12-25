import Link from "next/link";

const navLinks = ["Home", "Courses", "Blog", "About", "Pricing"];

type NavbarProps = {
  active?: string;
};

export default function Navbar({ active = "Home" }: NavbarProps) {
  return (
    <header className="flex items-center justify-between bg-white rounded-full px-6 py-3.5 shadow-sm">
      <div className="flex items-center gap-2.5">
        <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center">
          <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
          </svg>
        </div>
        <span className="text-xl font-bold text-teal-700">onlearn</span>
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
