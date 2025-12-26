import Image from "next/image";
import Navbar from "../components/Navbar";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

const filters = [
  "All Programs",
  "UI/UX Design",
  "Product Design",
  "Program Design",
  "Product Design",
  "Program Design",
  "Product Design",
];

// This will be populated by backend API
const popularCourses = [
  {
    title: "Product Management Basic - Learn to become a Product Manager",
    description: "Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia",
    students: "1.2k",
    price: 380,
    oldPrice: 500,
    badge: "Business",
    color: "bg-gradient-to-br from-pink-300 to-pink-100",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
    date: "1 - 28 July 2022"
  },
  {
    title: "Data Science Professional Certificate Program",
    description: "Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia",
    students: "2.5k",
    price: 670,
    oldPrice: 980,
    badge: "Data",
    color: "bg-gradient-to-br from-purple-300 to-purple-100",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=800&q=80",
    date: "1 - 28 July 2022"
  },
  {
    title: "The Science of Well-Being and Happiness",
    description: "Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia",
    students: "980",
    price: 123,
    oldPrice: 190,
    badge: "Mind",
    color: "bg-gradient-to-br from-yellow-300 to-yellow-100",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
    date: "1 - 28 July 2022"
  },
  {
    title: "Python for Everybody Specialization Course",
    description: "Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia",
    students: "3.2k",
    price: 567,
    oldPrice: 800,
    badge: "Code",
    color: "bg-gradient-to-br from-blue-300 to-blue-100",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80",
    date: "1 - 28 July 2022"
  },
];

const categories = [
  { name: "Beauty", copy: "One powerful online software suite that combines", image: "https://img.icons8.com/fluency/96/lipstick.png" },
  { name: "Medical", copy: "One powerful online software suite that combines", image: "https://img.icons8.com/fluency/96/syringe.png" },
  { name: "Sports", copy: "One powerful online software suite that combines", image: "https://img.icons8.com/fluency/96/dumbbell.png" },
  { name: "Nutrition", copy: "One powerful online software suite that combines", image: "https://img.icons8.com/fluency/96/bread.png" },
];

const perks = [
  "TAs and presenters can be moved to the front of the class.",
  "Teachers can easily see all students and class data at one time.",
  "Dedicated podium space keeps lectures focused.",
];

const bundles = [
  {
    title: "Product Management Basic - Course",
    date: "12-30 July 2025",
    price: 380,
    oldPrice: 500,
    students: "40 students",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=640&q=80",
  },
  {
    title: "UI Motion Design Pro Path",
    date: "Aug 2025",
    price: 420,
    oldPrice: 560,
    students: "32 students",
    image:
      "https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=640&q=80",
  },
];

const companies = [
  { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
  { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
  { name: "Goldman Sachs", logo: "https://upload.wikimedia.org/wikipedia/commons/6/61/Goldman_Sachs.svg" },
  { name: "PayPal", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" },
  { name: "Samsung", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
  { name: "Salesforce", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg" },
  { name: "NetApp", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
  { name: "Hitachi", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
  { name: "JPMorgan", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
  { name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
  { name: "Dell", logo: "https://upload.wikimedia.org/wikipedia/commons/4/48/Dell_Logo.svg" },
  { name: "Deloitte", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
  { name: "KPMG", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
  { name: "ISRO", logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Indian_Space_Research_Organisation_Logo.svg" },
  { name: "Mercedes-Benz", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
  { name: "EY", logo: "https://upload.wikimedia.org/wikipedia/commons/3/34/EY_logo_2019.svg" },
  { name: "Airtel", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" }
];

const FeatureDot = ({ color }: { color: string }) => (
  <span
    aria-hidden
    className="inline-flex h-2.5 w-2.5 rounded-full"
    style={{ backgroundColor: color }}
  />
);

export default function Home() {
  return (
    <div className="bg-white text-[#0B7077]">
      <section className="hero-wrapper">
        <div className="hero-section">
          <div className="hero-texture" aria-hidden />
          
          <div className="max-w-7xl mx-auto px-8 pt-6 pb-0 relative z-10">
            <Navbar active="Home" />

            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start mt-12 mb-0">
              <div className="space-y-6 pt-12">
                <div className="inline-block bg-white/90 backdrop-blur-sm rounded-xl px-5 py-2.5 text-sm text-gray-600 shadow-sm">
                  Never stop learning
                </div>
                
                <h1 className="text-[3.2rem] lg:text-[3.75rem] font-bold leading-[1.15] text-[#0b7b6e]">
                  Grow up your skills by online courses with Onlearning
                </h1>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <button className="bg-[#ff5722] hover:bg-[#f4511e] text-white font-bold px-7 py-3 rounded-lg uppercase text-sm tracking-wide transition shadow-md">
                    Explore path
                  </button>
                  
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      <img src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=100&h=100&fit=crop" alt="" className="w-11 h-11 rounded-full border-2 border-white object-cover" />
                      <img src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=100&h=100&fit=crop" alt="" className="w-11 h-11 rounded-full border-2 border-white object-cover" />
                      <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop" alt="" className="w-11 h-11 rounded-full border-2 border-white object-cover" />
                    </div>
                    <div>
                      <div className="flex text-black text-base leading-none mb-0.5">
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                        <span>½</span>
                      </div>
                      <div className="text-xs text-gray-600 font-medium">10k+ Reviews</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative lg:-mt-8 -mb-10">
                <div className="relative h-[520px] flex items-end justify-center">
                  <img 
                    src="/homepage/person.png" 
                    alt="Student" 
                    className="h-full w-auto object-contain relative z-10"
                  />
                  
                  <div className="absolute left-0 bottom-36 z-20">
                    <img src="/homepage/heroimg.png" alt="250k Assisted Student" className="w-auto h-16" />
                  </div>
                  
                  <div className="absolute right-6 top-20 z-20">
                    <img src="/homepage/herocomp.png" alt="" className="w-auto h-24" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-8 pt-20">
        <section className="space-y-8">
          <div className="flex flex-col items-center gap-3 text-center">
            <h2 className="text-4xl font-bold text-[#ff5722]">
              Popular Courses
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-[#17a2b8] to-[#17a2b8] rounded-full" aria-hidden />
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((item, index) => (
              <button
                key={item + index}
                className={`px-4 py-2 rounded-md text-xs font-medium transition ${
                  index === 0
                    ? "bg-[#17a2b8] text-white"
                    : "bg-white text-gray-500 border border-gray-200 hover:border-[#17a2b8]"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 py-10">
            {popularCourses.map((course) => (
              <article
                key={course.title}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition flex flex-col border border-gray-100"
              >
                <div className={`${course.color} relative h-48 w-full flex items-center justify-center overflow-hidden z-10`}>
                  <Image
                    src={course.image}
                    alt={course.title}
                    width={400}
                    height={300}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute -bottom-3 left-4 bg-white rounded-full px-3 py-1 shadow-sm flex items-center gap-2 z-10 whitespace-nowrap border border-gray-100">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="w-5 h-5 rounded-full border border-white bg-gray-200 overflow-hidden">
                           <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="" className="w-full h-full object-cover" />
                        </div>
                      ))}
                    </div>
                    <span className="text-[10px] font-semibold text-gray-600">+ {course.students}</span>
                  </div>
                </div>
                <div className="pt-6 pb-5 px-4 flex-1 flex flex-col text-left">
                  <div className="text-[10px] text-gray-400 mb-2 font-medium">{course.date || "1 - 28 July 2022"}</div>
                  <h3 className="text-base font-bold text-[#0b7b6e] mb-2 leading-snug">
                    {course.title}
                  </h3>
                  <p className="text-xs text-gray-500 line-clamp-3 leading-relaxed">
                    {course.description || "Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia"}
                  </p>
                  <div className="mt-auto flex items-center justify-between w-full border-t border-gray-50 pt-3">
                    <div className="flex items-baseline gap-2">
                      <span className="text-lg font-bold text-[#ff5722]">${course.price}</span>
                      <span className="text-xs text-gray-400 line-through">${course.oldPrice}</span>
                    </div>
                    <button className="bg-[#17a2b8] hover:bg-[#138496] text-white px-4 py-1.5 rounded-md text-xs font-semibold transition">
                      Enroll Now
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-12 py-10">
          <div className="text-center space-y-4">
            <div className="flex flex-col items-center gap-2">
              <h2 className="text-4xl font-bold text-[#0b7b6e]">
                Courses Category
              </h2>
              <div className="h-1 w-24 bg-[#ff5722] rounded-full" aria-hidden />
            </div>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
              Onlearing is one powerful online software suite that combines all the tools needed to run a successful school or office.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {categories.map((category, index) => (
              <div
                key={category.name}
                className="group rounded-3xl p-8 flex flex-col items-center text-center gap-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-white border border-gray-100 hover:border-[#0b7b6e]/20"
              >
                <div className="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300 overflow-hidden p-4">
                  <img src={category.image} alt={category.name} className="w-full h-full object-contain" />
                </div>
                <h3 className="font-bold text-xl text-[#0b7b6e] capitalize">{category.name}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{category.copy}</p>
                
                <div className="mt-4">
                  <button className="px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 bg-white text-gray-500 group-hover:bg-[#ff5722] group-hover:text-white group-hover:shadow-md">
                    <span className="group-hover:hidden">more</span>
                    <span className="hidden group-hover:inline">Explore courses</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center pt-4">
            <button className="px-8 py-2.5 rounded-full border border-[#0b7b6e] text-[#0b7b6e] text-sm font-semibold hover:bg-[#0b7b6e] hover:text-white transition-colors">
              view all
            </button>
          </div>
        </section>

        <section className="py-10 space-y-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0f2f2f]">
            Thousands of students achieved their <span className="text-[#0b7b6e]">dream job at</span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-12 gap-y-16 items-center justify-items-center px-4">
             {companies.map((company) => (
               <div key={company.name} className="w-32 h-12 relative transition-all duration-300">
                 <img 
                   src={company.logo} 
                   alt={company.name} 
                   className="w-full h-full object-contain [filter:grayscale(100%)_sepia(100%)_hue-rotate(140deg)_saturate(2)_brightness(0.9)] hover:filter-none transition-all duration-300 opacity-70 hover:opacity-100 hover:scale-110"
                 />
               </div>
             ))}
          </div>
          
          <div className="text-center text-gray-400 text-sm font-medium">
            + many more
          </div>
        </section>

        <section className="grid lg:grid-cols-2 gap-16 items-center py-10">
          <div className="relative order-last lg:order-first flex justify-center">
             <div className="w-[80%]">
               <Image
                  src="/homepage/instructor.png"
                  alt="Staff training"
                  width={600}
                  height={500}
                  className="w-full h-auto object-contain"
                />
             </div>
          </div>
          <div className="space-y-8">
            <div className="space-y-4">
               <div className="inline-block bg-white border border-gray-100 rounded-xl px-5 py-2.5 text-sm text-gray-600 shadow-sm font-medium">
                 Training
               </div>
               <h2 className="text-4xl font-bold text-[#ff5722]">
                 Staff training
               </h2>
            </div>
            
            <div className="space-y-6">
              {[
                {
                  text: "Teachers don't get lost in the grid view and have a dedicated Podium space.",
                  icon: (
                    <svg className="w-6 h-6 text-[#0b7b6e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                  )
                },
                {
                  text: "TA's and presenters can be moved to the front of the class.",
                  icon: (
                    <svg className="w-6 h-6 text-[#0b7b6e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  )
                },
                {
                  text: "Teachers can easily see all students and class data at one time.",
                  icon: (
                    <svg className="w-6 h-6 text-[#0b7b6e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  )
                }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-full bg-[#e8f1ff] flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed font-medium max-w-md">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="rounded-[28px] bg-[#f8fcfc] border border-gray-100 p-8 sm:p-12 overflow-hidden my-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="inline-block bg-white border border-gray-100 rounded-xl px-5 py-2.5 text-sm text-gray-600 shadow-sm font-medium">
                  Partnership
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-[#ff5722]">
                  Become an Affiliate
                </h2>
                <p className="text-gray-500 text-lg leading-relaxed">
                  Join our global community of partners and earn while you help others learn.
                </p>
              </div>

              <ul className="space-y-4">
                {[
                  "Earn up to 30% commission on every sale",
                  "Access to exclusive marketing materials",
                  "Real-time tracking and dedicated support"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#e8f1ff] flex items-center justify-center shrink-0">
                      <svg className="w-3.5 h-3.5 text-[#0b7b6e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="font-medium text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>

              <button className="bg-[#0b7b6e] text-white px-8 py-3.5 rounded-xl font-bold hover:bg-[#09665b] transition shadow-sm">
                Enroll Now
              </button>
            </div>
            
            <div className="relative flex justify-center lg:justify-end">
               <div className="w-full max-w-[90%] rounded-2xl overflow-hidden shadow-sm">
                 <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                  alt="Affiliate partnership"
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover"
                />
               </div>
            </div>
          </div>
        </section>

        <Testimonials />
      </main>

      <Footer />
    </div>
  );
}
