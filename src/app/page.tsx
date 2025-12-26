import Image from "next/image";
import Navbar from "../components/Navbar";

const filters = [
  "All Programs",
  "UI/UX Design",
  "Product Design",
  "Program Design",
  "Product Design",
  "Program Design",
  "Product Design",
];

const popularCourses = [
  {
    title: "Product Management Basic Course",
    students: "80+ students",
    price: 380,
    oldPrice: 500,
    badge: "Business",
    color: "bg-[#f6f9ff]",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Data Science Professional Certificate",
    students: "678 students",
    price: 670,
    oldPrice: 980,
    badge: "Data",
    color: "bg-[#fdf4e7]",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "The Science of Well-Being",
    students: "1230 students",
    price: 123,
    oldPrice: 190,
    badge: "Mind",
    color: "bg-[#e8f6f5]",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Python for Everybody Specialization",
    students: "987 students",
    price: 567,
    oldPrice: 800,
    badge: "Code",
    color: "bg-[#f1f5ff]",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80",
  },
];

const categories = [
  { name: "Beauty", copy: "Online suites that combine core tools.", icon: "💅" },
  { name: "Medical", copy: "Clinical and administrative foundations.", icon: "🩺" },
  { name: "Sports", copy: "Coaching, analytics, and fitness programs.", icon: "🏃" },
  { name: "Nutrition", copy: "Healthy habits with expert guidance.", icon: "🥗" },
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

      <main className="max-w-6xl mx-auto px-4 space-y-20 pt-24 pb-24">
        <section className="space-y-6">
          <div className="flex flex-col items-center gap-2 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f15b2a]">
              Popular Courses
            </p>
            <div className="gradient-stroke" aria-hidden />
          </div>

          <div className="flex flex-wrap justify-center gap-2 text-xs text-[#567070]">
            {filters.map((item, index) => (
              <button
                key={item + index}
                className={`rounded-full border px-3 py-2 transition ${
                  index === 0
                    ? "border-transparent bg-[#1aa6a0] text-white"
                    : "soft-border bg-white hover:border-[#1aa6a0]/40"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {popularCourses.map((course) => (
              <article
                key={course.title}
                className={`rounded-2xl overflow-hidden soft-border card-shadow bg-white flex flex-col`}
              >
                <div className={`${course.color} relative h-36 w-full overflow-hidden`}>
                  <Image
                    src={course.image}
                    alt={course.title}
                    width={400}
                    height={200}
                    className="h-full w-full object-cover"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[#1aa6a0] soft-border">
                    {course.badge}
                  </span>
                </div>
                <div className="p-4 space-y-3 flex-1 flex flex-col">
                  <h3 className="text-sm font-semibold leading-5 text-[#0f2f2f]">
                    {course.title}
                  </h3>
                  <div className="text-xs text-[#567070]">{course.students}</div>
                  <div className="mt-auto flex items-center justify-between text-sm">
                    <div className="flex items-baseline gap-2">
                      <span className="text-lg font-bold text-[#f15b2a]">${course.price}</span>
                      <span className="text-xs text-[#94a5a4] line-through">${course.oldPrice}</span>
                    </div>
                    <button className="text-xs font-semibold text-[#1aa6a0] hover:text-[#0f7e7b]">
                      Enroll
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-10">
          <div className="text-center space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f15b2a]">Courses Category</p>
            <h2 className="section-title text-3xl text-[#0f2f2f]">Choose your path</h2>
            <p className="text-[#567070] max-w-3xl mx-auto">
              Onlearning is one powerful online software suite that combines all the tools needed to run a successful school or office.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            {categories.map((category) => (
              <div
                key={category.name}
                className="angle-card rounded-2xl p-5 flex flex-col gap-3 text-center"
              >
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white text-xl" aria-hidden>
                  {category.icon}
                </span>
                <h3 className="font-bold text-lg text-[#0f2f2f]">{category.name}</h3>
                <p className="text-sm text-[#567070] leading-relaxed">{category.copy}</p>
                <button className="mt-auto rounded-full border px-4 py-2 text-xs font-semibold text-[#1aa6a0] border-[#1aa6a0]/20 hover:bg-[#e8f6f5] transition">
                  Explore courses
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-10 lg:grid-cols-[1fr_1.05fr] items-center">
          <div className="space-y-3">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1aa6a0]">Benefits</span>
            <h2 className="section-title text-3xl text-[#0f2f2f]">Get Student ID card</h2>
            <p className="text-[#567070] max-w-xl">
              Teachers don’t get lost in the grid view and have a dedicated podium space. Stay in control of every session with crystal clear visibility.
            </p>
            <div className="space-y-3">
              {perks.map((perk) => (
                <div key={perk} className="flex items-start gap-3 text-sm text-[#567070]">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#e8f6f5] text-[#1aa6a0] font-semibold">
                    ✓
                  </span>
                  <span>{perk}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl bg-white soft-border card-shadow p-5 space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-[#e8f6f5] text-[#1aa6a0] inline-flex items-center justify-center font-bold">
                  🪪
                </div>
                <div>
                  <div className="text-sm text-[#567070]">ID Number</div>
                  <div className="font-semibold">2025 8299 1001</div>
                </div>
              </div>
              <div className="rounded-2xl bg-[#f6fbf9] p-4 soft-border">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs text-[#567070]">Full name</div>
                    <div className="font-semibold text-[#0f2f2f]">Mark J. William</div>
                  </div>
                  <div className="text-xs text-[#1aa6a0] font-semibold">Active</div>
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <Image
                    src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=200&q=80"
                    alt="Student portrait"
                    width={64}
                    height={64}
                    className="h-16 w-16 rounded-full object-cover"
                  />
                  <div className="text-xs text-[#567070]">
                    <div>Level: Gold</div>
                    <div>Valid: 07/2026</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-white soft-border card-shadow p-5 space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-[#fff2ea] text-[#f15b2a] inline-flex items-center justify-center font-bold">
                  📌
                </div>
                <div>
                  <div className="text-sm text-[#567070]">Secure Access</div>
                  <div className="font-semibold">Scan to verify</div>
                </div>
              </div>
              <div className="rounded-2xl bg-[#fef6f2] p-4 soft-border text-center space-y-2">
                <div className="mx-auto h-16 w-16 rounded-xl bg-white grid place-items-center text-2xl">🔲</div>
                <div className="text-xs text-[#567070]">QR validation for every class join.</div>
              </div>
              <button className="w-full rounded-full bg-[#1aa6a0] text-white py-3 text-sm font-semibold hover:bg-[#0f7e7b] transition cta-pill">
                Download ID
              </button>
            </div>
          </div>
        </section>

        <section className="grid gap-10 lg:grid-cols-[1.05fr_1fr] items-center">
          <div className="space-y-3">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1aa6a0]">Training</span>
            <h2 className="section-title text-3xl text-[#0f2f2f]">Staff training</h2>
            <p className="text-[#567070] max-w-xl">
              Run engaging workshops with podium control, presenter lanes, and focus spaces. Keep every participant on track.
            </p>
            <div className="space-y-2 text-sm text-[#567070]">
              {perks.map((perk, idx) => (
                <div key={perk + idx} className="flex items-center gap-3">
                  <FeatureDot color={idx % 2 === 0 ? "#1aa6a0" : "#f15b2a"} />
                  <span>{perk}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -left-10 -top-6 h-24 w-24 rounded-full bg-[#e8f6f5] blur-3xl" aria-hidden />
            <div className="absolute -right-12 bottom-0 h-32 w-32 rounded-full bg-[#ffe8dc] blur-3xl" aria-hidden />
            <div className="relative rounded-3xl bg-white soft-border card-shadow p-6">
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
                alt="Team training session"
                width={900}
                height={600}
                className="w-full rounded-2xl object-cover"
              />
            </div>
          </div>
        </section>

        <section className="rounded-[28px] bg-[#e3222a] text-white card-shadow overflow-hidden">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] items-center">
            <div className="space-y-4 p-8 sm:p-12">
              <p className="text-xs font-semibold uppercase tracking-[0.2em]">Why you should buy gift cards?</p>
              <h2 className="section-title text-3xl">Unlock joyful learning for someone special.</h2>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2"><span className="mt-1 text-lg">•</span><span>Teachers don’t get lost in the grid view and have a dedicated podium space.</span></li>
                <li className="flex items-start gap-2"><span className="mt-1 text-lg">•</span><span>TAs and presenters can be moved to the front of the class.</span></li>
                <li className="flex items-start gap-2"><span className="mt-1 text-lg">•</span><span>Teachers can easily see all students and class data at one time.</span></li>
              </ul>
              <button className="rounded-full bg-white text-[#e3222a] px-5 py-3 text-sm font-semibold w-max hover:bg-[#ffe8e8] transition">
                Buy now
              </button>
            </div>
            <div className="relative min-h-[280px]">
              <Image
                src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80"
                alt="Happy student with gift card"
                width={800}
                height={700}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        <section className="space-y-8">
          <div className="text-center space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f15b2a]">Exclusive Bundles</p>
            <h2 className="section-title text-3xl text-[#0f2f2f]">Specialized bundles to accelerate you</h2>
            <p className="text-[#567070] max-w-3xl mx-auto">
              Combine live classes, office hours, and projects. Pay once, get everything.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {bundles.map((bundle) => (
              <article
                key={bundle.title}
                className="rounded-3xl bg-white soft-border card-shadow overflow-hidden flex flex-col md:flex-row"
              >
                <div className="md:w-1/3 h-full">
                  <Image
                    src={bundle.image}
                    alt={bundle.title}
                    width={360}
                    height={240}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6 space-y-3 flex-1">
                  <div className="text-xs text-[#567070]">{bundle.date}</div>
                  <h3 className="text-lg font-semibold text-[#0f2f2f]">{bundle.title}</h3>
                  <div className="flex items-center gap-2 text-xs text-[#567070]">
                    <span className="inline-flex items-center gap-1 rounded-full bg-[#e8f6f5] px-3 py-1 text-[#1aa6a0] font-semibold">
                      🐍
                      <span>Python</span>
                    </span>
                    <span>{bundle.students}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-lg font-bold text-[#f15b2a]">${bundle.price}</span>
                    <span className="text-xs text-[#94a5a4] line-through">${bundle.oldPrice}</span>
                  </div>
                  <button className="rounded-full bg-[#1aa6a0] text-white px-4 py-2 text-sm font-semibold w-max hover:bg-[#0f7e7b] transition cta-pill">
                    Buy now
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-white border-t border-[#d8e7e4]">
        <div className="max-w-6xl mx-auto px-4 py-12 grid gap-8 md:grid-cols-[1.1fr_1fr_1fr_1.2fr] text-sm text-[#567070]">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-semibold text-[#0f2f2f]">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#1aa6a0] text-white font-bold">
                O
              </span>
              <span>onlearn</span>
            </div>
            <p>
              Learn growth driven, smart, consistent, delightful journeys.
            </p>
            <div className="space-y-1">
              <div>Tel: +62-361-304-0007</div>
              <div>Mon–Fri 08:00-17:00</div>
              <div>Email: info@onlearn.com</div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-[#0f2f2f] mb-3">Categories</h4>
            <ul className="space-y-2">
              <li>Counseling</li>
              <li>Academic</li>
              <li>Individual development</li>
              <li>More</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-[#0f2f2f] mb-3">Links</h4>
            <ul className="space-y-2">
              <li>About Us</li>
              <li>Blog</li>
              <li>Support</li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="font-semibold text-[#0f2f2f]">Stay up to date</h4>
            <p>Join 100k+ students getting curated course drops.</p>
            <div className="flex items-center gap-2 rounded-full soft-border bg-[#f6fbf9] p-1">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 bg-transparent px-3 py-2 text-sm outline-none"
              />
              <button className="rounded-full bg-[#1aa6a0] text-white px-4 py-2 text-sm font-semibold hover:bg-[#0f7e7b] transition cta-pill">
                Send
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
