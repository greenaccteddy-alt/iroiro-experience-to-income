import { createFileRoute, Link } from "@tanstack/react-router";

import heroBg from "../assets/hero-bg.jpg";
import portrait from "../assets/portrait.jpg";
import craft from "../assets/craft.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "이로이로 iroiro · 경험을 연결하면 수익 구조가 됩니다" },
      {
        name: "description",
        content:
          "A4 한 장으로 시작한 N잡, 지금은 구조가 되었습니다. 블로그·대행사·전자책·코칭·공방을 하나로 잇는 이로이로의 일.",
      },
      { property: "og:title", content: "이로이로 · 경험을 연결하면 수익 구조가 됩니다" },
      { property: "og:description", content: "X세대 N잡러 K엄마 Chipbirdie의 연결된 일의 구조." },
    ],
  }),
  component: HomePage,
});

const empathyItems = [
  {
    title: "어디서부터 시작해야 할지 모르겠어요",
    body: "정보는 너무 많고, 매일 새로운 게 쏟아지고. 정작 ‘나에게 맞는 한 줄’을 찾기가 어렵습니다.",
  },
  {
    title: "이것저것 시도했지만 흐지부지됐어요",
    body: "블로그도 인스타도 시작은 했는데, 수익으로 이어지는 구조가 보이지 않아 멈춰버린 경험.",
  },
  {
    title: "시간은 있는데 방향이 없어요",
    body: "아이가 조금 컸고, 다시 일하고 싶지만 ‘무엇을, 어떻게’가 늘 막막합니다.",
  },
];

const systemFlow = [
  { step: "01", label: "블로그", desc: "경험을 글로" },
  { step: "02", label: "체험단·원고료", desc: "첫 번째 수익" },
  { step: "03", label: "대행사", desc: "수익을 시스템으로" },
  { step: "04", label: "전자책", desc: "지식을 자산으로" },
  { step: "05", label: "코칭", desc: "사람을 연결로" },
  { step: "06", label: "공방", desc: "브랜드를 손끝으로" },
];

const proofItems = [
  { tag: "5년차", title: "블로그 운영", desc: "꾸준히 글을 쌓아 검색 유입과 협업 제안이 매주 들어오는 채널로 키웠습니다." },
  { tag: "현재 진행", title: "체험단 · 원고료", desc: "취향과 글의 결을 지키며 선별적으로 수익화. 작은 글이 자산이 됩니다." },
  { tag: "운영 중", title: "마케팅 대행사", desc: "혼자가 아니라 팀으로. 블로그 최적화·콘텐츠 마케팅을 의뢰받아 진행합니다." },
  { tag: "판매 중", title: "전자책 & 1:1 코칭", desc: "‘A4 한 장’의 구조를 정리한 전자책과, 막힌 지점을 풀어주는 코칭." },
  { tag: "운영 중", title: "공방 · 푸어링아트", desc: "손으로 만드는 시간이 다시 글이 되고, 콘텐츠가 됩니다. 브랜드의 결을 만드는 곳." },
];

function HomePage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10 opacity-70"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(251,247,241,0.6) 0%, rgba(251,247,241,0.95) 70%, var(--cream) 100%), url(${heroBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="container-narrow grid items-center gap-16 py-20 md:grid-cols-12 md:py-32">
          <div className="md:col-span-7 fade-up">
            <p className="mb-6 inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">
              <span className="h-px w-8 bg-clay" />
              X세대 N잡러 K엄마 · Chipbirdie
            </p>
            <h1 className="font-serif text-4xl leading-[1.25] text-balance text-foreground sm:text-5xl md:text-[3.75rem]">
              경험을 <em className="not-italic text-terracotta">연결</em>하면<br />
              수익 구조가 됩니다
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              A4 한 장으로 시작한 N잡,<br className="sm:hidden" /> 지금은 구조가 되었습니다.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/njob"
                className="group inline-flex items-center justify-between gap-6 rounded-full bg-foreground px-7 py-4 text-sm text-primary-foreground shadow-lift transition-transform hover:-translate-y-0.5"
              >
                <span>나는 N잡을 시작하고 싶어요</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <Link
                to="/agency"
                className="group inline-flex items-center justify-between gap-6 rounded-full border border-foreground/80 bg-background/60 px-7 py-4 text-sm text-foreground backdrop-blur transition-colors hover:bg-foreground hover:text-primary-foreground"
              >
                <span>블로그·마케팅을 맡기고 싶어요</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="relative mx-auto max-w-sm">
              <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-sand" />
              <img
                src={portrait}
                alt="이로이로의 작업 공간"
                width={1200}
                height={1400}
                className="rounded-[1.75rem] object-cover shadow-lift"
              />
              <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-card px-5 py-4 shadow-soft sm:block">
                <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">since 2019</p>
                <p className="font-serif text-lg text-foreground">5년차 블로거</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EMPATHY */}
      <section className="py-24">
        <div className="container-narrow">
          <div className="mb-14 max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-terracotta">01 · 공감</p>
            <h2 className="mt-4 font-serif text-3xl text-foreground sm:text-4xl">
              혹시, 이런 마음이신가요?
            </h2>
            <p className="mt-4 text-muted-foreground">
              괜찮습니다. 시작하기 전엔 누구나 같은 자리에 서 있어요.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {empathyItems.map((item, i) => (
              <article
                key={item.title}
                className="rounded-3xl border border-border bg-card p-8 shadow-soft transition-shadow hover:shadow-lift"
              >
                <p className="font-serif text-3xl text-clay">0{i + 1}</p>
                <h3 className="mt-4 font-serif text-xl text-foreground">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SYSTEM */}
      <section className="bg-sand py-24">
        <div className="container-narrow">
          <div className="mb-14 max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-terracotta">02 · 핵심 구조</p>
            <h2 className="mt-4 font-serif text-3xl text-foreground sm:text-4xl">
              따로 떨어진 일이 아니라,<br />
              하나로 이어진 구조입니다
            </h2>
            <p className="mt-4 text-muted-foreground">
              블로그에서 시작한 글 한 편이 어떻게 대행사가 되고, 전자책이 되고,
              결국 공방까지 연결되는지 — 한 줄로 보여드릴게요.
            </p>
          </div>

          <div className="relative">
            <div className="grid gap-4 md:grid-cols-6">
              {systemFlow.map((s, i) => (
                <div key={s.step} className="relative">
                  <div className="rounded-2xl bg-card p-6 text-center shadow-soft">
                    <p className="font-serif text-xs tracking-widest text-terracotta">{s.step}</p>
                    <p className="mt-3 font-serif text-lg text-foreground">{s.label}</p>
                    <p className="mt-2 text-xs text-muted-foreground">{s.desc}</p>
                  </div>
                  {i < systemFlow.length - 1 && (
                    <div className="hidden md:block absolute right-[-14px] top-1/2 -translate-y-1/2 text-clay">
                      →
                    </div>
                  )}
                </div>
              ))}
            </div>
            <p className="mt-10 text-center text-sm text-muted-foreground">
              — 각 단계는 분리된 부업이 아니라, 앞 단계가 다음 단계를 만들어주는 <strong className="text-foreground">하나의 시스템</strong>입니다.
            </p>
          </div>
        </div>
      </section>

      {/* TWO PATHS */}
      <section className="py-24">
        <div className="container-narrow grid gap-8 md:grid-cols-2">
          {/* N잡 */}
          <article className="group relative overflow-hidden rounded-[2rem] border border-border bg-card p-10 shadow-soft transition-shadow hover:shadow-lift">
            <p className="text-xs uppercase tracking-[0.3em] text-terracotta">03 · N잡 Path</p>
            <h2 className="mt-4 font-serif text-3xl text-foreground">
              N잡을 시작하고 싶은 분들께
            </h2>
            <ul className="mt-6 space-y-4 text-sm leading-relaxed text-foreground/80">
              <li className="flex gap-3"><span className="text-terracotta">·</span><span><strong className="text-foreground">블로그로 시작합니다.</strong> 비싼 장비도, 팔로워도 필요 없어요. 가진 경험을 글로 옮기는 것부터.</span></li>
              <li className="flex gap-3"><span className="text-terracotta">·</span><span><strong className="text-foreground">수익은 자연스럽게 만들어집니다.</strong> 체험단, 원고료, 협업 — 글이 쌓이는 만큼.</span></li>
              <li className="flex gap-3"><span className="text-terracotta">·</span><span><strong className="text-foreground">구조로 확장됩니다.</strong> 한 사람의 글이 전자책이 되고, 코칭이 되는 길.</span></li>
            </ul>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link to="/njob" className="inline-flex items-center justify-center rounded-full bg-foreground px-6 py-3 text-sm text-primary-foreground transition-opacity hover:opacity-90">
                전자책으로 시작하기 →
              </Link>
              <Link to="/njob" className="inline-flex items-center justify-center rounded-full border border-foreground/40 px-6 py-3 text-sm text-foreground hover:border-foreground">
                1:1 코칭으로 정리하기
              </Link>
            </div>
          </article>

          {/* Agency */}
          <article className="group relative overflow-hidden rounded-[2rem] bg-foreground p-10 text-primary-foreground shadow-lift">
            <p className="text-xs uppercase tracking-[0.3em] text-accent">04 · Agency</p>
            <h2 className="mt-4 font-serif text-3xl text-primary-foreground">
              블로그·마케팅이 필요하신 분들께
            </h2>
            <ul className="mt-6 space-y-4 text-sm leading-relaxed text-primary-foreground/85">
              <li className="flex gap-3"><span className="text-accent">·</span><span><strong className="text-primary-foreground">결과로 말합니다.</strong> 5년간 직접 검증한 블로그 최적화 노하우를 그대로 적용합니다.</span></li>
              <li className="flex gap-3"><span className="text-accent">·</span><span><strong className="text-primary-foreground">콘텐츠 마케팅 전반</strong> — 키워드 설계, 글 구조, 발행 주기, 전환 흐름까지.</span></li>
              <li className="flex gap-3"><span className="text-accent">·</span><span><strong className="text-primary-foreground">‘직접 해본 사람’</strong>이 운영합니다. 이론이 아니라 매일의 데이터.</span></li>
            </ul>
            <div className="mt-10">
              <Link to="/agency" className="inline-flex items-center gap-3 rounded-full bg-accent px-6 py-3 text-sm text-accent-foreground transition-transform hover:-translate-y-0.5">
                카카오채널 상담하기 →
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* PROOF */}
      <section className="bg-sand py-24">
        <div className="container-narrow">
          <div className="mb-14 max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-terracotta">05 · 현재 진행 중</p>
            <h2 className="mt-4 font-serif text-3xl text-foreground sm:text-4xl">
              지금도 매일, 이 구조 안에서 일합니다
            </h2>
            <p className="mt-4 text-muted-foreground">
              완성된 과거의 이야기가 아니라, 오늘도 운영되고 있는 진행형 시스템.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {proofItems.map((p) => (
              <article key={p.title} className="rounded-3xl bg-card p-7 shadow-soft">
                <span className="inline-flex rounded-full bg-secondary px-3 py-1 text-[11px] uppercase tracking-widest text-foreground/70">
                  {p.tag}
                </span>
                <h3 className="mt-4 font-serif text-xl text-foreground">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BUSINESS MODEL */}
      <section className="py-24">
        <div className="container-narrow grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="text-xs uppercase tracking-[0.3em] text-terracotta">06 · 차별화</p>
            <h2 className="mt-4 font-serif text-3xl text-foreground sm:text-4xl">
              모든 일은<br />‘연결’되어 있습니다
            </h2>
            <p className="mt-6 text-muted-foreground">
              이로이로의 일은 여러 개의 사이드 잡이 아닙니다. 하나의 경험이 다음
              단계의 자산이 되는, 한 방향의 흐름입니다.
            </p>
            <img
              src={craft}
              alt="푸어링아트 작품"
              loading="lazy"
              width={1200}
              height={1000}
              className="mt-10 rounded-3xl object-cover shadow-soft"
            />
          </div>
          <div className="md:col-span-7 space-y-4">
            {[
              { from: "블로그", to: "수익", desc: "꾸준한 글이 검색 유입을 만들고, 첫 수익으로 이어집니다." },
              { from: "수익", to: "대행사 확장", desc: "검증된 노하우를 다른 사람의 채널에도 적용합니다." },
              { from: "경험", to: "전자책", desc: "쌓인 시행착오와 구조를 한 권의 자산으로 압축합니다." },
              { from: "전자책", to: "코칭", desc: "글로 닿지 않는 부분은 1:1로 풀어냅니다." },
              { from: "공방", to: "퍼스널 브랜드", desc: "손으로 만드는 시간이 브랜드의 결과 톤을 만듭니다." },
            ].map((row) => (
              <div key={row.from} className="flex items-start gap-5 rounded-2xl border border-border bg-card p-6">
                <div className="flex shrink-0 items-center gap-3 font-serif">
                  <span className="text-foreground">{row.from}</span>
                  <span className="text-terracotta">→</span>
                  <span className="text-foreground">{row.to}</span>
                </div>
                <p className="text-sm text-muted-foreground">{row.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="pb-32 pt-12">
        <div className="container-narrow">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-foreground px-8 py-20 text-center text-primary-foreground sm:px-16">
            <p className="text-xs uppercase tracking-[0.3em] text-accent">07 · 시작</p>
            <h2 className="mx-auto mt-5 max-w-2xl font-serif text-3xl text-balance text-primary-foreground sm:text-4xl">
              이 구조라면, 당신도 가능합니다
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-primary-foreground/80">
              정답을 외우는 게 아니라, 나에게 맞는 흐름을 만드는 일.
              가장 작은 한 걸음부터 함께 정리해드립니다.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link to="/njob" className="inline-flex items-center gap-3 rounded-full bg-accent px-7 py-4 text-sm text-accent-foreground transition-transform hover:-translate-y-0.5">
                전자책으로 시작하기 →
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-3 rounded-full border border-primary-foreground/40 px-7 py-4 text-sm text-primary-foreground hover:bg-primary-foreground hover:text-foreground">
                상담으로 바로 정리하기
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
