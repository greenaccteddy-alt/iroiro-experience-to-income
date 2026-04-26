import { createFileRoute, Link } from "@tanstack/react-router";

import iroiroAgency from "../assets/iroiro-agency.png";

export const Route = createFileRoute("/agency")({
  head: () => ({
    meta: [
      { title: "이로이로 에이전시 | 대행사" },
      {
        name: "description",
        content: "블로그, 콘텐츠, 채널 운영 흐름을 정리해주는 이로이로 에이전시 페이지.",
      },
      { property: "og:title", content: "이로이로 에이전시 | 대행사" },
      {
        property: "og:description",
        content: "브랜드에 맞는 글과 흐름을 함께 설계하는 콘텐츠 대행사.",
      },
    ],
  }),
  component: AgencyPage,
});

const services = [
  {
    title: "블로그 최적화",
    desc: "검색에 걸리는 글 구조와 발행 흐름을 함께 정리합니다.",
  },
  {
    title: "콘텐츠 기획",
    desc: "브랜드 결을 해치지 않으면서 이어서 읽히는 콘텐츠를 만듭니다.",
  },
  {
    title: "채널 운영 정리",
    desc: "기획, 작성, 발행, 점검까지 반복 가능한 방식으로 정돈합니다.",
  },
  {
    title: "컨설팅",
    desc: "지금 운영 중인 채널을 보고 다음 단계 방향을 함께 잡습니다.",
  },
] as const;

const principles = [
  {
    tag: "직접",
    title: "해본 방식으로 갑니다",
    desc: "이론보다 실제 운영 경험에서 나온 흐름을 우선합니다.",
  },
  {
    tag: "데이터",
    title: "감보다 숫자를 봅니다",
    desc: "유입, 반응, 전환을 체크하면서 다음 글과 방향에 반영합니다.",
  },
  {
    tag: "결",
    title: "브랜드 톤을 지킵니다",
    desc: "정답 같은 문장이 아니라, 그 브랜드다운 문장을 함께 만듭니다.",
  },
] as const;

function AgencyPage() {
  return (
    <div>
      <section className="border-b border-border">
        <div className="container-narrow grid items-center gap-10 py-24 md:grid-cols-[1.2fr_0.8fr] md:py-32">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-terracotta">Agency</p>
            <h1 className="mt-4 max-w-3xl font-serif text-4xl text-balance text-foreground sm:text-5xl">
              블로그와 콘텐츠 운영을
              <br />
              브랜드 흐름에 맞게 정리합니다
            </h1>
            <p className="mt-6 max-w-2xl text-muted-foreground">
              매일 쓰고 운영해본 경험을 바탕으로, 브랜드에 맞는 콘텐츠 구조와 채널 흐름을 함께 만듭니다.
            </p>
            <div className="mt-10">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-foreground px-6 py-3 text-sm text-primary-foreground hover:opacity-90"
              >
                카카오채널로 상담하기
              </Link>
            </div>
          </div>

          <div className="flex justify-start md:justify-end">
            <div className="rounded-[2rem] border border-border bg-card/80 p-5 shadow-soft">
              <img
                src={iroiroAgency}
                alt="이로이로 에이전시 로고"
                width={400}
                height={240}
                className="h-auto w-full max-w-[280px] rounded-[1.25rem] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-narrow">
          <p className="text-xs uppercase tracking-[0.3em] text-terracotta">Services</p>
          <h2 className="mt-3 font-serif text-3xl text-foreground sm:text-4xl">제공 서비스</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {services.map((service, index) => (
              <article
                key={service.title}
                className="group rounded-3xl border border-border bg-card p-8 shadow-soft transition-shadow hover:shadow-lift"
              >
                <p className="font-serif text-2xl text-clay">0{index + 1}</p>
                <h3 className="mt-4 font-serif text-xl text-foreground">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sand py-24">
        <div className="container-narrow">
          <p className="text-xs uppercase tracking-[0.3em] text-terracotta">Principles</p>
          <h2 className="mt-3 font-serif text-3xl text-foreground sm:text-4xl">이렇게 운영합니다</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {principles.map((principle) => (
              <article key={principle.title} className="rounded-3xl bg-card p-7 shadow-soft">
                <span className="inline-flex rounded-full bg-secondary px-3 py-1 text-[11px] uppercase tracking-widest text-foreground/70">
                  {principle.tag}
                </span>
                <h3 className="mt-4 font-serif text-lg text-foreground">{principle.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{principle.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-narrow">
          <div className="rounded-[2.5rem] bg-foreground p-10 text-primary-foreground sm:p-16">
            <h2 className="font-serif text-3xl sm:text-4xl">먼저 채널을 같이 볼까요?</h2>
            <p className="mt-4 max-w-xl text-primary-foreground/80">
              지금 운영 중인 블로그나 채널 주소를 보내주시면, 현재 흐름을 보고 다음 단계를 함께 정리해드립니다.
            </p>
            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-accent px-6 py-3 text-sm text-accent-foreground transition-transform hover:-translate-y-0.5"
              >
                무료 진단 요청하기
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
