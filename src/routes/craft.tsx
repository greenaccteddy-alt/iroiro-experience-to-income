import { createFileRoute, Link } from "@tanstack/react-router";

import craftPhoto from "../assets/craft.jpg";
import iroiroCraft from "../assets/iroiro-craft.jpg";

export const Route = createFileRoute("/craft")({
  head: () => ({
    meta: [
      { title: "이로이로 크래프트 | 공방" },
      {
        name: "description",
        content: "이로이로 크래프트 공방과 클래스, 브랜드 협업을 소개하는 페이지.",
      },
      { property: "og:title", content: "이로이로 크래프트 | 공방" },
      {
        property: "og:description",
        content: "만드는 시간과 결과물이 브랜드의 결로 이어지는 공방 페이지.",
      },
      { property: "og:image", content: craftPhoto },
    ],
  }),
  component: CraftPage,
});

const offerings = [
  {
    title: "원데이 클래스",
    desc: "처음 시작하는 분도 부담 없이 만들 수 있는 짧은 체험 클래스입니다.",
  },
  {
    title: "정규 클래스",
    desc: "취향과 속도에 맞춰 나만의 시리즈를 차근차근 쌓아갑니다.",
  },
  {
    title: "브랜드 협업",
    desc: "브랜드 결에 맞는 오브제와 제작 경험을 함께 기획합니다.",
  },
] as const;

function CraftPage() {
  return (
    <div>
      <section className="border-b border-border">
        <div className="container-narrow grid items-center gap-12 py-20 md:grid-cols-2 md:py-28">
          <div>
            <div className="inline-flex items-center gap-3 rounded-full border border-border bg-card px-3 py-2 shadow-soft">
              <img
                src={iroiroCraft}
                alt="이로이로 크래프트 로고"
                width={72}
                height={72}
                className="h-12 w-12 rounded-xl object-cover"
              />
              <span className="text-xs uppercase tracking-[0.3em] text-terracotta">Craft Studio</span>
            </div>
            <h1 className="mt-5 font-serif text-4xl text-balance text-foreground sm:text-5xl">
              만드는 시간도,
              <br />
              브랜드의 결이 됩니다
            </h1>
            <p className="mt-6 text-muted-foreground">
              이로이로 크래프트는 단순한 취미를 넘어서, 만드는 경험과 결과물이 하나의 브랜드 감각으로 이어지는 공방입니다.
            </p>
          </div>
          <img
            src={craftPhoto}
            alt="이로이로 크래프트 작업물"
            width={1200}
            height={1000}
            className="rounded-[1.75rem] object-cover shadow-lift"
          />
        </div>
      </section>

      <section className="py-24">
        <div className="container-narrow grid gap-6 md:grid-cols-3">
          {offerings.map((offering, index) => (
            <article key={offering.title} className="rounded-3xl border border-border bg-card p-7 shadow-soft">
              <p className="font-serif text-2xl text-clay">0{index + 1}</p>
              <h3 className="mt-3 font-serif text-lg text-foreground">{offering.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{offering.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="pb-24">
        <div className="container-narrow">
          <div className="rounded-[2rem] bg-sand p-10 text-center sm:p-16">
            <h2 className="font-serif text-3xl text-foreground sm:text-4xl">
              일정과 문의는 카카오채널로
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              클래스 일정, 비용, 협업 문의는 카카오채널로 가장 빠르게 안내해드립니다.
            </p>
            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-foreground px-6 py-3 text-sm text-primary-foreground hover:opacity-90"
              >
                카카오채널로 상담하기
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
