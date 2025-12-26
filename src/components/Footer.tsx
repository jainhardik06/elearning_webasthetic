import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative mt-20 bg-[#dbeceb] text-[#2d4c4c] pt-24 pb-16 overflow-hidden rounded-t-[3rem] md:rounded-t-[5rem]">
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid lg:grid-cols-[1.5fr_1fr_1fr_1.5fr] gap-12">
          {/* Column 1: Logo & Info */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 text-2xl font-bold text-[#0b7b6e]">
               <div className="w-10 h-10 bg-[#0b7b6e] rounded-lg flex items-center justify-center text-white shadow-sm">
                 <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                 </svg>
               </div>
               <span className="tracking-tight">onlearn</span>
            </div>
            
            <div className="space-y-5 text-sm font-medium text-[#4a6b6b]">
               <div className="flex items-start gap-3">
                 <div className="w-5 h-5 mt-0.5 text-[#0b7b6e] shrink-0">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                 </div>
                 <div>
                   <span className="font-bold text-[#0f2f2f] block mb-1">Address:</span>
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                 </div>
               </div>
               
               <div className="flex items-center gap-3">
                 <div className="w-5 h-5 text-[#0b7b6e] shrink-0">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                 </div>
                 <span>Tel: +9229341037</span>
               </div>

               <div className="flex items-center gap-3">
                 <div className="w-5 h-5 text-[#0b7b6e] shrink-0">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                 </div>
                 <span>Response hours: 8 to 20</span>
               </div>

               <div className="flex items-center gap-3">
                 <div className="w-5 h-5 text-[#0b7b6e] shrink-0">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                 </div>
                 <span>Email: info@onlearn.com</span>
               </div>
            </div>
          </div>

          {/* Column 2: Categories */}
          <div className="lg:pl-8">
            <h3 className="font-bold text-[#0f2f2f] text-lg mb-6">Categories</h3>
            <ul className="space-y-4 text-[#4a6b6b] font-medium">
              <li><Link href="#" className="hover:text-[#0b7b6e] transition">Counseling</Link></li>
              <li><Link href="#" className="hover:text-[#0b7b6e] transition">Health and fitness</Link></li>
              <li><Link href="#" className="hover:text-[#0b7b6e] transition">Individual development</Link></li>
              <li><Link href="#" className="hover:text-[#0b7b6e] transition">more</Link></li>
            </ul>
          </div>

          {/* Column 3: Links */}
          <div>
            <h3 className="font-bold text-[#0f2f2f] text-lg mb-6">Links</h3>
            <ul className="space-y-4 text-[#4a6b6b] font-medium">
              <li><Link href="#" className="hover:text-[#0b7b6e] transition">About us</Link></li>
              <li><Link href="#" className="hover:text-[#0b7b6e] transition">blog</Link></li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="space-y-6">
             <h3 className="font-medium text-[#4a6b6b] text-lg">Stay up to date with the latest courses</h3>
             <div className="bg-white p-2 rounded-2xl shadow-sm flex items-center border border-white/50">
               <input 
                 type="email" 
                 placeholder="Email" 
                 className="flex-1 bg-transparent px-4 py-2 outline-none text-gray-600 placeholder-gray-400 min-w-0"
               />
               <button className="bg-[#0b7b6e] text-white px-6 py-2.5 rounded-xl font-bold hover:bg-[#09665b] transition shadow-sm">
                 Send
               </button>
             </div>
          </div>
        </div>
      </div>
      
      {/* Background decoration lines */}
      <div className="absolute right-0 bottom-0 pointer-events-none opacity-[0.03] overflow-hidden w-1/2 h-full">
         <svg viewBox="0 0 400 400" fill="none" className="w-full h-full">
             <path d="M0 400C100 350 200 100 400 0" stroke="black" strokeWidth="2"/>
             <path d="M50 400C150 350 250 150 400 50" stroke="black" strokeWidth="2"/>
             <path d="M100 400C200 350 300 200 400 100" stroke="black" strokeWidth="2"/>
         </svg>
      </div>
    </footer>
  );
}
