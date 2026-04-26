import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "상담 · 카카오채널 — 이로이로" },
      {
        name: "description",
        content:
          "전자책, 코칭, 블로그·마케팅 대행, 공방 클래스 — 모든 문의는 카카오채널에서 가장 빠르게 답변드립니다.",
      },
      { property: "og:title", content: "상담 · 카카오채널 — 이로이로" },
      { property: "og:description", content: "이로이로와 가장 빠르게 연결되는 길." },
    ],
  }),
  component: ContactPage,
});

const channels = [
  {
    tag: "추천",
    title: "카카오채널",
    desc: "가장 빠른 답변. 전자책·코칭·대행·공방 모두 여기로.",
    cta: "채널 추가하기",
  },
  {
    tag: "이메일",
    title: "Email Inquiry",
    desc: "긴 내용·자료 첨부가 필요한 협업 제안에 적합합니다.",
    cta: "메일 보내기",
  },
  {
    tag: "블로그",
    title: "이로이로 블로그",
    desc: "최근 글과 진행 중인 작업을 보고 싶다면.",
    cta: "블로그 방문",
  },
];

const purposes = [
  { label: "N잡 / 전자책 문의", target: "/njob" as const, hint: "처음 시작하는 분께 추천" },
  { label: "1:1 코칭 신청", target: "/njob" as const, hint: "내 상황에 맞춘 정리" },
  { label: "블로그·마케팅 대행", target: "/agency" as const, hint: "채널을 맡기고 싶을 때" },
  { label: "공방 / 푸어링아트", target: "/craft" as const, hint: "클래스·콜라보 안내" },
];

function ContactPage() {
  return (
    <div>
      <section className="border-b border-border bg-sand">
        <div className="container-narrow py-24 md:py-32">
          <p className="text-xs uppercase tracking-[0.3em] text-terracotta">Contact</p>
          <h1 className="mt-4 max-w-3xl font-serif text-4xl text-balance text-foreground sm:text-5xl">
            가장 빠른 길은<br /><em className="not-italic text-terracotta">카카오채널</em>입니다
          </h1>
          <p className="mt-6 max-w-2xl text-muted-foreground">
            궁금한 점, 지금 막힌 지점, 의뢰하고 싶은 일 — 한 줄만 적어 보내주셔도
            괜찮습니다. 평일 기준 24시간 안에 답변드립니다.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container-narrow grid gap-6 md:grid-cols-3">
          {channels.map((c, i) => (
            <article
              key={c.title}
              className={`rounded-3xl p-7 shadow-soft ${
                i === 0
                  ? "bg-foreground text-primary-foreground"
                  : "border border-border bg-card text-foreground"
              }`}
            >
              <span
                className={`inline-flex rounded-full px-3 py-1 text-[11px] uppercase tracking-widest ${
                  i === 0 ? "bg-accent text-accent-foreground" : "bg-secondary text-foreground/70"
                }`}
              >
                {c.tag}
              </span>
              <h3 className={`mt-4 font-serif text-xl ${i === 0 ? "text-primary-foreground" : "text-foreground"}`}>
                {c.title}
              </h3>
              <p className={`mt-3 text-sm leading-relaxed ${i === 0 ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                {c.desc}
              </p>
              <button
                type="button"
                className={`mt-6 inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm transition-opacity hover:opacity-90 ${
                  i === 0
                    ? "bg-accent text-accent-foreground"
                    : "bg-foreground text-primary-foreground"
                }`}
              >
                {c.cta} →
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-sand py-24">
        <div className="container-narrow">
          <p className="text-xs uppercase tracking-[0.3em] text-terracotta">먼저 어디로 갈지 골라보세요</p>
          <h2 className="mt-3 font-serif text-3xl text-foreground sm:text-4xl">
            문의 목적별 안내
          </h2>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {purposes.map((p) => (
              <Link
                key={p.label}
                to={p.target}
                className="group flex items-center justify-between gap-6 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-foreground"
              >
                <div>
                  <p className="font-serif text-lg text-foreground">{p.label}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{p.hint}</p>
                </div>
                <span className="text-terracotta transition-transform group-hover:translate-x-1">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
