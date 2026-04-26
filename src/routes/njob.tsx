import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/njob")({
  head: () => ({
    meta: [
      { title: "N잡 · 전자책 · 1:1 코칭 — 이로이로" },
      {
        name: "description",
        content:
          "블로그에서 시작해 수익으로, 수익에서 전자책과 코칭으로. 이로이로가 정리한 N잡의 구조.",
      },
      { property: "og:title", content: "N잡 · 전자책 · 코칭 — 이로이로" },
      {
        property: "og:description",
        content: "A4 한 장으로 시작하는 N잡 구조. 전자책과 1:1 코칭으로 함께합니다.",
      },
    ],
  }),
  component: NjobPage,
});

const ebookFeatures = [
  { title: "A4 한 장의 구조", desc: "처음 시작하는 사람도 따라 그릴 수 있는 한 장짜리 흐름도." },
  { title: "5년치 시행착오", desc: "이미 해본 사람이 모은 ‘하지 말아야 할 것’ 리스트." },
  { title: "수익화 사례", desc: "글 한 편이 어떻게 첫 수익이 됐는지, 실제 케이스로." },
];

const coachingItems = [
  { title: "1:1 진단", desc: "지금 막힌 지점을 정확히 짚어드립니다." },
  { title: "실행 플랜", desc: "다음 4주 동안 무엇을, 어떤 순서로 할지 함께 설계합니다." },
  { title: "후속 점검", desc: "글이 쌓이는지, 방향이 맞는지 — 곁에서 확인합니다." },
];

function NjobPage() {
  return (
    <div>
      <section className="border-b border-border bg-sand">
        <div className="container-narrow py-24 md:py-32">
          <p className="text-xs uppercase tracking-[0.3em] text-terracotta">N잡 Path</p>
          <h1 className="mt-4 max-w-3xl font-serif text-4xl text-balance text-foreground sm:text-5xl">
            시작이 어려운 게 아니라,<br />
            <em className="not-italic text-terracotta">구조</em>가 없어서였습니다
          </h1>
          <p className="mt-6 max-w-2xl text-muted-foreground">
            돈을 버는 방법이 100가지 있어도, 나에게 맞는 한 가지 흐름이 없으면
            오래 가지 못합니다. 이로이로는 ‘구조’를 먼저 알려드립니다.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container-narrow grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="text-xs uppercase tracking-[0.3em] text-terracotta">01 · 시작</p>
            <h2 className="mt-3 font-serif text-3xl text-foreground">블로그로 시작합니다</h2>
            <p className="mt-4 text-muted-foreground">
              자본이 거의 들지 않고, 검색 유입이라는 자산이 쌓이는 채널.
              모든 N잡 구조의 출발점입니다.
            </p>
          </div>
          <div className="md:col-span-7 space-y-3">
            {[
              "주 2회, 30분짜리 글 한 편부터 시작합니다.",
              "‘내가 잘 아는 것 × 사람들이 검색하는 것’의 교집합을 찾습니다.",
              "3개월간 30개의 글을 쌓는 것이 첫 목표입니다.",
            ].map((line, i) => (
              <div key={line} className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5">
                <span className="font-serif text-2xl text-clay">0{i + 1}</span>
                <p className="text-sm text-foreground/85">{line}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sand py-24">
        <div className="container-narrow">
          <div className="mb-12">
            <p className="text-xs uppercase tracking-[0.3em] text-terracotta">02 · 전자책</p>
            <h2 className="mt-3 font-serif text-3xl text-foreground">전자책으로 시작하기</h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              5년치 경험을 한 권으로 압축했습니다. 가장 빠르고, 가장 작은 시작.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {ebookFeatures.map((f) => (
              <article key={f.title} className="rounded-3xl bg-card p-7 shadow-soft">
                <h3 className="font-serif text-lg text-foreground">{f.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
              </article>
            ))}
          </div>
          <div className="mt-10">
            <Link to="/contact" className="inline-flex items-center gap-3 rounded-full bg-foreground px-6 py-3 text-sm text-primary-foreground hover:opacity-90">
              전자책 안내 받기 →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-narrow">
          <div className="mb-12">
            <p className="text-xs uppercase tracking-[0.3em] text-terracotta">03 · 1:1 코칭</p>
            <h2 className="mt-3 font-serif text-3xl text-foreground">코칭으로 정리하기</h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              글로는 닿지 않는 ‘나의 경우’. 한 사람을 위한 구조를 함께 그립니다.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {coachingItems.map((c, i) => (
              <article key={c.title} className="rounded-3xl border border-border p-7">
                <p className="font-serif text-2xl text-terracotta">0{i + 1}</p>
                <h3 className="mt-3 font-serif text-lg text-foreground">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
              </article>
            ))}
          </div>
          <div className="mt-12 rounded-[2rem] bg-foreground p-10 text-primary-foreground sm:p-14">
            <h3 className="font-serif text-2xl sm:text-3xl">막연한 마음을, 한 장의 계획으로.</h3>
            <p className="mt-3 max-w-xl text-primary-foreground/80">
              지금 갖고 있는 경험을 정리해서 다음 한 걸음을 보여드립니다.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/contact" className="inline-flex items-center gap-3 rounded-full bg-accent px-6 py-3 text-sm text-accent-foreground hover:-translate-y-0.5 transition-transform">
                1:1 코칭 신청하기 →
              </Link>
              <Link to="/" className="inline-flex items-center gap-3 rounded-full border border-primary-foreground/40 px-6 py-3 text-sm hover:bg-primary-foreground hover:text-foreground transition-colors">
                전체 구조 다시 보기
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
