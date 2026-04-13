
import React from "react";
import { useNavigate } from "react-router-dom";
 
const Home = () => {
    const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
 
      {/* ── Hero Section ── */}
      <section className="relative overflow-hidden bg-white">
 
        {/* Background subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle, #6366f1 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />
 
        {/* Soft glow blob */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-indigo-100 rounded-full blur-3xl opacity-40 -z-0" />
 
        <div className="relative z-10 mx-auto max-w-4xl px-6 py-28 text-center">
 
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 animate-pulse" />
            <span className="text-xs font-semibold tracking-wide text-indigo-600 uppercase">
              Now live — Start reading today
            </span>
          </div>
 
          {/* Heading */}
          <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight text-slate-900 md:text-6xl">
            Ideas worth{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-indigo-600">reading.</span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-indigo-100 -z-0 rounded" />
            </span>
          </h1>
 
          {/* Description */}
          <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-slate-500">
            BlogApp is a space for curious minds. Discover stories on tech,
            design, startups, and everything in between — written by people who
            actually care.
          </p>
 
          {/* CTA Button */}
          <a
            href="/blog-list"
            className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-8 py-3.5 text-[15px] font-semibold text-white shadow-md shadow-indigo-200 transition-all duration-200 hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-300 active:scale-[0.97]"
          >
            Explore Blogs
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
 
        </div>
      </section>
    </div>
  );
};
 
export default Home;