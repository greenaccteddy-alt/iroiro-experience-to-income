import { Link } from "@tanstack/react-router";
import iroiroMark from "../assets/iroiro-mark.jpg";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-border bg-sand">
      <div className="container-narrow grid gap-10 py-14 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={iroiroMark}
              alt="iroiro logo"
              width={40}
              height={40}
              className="h-10 w-10 rounded-full object-cover ring-1 ring-border/70"
            />
            <p className="font-serif text-2xl text-foreground">iroiro</p>
          </div>
          <p className="mt-2 text-xs uppercase tracking-[0.25em] text-muted-foreground">Chipbirdie N잡 도전기</p>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
            메인에서 빠르게 갈라지고, 필요한 곳으로 바로 들어가는 구조로 정리한 홈페이지입니다.
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">바로가기</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link to="/" className="text-foreground/80 hover:text-foreground">
                메인
              </Link>
            </li>
            <li>
              <Link to="/njob" className="text-foreground/80 hover:text-foreground">
                N잡 도전하기
              </Link>
            </li>
            <li>
              <Link to="/agency" className="text-foreground/80 hover:text-foreground">
                대행사
              </Link>
            </li>
            <li>
              <Link to="/craft" className="text-foreground/80 hover:text-foreground">
                공방
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-foreground/80 hover:text-foreground">
                문의
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">한눈에 보기</p>
          <ul className="mt-4 space-y-2 text-sm text-foreground/80">
            <li>전자책 읽기</li>
            <li>N잡 마인드맵 작성</li>
            <li>1:1 코칭</li>
            <li>블로그, 대행사, 공방, 일본어 수업, 인스타툰</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="container-narrow flex flex-col items-start justify-between gap-2 py-5 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} iroiro</span>
          <span>N잡 도전기</span>
        </div>
      </div>
    </footer>
  );
}
