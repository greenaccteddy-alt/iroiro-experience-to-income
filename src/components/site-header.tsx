import { Link } from "@tanstack/react-router";
import { useState } from "react";
import iroiroMark from "../assets/iroiro-mark.jpg";

const navItems = [
  { to: "/", label: "메인" },
  { to: "/njob", label: "n잡 도전" },
  { to: "/agency", label: "대행사" },
  { to: "/craft", label: "공방" },
  { to: "/contact", label: "문의" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="container-narrow flex h-16 items-center justify-between md:h-20">
        <Link to="/" className="group flex items-baseline gap-2" onClick={() => setOpen(false)}>
          <span className="flex items-center gap-3">
            <img
              src={iroiroMark}
              alt="iroiro logo"
              width={36}
              height={36}
              className="h-9 w-9 rounded-full object-cover ring-1 ring-border/70"
            />
            <span className="font-serif text-2xl font-medium tracking-tight text-foreground">iroiro</span>
          </span>
          <span className="hidden text-[11px] uppercase tracking-[0.25em] text-muted-foreground sm:inline">
            n잡 도전기
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeProps={{ className: "text-foreground after:scale-x-100" }}
              inactiveProps={{ className: "text-muted-foreground hover:text-foreground" }}
              activeOptions={{ exact: item.to === "/" }}
              className="relative text-sm tracking-wide transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-accent after:transition-transform"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          aria-label="메뉴 열기"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border md:hidden"
        >
          <span className="relative block h-3 w-4">
            <span
              className={`absolute left-0 top-0 h-px w-4 bg-foreground transition-transform ${open ? "translate-y-[6px] rotate-45" : ""}`}
            />
            <span
              className={`absolute left-0 top-3 h-px w-4 bg-foreground transition-transform ${open ? "-translate-y-[6px] -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="container-narrow flex flex-col py-4">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                activeProps={{ className: "text-foreground" }}
                inactiveProps={{ className: "text-muted-foreground" }}
                activeOptions={{ exact: item.to === "/" }}
                className="py-3 font-serif text-lg"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
