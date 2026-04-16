import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate()

  // Mock state — replace with real auth logic later
  const isLoggedIn = false;
  const userName = "Ali Khan";


  const handleNavigate = () => {
    navigate('/register')
  }

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex h-16 items-center justify-between">

          {/* ── Logo ── */}
          <a href="/" className="flex items-center gap-2 group">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 shadow-sm shadow-indigo-200 transition-transform duration-200 group-hover:scale-105">
              <svg
                className="h-4 w-4 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 20h9" />
                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4Z" />
              </svg>
            </div>
            <span className="text-[17px] font-semibold tracking-tight text-slate-800">
              Blog<span className="text-indigo-600">App</span>
            </span>
          </a>

          {/* ── Desktop Nav Links ── */}
          <div className="hidden md:flex items-center gap-1">
            <a
              href="/"
              className="rounded-lg px-4 py-2 text-[14px] font-medium text-slate-600 transition-colors duration-150 hover:bg-slate-100 hover:text-slate-900"
            >
              Home
            </a>
            <a
              href="/blog-list"
              className="rounded-lg px-4 py-2 text-[14px] font-medium text-slate-600 transition-colors duration-150 hover:bg-slate-100 hover:text-slate-900"
            >
              Blogs
            </a>
            <a
              href="/create-blog"
              className="rounded-lg px-4 py-2 text-[14px] font-medium text-slate-600 transition-colors duration-150 hover:bg-slate-100 hover:text-slate-900"
            >
              Create Blog
            </a>
          </div>

          {/* ── Auth Section ── */}
          <div className="hidden md:flex items-center gap-3">
            {isLoggedIn ? (
              <>
                {/* User chip */}
                <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-100 text-[10px] font-semibold text-indigo-700">
                    {userName
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <span className="text-[13px] font-medium text-slate-700">
                    {userName}
                  </span>
                </div>

                {/* Logout button */}
                <button className="rounded-lg border border-slate-200 px-4 py-2 text-[13px] font-medium text-slate-600 transition-all duration-150 hover:border-red-200 hover:bg-red-50 hover:text-red-600">
                  Logout
                </button>
              </>
            ) : (
              <>
                {/* Login */}
                <a
                  href="/login"
                  className="rounded-lg px-4 py-2 text-[14px] font-medium text-slate-600 transition-colors duration-150 hover:bg-slate-100 hover:text-slate-900"
                >
                  Login
                </a>

                {/* Sign Up */}
                <a
                  onClick={handleNavigate}
                  className="rounded-lg bg-indigo-600 px-4 py-2 text-[14px] font-medium text-white shadow-sm shadow-indigo-200 transition-all duration-150 hover:bg-indigo-700 hover:shadow-indigo-300 active:scale-[0.97]"
                >
                  Sign Up
                </a>
              </>
            )}
          </div>

        </div>
      </div>

    </nav>
  );
};

export default Navbar;