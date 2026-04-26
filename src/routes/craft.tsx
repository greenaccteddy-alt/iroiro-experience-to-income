import { createFileRoute, Link } from "@tanstack/react-router";

import craft from "../assets/craft.jpg";

export const Route = createFileRoute("/craft")({
  head: () => ({
    meta: [
      { title: "공방 · 푸어링아트 — 이로이로" },
      {
        name: "description",
        content:
          "손으로 만드는 시간이 다시 글이 되고, 콘텐츠가 됩니다. 이로이로의 공방, 푸어링아트.",
      },
      { property: "og:title", content: "공방 · 푸어링아트 — 이로이로" },
      {
        property: "og:description",
        content: "브랜드의 결을 만드는 손의 시간. 푸어링아트 공방 안내.",
      },
      { property: "og:image", content: craft },
    ],
  }),
  component: CraftPage,
});

function CraftPage() {
  return (
    <div>
      <section className="border-b border-border">
        <div className="container-narrow grid items-center gap-12 py-20 md:grid-cols-2 md:py-28">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-terracotta">Craft Studio</p>
            <h1 className="mt-4 font-serif text-4xl text-balance text-foreground sm:text-5xl">
              손으로 만드는 시간이,<br />브랜드의 <em className="not-italic text-terracotta">결</em>이 됩니다
            </h1>
            <p className="mt-6 text-muted-foreground">
              푸어링아트는 단순한 취미가 아닙니다. 색을 고르고, 결을 만들고, 기다리는
              시간 — 그 모든 것이 이로이로의 톤과 콘텐츠로 이어집니다.
            </p>
          </div>
          <img
            src={craft}
            alt="푸어링아트 작품"
            width={1200}
            height={1000}
            className="rounded-[1.75rem] object-cover shadow-lift"
          />
        </div>
      </section>

      <section className="py-24">
        <div className="container-narrow grid gap-6 md:grid-cols-3">
          {[
            { title: "원데이 클래스", desc: "처음 시작하는 분을 위한 한 번의 경험. 작품 한 점을 가져갑니다." },
            { title: "정규 클래스", desc: "꾸준히 색과 결을 다루며 자기만의 시리즈를 완성합니다." },
            { title: "브랜드 콜라보", desc: "브랜드의 톤에 맞는 푸어링아트 작품을 함께 기획합니다." },
          ].map((c, i) => (
            <article key={c.title} className="rounded-3xl border border-border bg-card p-7 shadow-soft">
              <p className="font-serif text-2xl text-clay">0{i + 1}</p>
              <h3 className="mt-3 font-serif text-lg text-foreground">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="pb-24">
        <div className="container-narrow">
          <div className="rounded-[2rem] bg-sand p-10 text-center sm:p-16">
            <h2 className="font-serif text-3xl text-foreground sm:text-4xl">
              일정·신청은 카카오채널로
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              월별 클래스 일정과 빈 자리는 카카오채널로 가장 빠르게 안내드립니다.
            </p>
            <div className="mt-8">
              <Link to="/contact" className="inline-flex items-center gap-3 rounded-full bg-foreground px-6 py-3 text-sm text-primary-foreground hover:opacity-90">
                카카오채널 상담하기 →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
