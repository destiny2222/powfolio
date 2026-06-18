import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative md:min-h-screen min-h-[65vh] overflow-hidden flex flex-col items-center pt-32 pb-20 px-6">
        
        {/* Top Background Shapes Container */}
        <div className="absolute md:top-0 top-5  translate-y-[10%] md:-translate-y-[40%] left-0 right-0 flex justify-between items-start w-full opacity-80 pointer-events-none -z-10">
          <div className="relative w-1/6 animate-wave" style={{ animationDelay: '0s' }}>
            <img src="/circle_rectangle_1.png" alt="" className="w-full h-auto" />
          </div>
          <div className="relative w-1/6 animate-wave" style={{ animationDelay: '0.2s' }}>
            <img src="/circle_rectangle_2.png" alt="" className="w-full h-auto" />
          </div>
          <div className="relative w-1/6 animate-wave" style={{ animationDelay: '0.4s' }}>
            <img src="/circle_rectangle_3.png" alt="" className="w-full h-auto" />
          </div>
          <div className="relative w-1/6 animate-wave" style={{ animationDelay: '0.6s' }}>
            <img src="/circle_rectangle_4.png" alt="" className="w-full h-auto" />
          </div>
          <div className="relative w-1/6 animate-wave" style={{ animationDelay: '0.8s' }}>
            <img src="/circle_rectangle_5.png" alt="" className="w-full h-auto" />
          </div>
          <div className="relative w-1/6 animate-wave" style={{ animationDelay: '1s' }}>
            <img src="/circle_rectangle_6.png" alt="" className="w-full h-auto" />
          </div>
        </div>

        {/* Bottom Background Shapes Container */}
        <div className="absolute bottom-0 translate-y-[25%] left-0 right-0 flex justify-between items-end w-full opacity-80 pointer-events-none -z-10">
          <div className="relative w-1/6 animate-wave" style={{ animationDelay: '0s' }}>
            <img src="/circle_rectangle_1.png" alt="" className="w-full h-auto rotate-180" />
          </div>
          <div className="relative w-1/6 animate-wave" style={{ animationDelay: '0.2s' }}>
            <img src="/circle_rectangle_2.png" alt="" className="w-full h-auto rotate-180" />
          </div>
          <div className="relative w-1/6 animate-wave" style={{ animationDelay: '0.4s' }}>
            <img src="/circle_rectangle_3.png" alt="" className="w-full h-auto rotate-180" />
          </div>
          <div className="relative w-1/6 animate-wave" style={{ animationDelay: '0.6s' }}>
            <img src="/circle_rectangle_4.png" alt="" className="w-full h-auto rotate-180" />
          </div>
          <div className="relative w-1/6 animate-wave" style={{ animationDelay: '0.8s' }}>
            <img src="/circle_rectangle_5.png" alt="" className="w-full h-auto rotate-180" />
          </div>
          <div className="relative w-1/6 animate-wave" style={{ animationDelay: '1s' }}>
            <img src="/circle_rectangle_6.png" alt="" className="w-full h-auto rotate-180" />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto text-center md:pt-32 pt-16 md:pb-20 pb-5">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#E6F8F6] text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-primary inline-block"></span>
            Proof Of Work
          </div>

          {/* Headline */}
          <h1 className="md:text-[40px] text-[28px] font-inter font-bold text-gray-900 mb-6 leading-tight text-center">
            Your <span className="text-primary italic font-playfair font-semibold">portfolio.</span> Updated automatically.
          </h1>

          {/* Subheadline */}
          <p className="text-sm md:text-xl text-gray-600 max-w-2xl mb-10 leading-relaxed">
            Post your work on social platforms. Powfolio organizes it into a clean, professional portfolio instantly. Just a tag away.
          </p>

          {/* CTA Button */}
          <button className="border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-300 px-8 py-3 rounded-full font-medium text-lg shadow-sm">
            Join the waitlist
          </button>

        </div>
      </section>

      <section id="features" className="bg-[#F8FAFC] py-24 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[32px] font-inter font-bold text-center leading-none text-slate-900 mb-16 tracking-[0%]">Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Card 1 */}
            <div className="group bg-white rounded-3xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] transition-all duration-300 p-10 flex flex-col items-center relative min-h-[220px] overflow-hidden cursor-pointer">
              <div className="absolute -bottom-20 -right-8 opacity-0 group-hover:opacity-[0.08] transition-opacity duration-500 pointer-events-none">
                <img src="/logo.png" alt="" className="w-56 h-56 object-contain" />
              </div>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center transition-transform duration-500 group-hover:-translate-y-4">
                <div className="w-[2px] h-12 bg-primary/20"></div>
                <div className="w-10 h-10 rounded-full bg-primary flex border border-[#CCFBF1] items-center justify-center text-white shrink-0 mt-[-2px] shadow-sm">
                  <svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
                </div>
              </div>
              <div className="mt-14 flex flex-col justify-center flex-1 relative z-10 w-full">
                <h3 className="text-[24px] font-inter font-bold text-center leading-tight text-slate-900 group-hover:text-primary transition-colors duration-300 mb-3 tracking-[0%]">Structured Case Study Builder</h3>
                <p className="text-[16px] font-nunito font-normal text-center leading-tight text-slate-900 tracking-[0%]">Turn projects into clear, professional case studies with guided sections for problem, process, solution, and results.</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group bg-white rounded-3xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] transition-all duration-300 p-10 flex flex-col items-center relative min-h-[220px] overflow-hidden cursor-pointer">
              <div className="absolute -bottom-20 -right-8 opacity-0 group-hover:opacity-[0.08] transition-opacity duration-500 pointer-events-none">
                <img src="/logo.png" alt="" className="w-56 h-56 object-contain" />
              </div>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center transition-transform duration-500 group-hover:-translate-y-4">
                <div className="w-[2px] h-12 bg-primary/20"></div>
                <div className="w-10 h-10 rounded-full bg-primary flex border border-[#CCFBF1] items-center justify-center text-white shrink-0 mt-[-2px] shadow-sm">
                  <svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
              </div>
              <div className="mt-14 flex flex-col justify-center flex-1 relative z-10 w-full">
                <h3 className="text-[24px] font-inter font-bold text-center leading-tight text-slate-900 group-hover:text-primary transition-colors duration-300 mb-3 tracking-[0%]">Smart Portfolio Flow</h3>
                <p className="text-[16px] font-nunito font-normal text-center leading-tight text-slate-900 tracking-[0%]">Arrange your projects strategically. Highlight your strongest work first and create a logical viewing experience for clients.</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group bg-white rounded-3xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] transition-all duration-300 p-10 flex flex-col items-center relative min-h-[220px] overflow-hidden cursor-pointer">
              <div className="absolute -bottom-20 -right-8 opacity-0 group-hover:opacity-[0.08] transition-opacity duration-500 pointer-events-none">
                <img src="/logo.png" alt="" className="w-56 h-56 object-contain" />
              </div>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center transition-transform duration-500 group-hover:-translate-y-4">
                <div className="w-[2px] h-12 bg-primary/20"></div>
                <div className="w-10 h-10 rounded-full bg-primary flex border border-[#CCFBF1] items-center justify-center text-white shrink-0 mt-[-2px] shadow-sm">
                  <svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
                </div>
              </div>
              <div className="mt-14 flex flex-col justify-center flex-1 relative z-10 w-full">
                <h3 className="text-[24px] font-inter font-bold text-center leading-tight text-slate-900 group-hover:text-primary transition-colors duration-300 mb-3 tracking-[0%]">Conversion-Optimized Layouts</h3>
                <p className="text-[16px] font-nunito font-normal text-center leading-tight text-slate-900 tracking-[0%]">Clean, minimal templates designed for hiring managers and clients — not just visual decoration.</p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="group bg-white rounded-3xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] transition-all duration-300 p-10 flex flex-col items-center relative min-h-[220px] overflow-hidden cursor-pointer">
              <div className="absolute -bottom-20 -right-8 opacity-0 group-hover:opacity-[0.08] transition-opacity duration-500 pointer-events-none">
                <img src="/logo.png" alt="" className="w-56 h-56 object-contain" />
              </div>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center transition-transform duration-500 group-hover:-translate-y-4">
                <div className="w-[2px] h-12 bg-primary/20"></div>
                <div className="w-10 h-10 rounded-full bg-primary flex border border-[#CCFBF1] items-center justify-center text-white shrink-0 mt-[-2px] shadow-sm">
                  <svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.45m0 0a15.01 15.01 0 01-.06-.312m-2.24 2.39a4.49 4.49 0 001.415-1.515m1.515-1.415a4.49 4.49 0 00-1.515 1.415z" /></svg>
                </div>
              </div>
              <div className="mt-14 flex flex-col justify-center flex-1 relative z-10 w-full">
                <h3 className="text-[24px] font-inter font-bold text-center leading-tight text-slate-900 group-hover:text-primary transition-colors duration-300 mb-3 tracking-[0%]">Launch in Minutes</h3>
                <p className="text-[16px] font-nunito font-normal text-center leading-tight text-slate-900 tracking-[0%]">No coding. No domain stress. No plugins. Upload your work, organize it, and go live instantly.</p>
              </div>
            </div>

            {/* Card 5 */}
            <div className="group bg-white rounded-3xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] transition-all duration-300 p-10 flex flex-col items-center relative min-h-[220px] overflow-hidden cursor-pointer">
              <div className="absolute -bottom-20 -right-8 opacity-0 group-hover:opacity-[0.08] transition-opacity duration-500 pointer-events-none">
                <img src="/logo.png" alt="" className="w-56 h-56 object-contain" />
              </div>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center transition-transform duration-500 group-hover:-translate-y-4">
                <div className="w-[2px] h-12 bg-primary/20"></div>
                <div className="w-10 h-10 rounded-full bg-primary flex border border-[#CCFBF1] items-center justify-center text-white shrink-0 mt-[-2px] shadow-sm">
                  <svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" /></svg>
                </div>
              </div>
              <div className="mt-14 flex flex-col justify-center flex-1 relative z-10 w-full">
                <h3 className="text-[24px] font-inter font-bold text-center leading-tight text-slate-900 group-hover:text-primary transition-colors duration-300 mb-3 tracking-[0%]">Share-Ready Links</h3>
                <p className="text-[16px] font-nunito font-normal text-center leading-tight text-slate-900 tracking-[0%]">Send your portfolio anywhere. Optimized previews for LinkedIn, Instagram, and messaging platforms.</p>
              </div>
            </div>

            {/* Card 6 */}
            <div className="group bg-white rounded-3xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] transition-all duration-300 p-10 flex flex-col items-center relative min-h-[220px] overflow-hidden cursor-pointer">
              <div className="absolute -bottom-20 -right-8 opacity-0 group-hover:opacity-[0.08] transition-opacity duration-500 pointer-events-none">
                <img src="/logo.png" alt="" className="w-56 h-56 object-contain" />
              </div>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center transition-transform duration-500 group-hover:-translate-y-4">
                <div className="w-[2px] h-12 bg-primary/20"></div>
                <div className="w-10 h-10 rounded-full bg-primary flex border border-[#CCFBF1] items-center justify-center text-white shrink-0 mt-[-2px] shadow-sm">
                  <svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
                </div>
              </div>
              <div className="mt-14 flex flex-col justify-center flex-1 relative z-10 w-full">
                <h3 className="text-[24px] font-inter font-bold text-center leading-tight text-slate-900 group-hover:text-primary transition-colors duration-300 mb-3 tracking-[0%]">Affordable Professional Presence</h3>
                <p className="text-[16px] font-nunito font-normal text-center leading-tight text-slate-900 tracking-[0%]">Get a structured, professional portfolio without paying premium website-builder prices.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* How it works Section */}
      <section id="how-it-works" className="bg-primary relative py-32 px-6 overflow-hidden">
        {/* Decorative background shapes */}
        <div className="absolute top-20 -left-10 w-64 h-64 bg-white/[0.07] rounded-[3rem] rotate-12"></div>
        <div className="absolute top-10 right-1/4 w-32 h-32 bg-white/[0.07] rounded-[2rem] -rotate-12"></div>
        <div className="absolute top-40 -right-10 w-80 h-80 bg-white/[0.07] rounded-[4rem] rotate-45"></div>
        <div className="absolute -bottom-20 left-1/3 w-56 h-56 bg-white/[0.07] rounded-[3rem] -rotate-6"></div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-[32px] font-inter font-bold text-center text-white mb-4 leading-none tracking-[0%]">How it works</h2>
            <p className="text-[20px] font-nunito font-normal text-center leading-none text-white/90 tracking-[0%]">Build Your Portfolio in 3 Simple Steps</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group bg-white rounded-3xl p-10 flex flex-col items-center justify-center relative min-h-[280px] shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)] transition-all duration-300 overflow-hidden cursor-pointer">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center transition-transform duration-500 group-hover:-translate-y-6">
                <div className="w-[2px] h-14 bg-primary/20"></div>
                <div className="w-12 h-12 rounded-full bg-primary flex border border-[#CCFBF1] items-center justify-center text-white shrink-0 mt-[-2px] shadow-sm">
                  <svg fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>
                </div>
              </div>

              {/* Hover Number */}
              <div className="absolute -bottom-8 -left-2 text-[100px] font-inter font-black italic text-slate-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none select-none leading-none tracking-tighter z-0">
                01
              </div>

              <div className="mt-12 flex flex-col items-center relative z-10 w-full">
                <h3 className="text-[18px] font-inter font-bold text-center leading-tight text-slate-900 group-hover:text-primary transition-colors duration-300 tracking-[0%]">
                  Post Your Design on X
                </h3>
                <div className="overflow-hidden transition-all duration-500 max-h-0 group-hover:max-h-[100px] opacity-0 group-hover:opacity-100">
                  <p className="text-[15px] font-nunito text-slate-500 text-center leading-relaxed pt-3">
                    Share your work like you normally would.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group bg-white rounded-3xl p-10 flex flex-col items-center justify-center relative min-h-[280px] shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)] transition-all duration-300 overflow-hidden cursor-pointer">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center transition-transform duration-500 group-hover:-translate-y-6">
                <div className="w-[2px] h-14 bg-primary/20"></div>
                <div className="w-12 h-12 rounded-full bg-primary flex border border-[#CCFBF1] items-center justify-center text-white shrink-0 mt-[-2px] shadow-sm">
                  <span className="font-bold text-xl">@</span>
                </div>
              </div>

              {/* Hover Number */}
              <div className="absolute -bottom-8 -left-2 text-[100px] font-inter font-black italic text-slate-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none select-none leading-none tracking-tighter z-0">
                02
              </div>

              <div className="mt-12 flex flex-col items-center relative z-10 w-full">
                <h3 className="text-[18px] font-inter font-bold text-center leading-tight text-slate-900 group-hover:text-primary transition-colors duration-300 tracking-[0%]">
                  Tag @Powfolio + Add One Hashtag
                </h3>
                <div className="overflow-hidden transition-all duration-500 max-h-0 group-hover:max-h-[100px] opacity-0 group-hover:opacity-100">
                  <p className="text-[15px] font-nunito text-slate-500 text-center leading-relaxed pt-3">
                    The hashtag becomes your folder name.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group bg-white rounded-3xl p-10 flex flex-col items-center justify-center relative min-h-[280px] shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)] transition-all duration-300 overflow-hidden cursor-pointer">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center transition-transform duration-500 group-hover:-translate-y-6">
                <div className="w-[2px] h-14 bg-primary/20"></div>
                <div className="w-12 h-12 rounded-full bg-primary flex border border-[#CCFBF1] items-center justify-center text-white shrink-0 mt-[-2px] shadow-sm">
                  <svg fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" /></svg>
                </div>
              </div>

              {/* Hover Number */}
              <div className="absolute -bottom-8 -left-2 text-[100px] font-inter font-black italic text-slate-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none select-none leading-none tracking-tighter z-0">
                03
              </div>

              <div className="mt-12 flex flex-col items-center relative z-10 w-full">
                <h3 className="text-[18px] font-inter font-bold text-center leading-tight text-slate-900 group-hover:text-primary transition-colors duration-300 tracking-[0%]">
                  Automatically Added to Your Portfolio
                </h3>
                <div className="overflow-hidden transition-all duration-500 max-h-0 group-hover:max-h-[120px] opacity-0 group-hover:opacity-100">
                  <p className="text-[15px] font-nunito text-slate-500 text-center leading-relaxed pt-3">
                    Your design is instantly uploaded and sorted into the correct folder.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-white relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[40px] font-inter font-bold text-slate-900 text-center mb-16 leading-none">Pricing</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            
            {/* Free Card */}
            <div className="bg-white rounded-[2rem] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden flex flex-col">
              <div className="bg-[#E6F8F6] p-10 text-center">
                <h3 className="font-inter font-bold text-slate-900 mb-2">Free</h3>
                <div className="text-[40px] font-inter font-bold text-slate-900 leading-none">$0<span className="text-[16px] font-nunito font-normal text-slate-500">/mo</span></div>
              </div>
              <div className="p-10 flex-1 flex flex-col">
                <ul className="space-y-5 mb-10 flex-1">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-slate-700 shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    <span className="text-slate-500 font-nunito text-[15px]">One connected social account</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-slate-700 shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    <span className="text-slate-500 font-nunito text-[15px]">Up to 10 Powfolio items</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-slate-700 shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    <span className="text-slate-500 font-nunito text-[15px]">Limited to 1 folder</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-slate-700 shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    <span className="text-slate-500 font-nunito text-[15px]">Powfolio subdomain</span>
                  </li>
                </ul>
                <button className="w-full border border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-300 py-3 rounded-full font-nunito font-semibold text-[16px]">
                  Join the waitlist
                </button>
              </div>
            </div>

            {/* Pro Card */}
            <div className="bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 overflow-hidden flex flex-col relative">
              <div className="bg-primary p-10 text-center relative">
                <div className="absolute top-4 left-4 bg-[#E6F8F6] text-primary text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">Most popular</div>
                <h3 className="font-inter font-bold text-white mb-2">Pro</h3>
                <div className="text-[40px] font-inter font-bold text-white leading-none">$5<span className="text-[16px] font-nunito font-normal text-white/80">/mo</span></div>
              </div>
              <div className="p-10 flex-1 flex flex-col">
                <ul className="space-y-5 mb-10 flex-1">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-slate-700 shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    <span className="text-slate-500 font-nunito text-[15px]">3 connected social account</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-slate-700 shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    <span className="text-slate-500 font-nunito text-[15px]">Unlimited Powfolio items</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-slate-700 shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    <span className="text-slate-500 font-nunito text-[15px]">Unlimited folders</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-slate-700 shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    <span className="text-slate-500 font-nunito text-[15px]">Powfolio subdomain</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-slate-700 shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    <span className="text-slate-500 font-nunito text-[15px]">Analytics Dashboard</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-slate-700 shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    <span className="text-slate-500 font-nunito text-[15px]">Verified pro badge</span>
                  </li>
                </ul>
                <button className="w-full border border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-300 py-3 rounded-full font-nunito font-semibold text-[16px]">
                  Join the waitlist
                </button>
              </div>
            </div>

            {/* Studio Card */}
            <div className="bg-white rounded-[2rem] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden flex flex-col">
              <div className="bg-[#E6F8F6] p-10 text-center">
                <h3 className="font-inter font-bold text-slate-900 mb-2">Studio</h3>
                <div className="text-[40px] font-inter font-bold text-slate-900 leading-none">$24<span className="text-[16px] font-nunito font-normal text-slate-500">/mo</span></div>
              </div>
              <div className="p-10 flex-1 flex flex-col">
                <ul className="space-y-5 mb-10 flex-1">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-slate-700 shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    <span className="text-slate-500 font-nunito text-[15px]">One connected social account</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-slate-700 shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    <span className="text-slate-500 font-nunito text-[15px]">Unlimited Powfolio items</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-slate-700 shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    <span className="text-slate-500 font-nunito text-[15px]">Unlimited folders</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-slate-700 shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    <span className="text-slate-500 font-nunito text-[15px]">Team collaboration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-slate-700 shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    <span className="text-slate-500 font-nunito text-[15px]">Powfolio subdomain</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-slate-700 shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    <span className="text-slate-500 font-nunito text-[15px]">Advanced analytics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-slate-700 shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    <span className="text-slate-500 font-nunito text-[15px]">Advanced analytics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-slate-700 shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    <span className="text-slate-500 font-nunito text-[15px]">Verified studio badge</span>
                  </li>
                </ul>
                <button className="w-full border border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-300 py-3 rounded-full font-nunito font-semibold text-[16px]">
                  Join the waitlist
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="connect" className="bg-primary relative py-32 px-6 overflow-hidden">
        {/* Decorative background shapes */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <img src="/circle_cta_left.png" alt=""  className="w-[250px] h-[250px] md:w-[550px] md:h-[500px] absolute -bottom-20 md:top-35 -left-20 object-contain opacity-30 md:opacity-100" />
          <img src="/circle_cta_right.png" alt=""  className="w-[250px] h-[250px] md:w-[550px] md:h-[500px] absolute -top-10 md:top-0 -right-20 md:-right-30 object-contain opacity-30 md:opacity-100" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
          <div className="bg-white/20 text-white px-4 py-1.5 rounded-full text-sm font-medium mb-8 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-white inline-block"></span>
            Get early Access
          </div>

          <h2 className="text-[30px] md:text-[50px] font-inter font-bold text-white mb-6 leading-tight">
            Your portfolio is waiting to <span className="font-playfair italic font-semibold">catch up</span>
          </h2>

          <p className="text-[18px] text-white/90 font-nunito mb-10 max-w-lg">
            Join the waitlist and be the first to know when Powfolio launches
          </p>

          <form className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
            <input 
              type="email" 
              placeholder="Enter your Email" 
              className="flex-1 bg-transparent border border-white/40 rounded-full px-6 py-3 text-white placeholder:text-white/70 focus:outline-none focus:border-white transition-colors font-nunito"
            />
            <button 
              type="button" 
              className="bg-white text-primary font-nunito font-bold rounded-full px-8 py-3 hover:bg-white/90 transition-colors"
            >
              Join the waitlist
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary-dark px-6 pb-12 pt-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center relative z-10">
          <div className="text-[32px] font-inter font-black text-slate-900 mb-6 md:mb-0 tracking-[0%] leading-none flex items-center">
            Pow<span className="italic text-[#F8FAFC]">folio</span>
          </div>
          <div className="flex gap-8 text-slate-900 font-nunito font-semibold text-[15px]">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#how-it-works" className="hover:text-white transition-colors">How it works</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
            <a href="#connect" className="hover:text-white transition-colors">Connect</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
