import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/agency")({
  head: () => ({
    meta: [
      { title: "블로그·마케팅 대행 — 이로이로 Agency" },
      {
        name: "description",
        content:
          "5년간 직접 검증한 블로그 최적화 · 콘텐츠 마케팅 노하우를 의뢰주신 채널에 그대로 적용합니다.",
      },
      { property: "og:title", content: "블로그·마케팅 대행 — 이로이로 Agency" },
      {
        property: "og:description",
        content: "이론이 아닌, 매일의 데이터로 운영하는 콘텐츠 마케팅 파트너.",
      },
    ],
  }),
  component: AgencyPage,
});

const services = [
  {
    title: "블로그 최적화",
    desc: "검색 노출이 되는 글의 구조, 키워드 설계, 발행 주기를 체계화합니다.",
  },
  {
    title: "콘텐츠 마케팅",
    desc: "브랜드의 결을 지키면서, 사람을 모으고 전환으로 잇는 콘텐츠를 만듭니다.",
  },
  {
    title: "채널 운영 대행",
    desc: "기획·작성·발행·점검까지 — 한 채널의 운영을 통째로 맡습니다.",
  },
  {
    title: "컨설팅",
    desc: "이미 운영 중인 채널을 진단하고, 다음 분기의 방향을 함께 설계합니다.",
  },
];

const principles = [
  { tag: "직접", title: "내가 해본 것만 합니다", desc: "이론으로만 아는 일은 맡지 않습니다. 5년간 매일 직접 글을 써온 사람이 운영합니다." },
  { tag: "데이터", title: "감이 아니라 숫자", desc: "유입 키워드, 체류 시간, 전환 — 매주 확인하고 다음 글에 반영합니다." },
  { tag: "결", title: "브랜드의 톤을 지킵니다", desc: "정답 같은 글이 아니라, 그 사람의 결로 읽히는 글을 씁니다." },
];

function AgencyPage() {
  return (
    <div>
      <section className="border-b border-border">
        <div className="container-narrow py-24 md:py-32">
          <p className="text-xs uppercase tracking-[0.3em] text-terracotta">Agency</p>
          <h1 className="mt-4 max-w-3xl font-serif text-4xl text-balance text-foreground sm:text-5xl">
            블로그·마케팅을<br />‘직접 해본 사람’에게 맡기세요
          </h1>
          <p className="mt-6 max-w-2xl text-muted-foreground">
            매일 검색 결과 1페이지에 글을 띄우고, 직접 수익을 만들어온 5년의 데이터를
            그대로 의뢰주신 채널에 적용합니다.
          </p>
          <div className="mt-10">
            <Link to="/contact" className="inline-flex items-center gap-3 rounded-full bg-foreground px-6 py-3 text-sm text-primary-foreground hover:opacity-90">
              카카오채널 상담하기 →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-narrow">
          <p className="text-xs uppercase tracking-[0.3em] text-terracotta">Services</p>
          <h2 className="mt-3 font-serif text-3xl text-foreground sm:text-4xl">제공 서비스</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {services.map((s, i) => (
              <article key={s.title} className="group rounded-3xl border border-border bg-card p-8 shadow-soft transition-shadow hover:shadow-lift">
                <p className="font-serif text-2xl text-clay">0{i + 1}</p>
                <h3 className="mt-4 font-serif text-xl text-foreground">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sand py-24">
        <div className="container-narrow">
          <p className="text-xs uppercase tracking-[0.3em] text-terracotta">Principles</p>
          <h2 className="mt-3 font-serif text-3xl text-foreground sm:text-4xl">우리가 일하는 방식</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {principles.map((p) => (
              <article key={p.title} className="rounded-3xl bg-card p-7 shadow-soft">
                <span className="inline-flex rounded-full bg-secondary px-3 py-1 text-[11px] uppercase tracking-widest text-foreground/70">
                  {p.tag}
                </span>
                <h3 className="mt-4 font-serif text-lg text-foreground">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-narrow">
          <div className="rounded-[2.5rem] bg-foreground p-10 text-primary-foreground sm:p-16">
            <h2 className="font-serif text-3xl sm:text-4xl">먼저 채널을 봐드릴게요</h2>
            <p className="mt-4 max-w-xl text-primary-foreground/80">
              지금 운영 중인 블로그 또는 채널 주소를 보내주시면, 무료로 간단한 진단을
              보내드립니다. 그 다음 함께할지 천천히 결정하셔도 됩니다.
            </p>
            <div className="mt-8">
              <Link to="/contact" className="inline-flex items-center gap-3 rounded-full bg-accent px-6 py-3 text-sm text-accent-foreground hover:-translate-y-0.5 transition-transform">
                무료 진단 신청하기 →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
