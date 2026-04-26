import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-border bg-sand">
      <div className="container-narrow grid gap-12 py-16 md:grid-cols-3">
        <div>
          <p className="font-serif text-2xl text-foreground">이로이로</p>
          <p className="mt-2 text-xs uppercase tracking-[0.25em] text-muted-foreground">
            X세대 N잡러 K엄마 · Chipbirdie
          </p>
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-muted-foreground">
            경험을 연결하면 수익 구조가 됩니다. 블로그에서 시작해 대행사, 전자책,
            코칭, 공방까지 — 하나로 이어진 일의 방식.
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Sitemap</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/" className="text-foreground/80 hover:text-foreground">Home</Link></li>
            <li><Link to="/njob" className="text-foreground/80 hover:text-foreground">N잡 · 전자책 · 코칭</Link></li>
            <li><Link to="/agency" className="text-foreground/80 hover:text-foreground">블로그·마케팅 대행사</Link></li>
            <li><Link to="/craft" className="text-foreground/80 hover:text-foreground">공방 (푸어링아트)</Link></li>
            <li><Link to="/contact" className="text-foreground/80 hover:text-foreground">상담 / 카카오채널</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Contact</p>
          <ul className="mt-4 space-y-2 text-sm text-foreground/80">
            <li>카카오채널 · 이로이로</li>
            <li>블로그 운영 5년차</li>
            <li>전자책 · 1:1 코칭 운영중</li>
          </ul>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2 text-sm text-primary-foreground transition-opacity hover:opacity-90"
          >
            카카오채널 상담하기 →
          </Link>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="container-narrow flex flex-col items-start justify-between gap-2 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} iroiro. All rights reserved.</span>
          <span>경험을 연결하면 수익 구조가 됩니다.</span>
        </div>
      </div>
    </footer>
  );
}
