import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen, ExternalLink, Map, MessageCircleMore, PenSquare, Store } from "lucide-react";

import heroBg from "../assets/hero-bg.jpg";
import iroiroJapanese from "../assets/iroiro-japanese.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "iroiro | N잡 도전기" },
      {
        name: "description",
        content:
          "N잡을 시작해보고 싶은 사람과 Chipbirdie의 N잡 여정을 구경하고 싶은 사람을 위한 메인 페이지.",
      },
      { property: "og:title", content: "iroiro | N잡 도전기" },
      {
        property: "og:description",
        content: "메인 페이지에서 한눈에 원하는 곳으로 바로 이동하세요.",
      },
    ],
  }),
  component: HomePage,
});

const startItems = [
  {
    title: "전자책 읽기",
    description: "N잡의 출발점을 먼저 정리해보기",
    to: "/njob",
    icon: BookOpen,
    href: null,
  },
  {
    title: "N잡 마인드맵 작성",
    description: "내 방향을 그려보는 첫 단계",
    to: null,
    href: "https://njob-mindmap-iroiro.netlify.app/",
    icon: Map,
  },
  {
    title: "1:1 코칭",
    description: "카카오채널로 바로 상담하기",
    to: "/contact",
    icon: MessageCircleMore,
    href: null,
  },
] as const;

const browseItems = [
  {
    title: "블로그",
    description: "Chipbirdie의 기록 둘러보기",
    to: "/njob",
    icon: PenSquare,
    href: null,
  },
  {
    title: "대행사",
    description: "블로그 소개와 연결된 작업 보기",
    to: "/agency",
    icon: ExternalLink,
    href: null,
  },
  {
    title: "공방",
    description: "플레이스 링크 대신 공방 페이지로 이동",
    to: "/craft",
    icon: Store,
    href: null,
  },
  {
    title: "일본어 수업",
    description: "카카오채널 문의로 이어지기",
    to: "/contact",
    icon: MessageCircleMore,
    href: null,
    logo: iroiroJapanese,
  },
  {
    title: "인스타툰",
    description: "현재는 소개 페이지에서 먼저 보기",
    to: "/contact",
    icon: ExternalLink,
    href: null,
  },
] as const;

function HomePage() {
  return (
    <div className="pb-20">
      <section className="relative overflow-hidden border-b border-border/60">
        <div
          className="absolute inset-0 -z-10 opacity-75"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(251,247,241,0.72) 0%, rgba(251,247,241,0.94) 62%, var(--cream) 100%), url(${heroBg})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        />
        <div className="container-narrow py-20 md:py-28">
          <p className="text-xs uppercase tracking-[0.28em] text-terracotta">iroiro by Chipbirdie</p>
          <h1 className="mt-5 max-w-4xl font-serif text-4xl text-balance text-foreground sm:text-5xl md:text-6xl">
            N잡 도전기,
            <br />
            메인에서 바로 고르세요.
          </h1>
          <p className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
            이야기는 줄이고, 방문자가 한눈에 원하는 곳으로 바로 갈 수 있게 정리했습니다.
          </p>
        </div>
      </section>

      <section className="container-narrow grid gap-8 py-12 md:grid-cols-2 md:py-16">
        <article className="rounded-[2rem] border border-border bg-card p-8 shadow-soft sm:p-10">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-terracotta">1. N잡 도전하기</p>
          <h2 className="mt-5 font-serif text-3xl text-foreground sm:text-4xl">N잡 도전하실래요?</h2>
          <p className="mt-4 max-w-md text-muted-foreground">
            시작할 때 필요한 길만 남겼습니다. 전자책, 마인드맵, 코칭으로 바로 들어가세요.
          </p>

          <div className="mt-8 space-y-3">
            {startItems.map((item) => {
              const Icon = item.icon;

              const commonClassName =
                "group flex min-h-20 items-center justify-between gap-4 rounded-2xl border border-border bg-background px-5 py-4 transition-all hover:-translate-y-0.5 hover:border-foreground/30 hover:shadow-soft";

              const content = (
                <>
                  <div className="flex items-center gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sand text-foreground">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-base font-medium text-foreground">{item.title}</p>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                  <span className="text-sm text-muted-foreground transition-transform group-hover:translate-x-1">
                    바로가기
                  </span>
                </>
              );

              if (item.href) {
                return (
                  <a
                    key={item.title}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className={commonClassName}
                  >
                    {content}
                  </a>
                );
              }

              return (
                <Link key={item.title} to={item.to} className={commonClassName}>
                  {content}
                </Link>
              );
            })}
          </div>
        </article>

        <article className="rounded-[2rem] bg-foreground p-8 text-primary-foreground shadow-lift sm:p-10">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-accent">2. 칩버디의 N잡 구경하기</p>
          <h2 className="mt-5 font-serif text-3xl text-primary-foreground sm:text-4xl">
            이미 하고 있는 N잡이 궁금하다면
          </h2>
          <p className="mt-4 max-w-md text-primary-foreground/78">
            블로그부터 대행사, 공방, 일본어 수업, 인스타툰까지 한곳에서 둘러볼 수 있게 모았습니다.
          </p>

          <div className="mt-8 space-y-3">
            {browseItems.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.title}
                  to={item.to}
                  className="group flex min-h-20 items-center justify-between gap-4 rounded-2xl border border-primary-foreground/12 bg-primary-foreground/6 px-5 py-4 transition-all hover:-translate-y-0.5 hover:bg-primary-foreground/10"
                >
                  <div className="flex items-center gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-foreground/10 text-primary-foreground">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-base font-medium text-primary-foreground">{item.title}</p>
                      <p className="text-sm text-primary-foreground/70">{item.description}</p>
                    </div>
                  </div>
                  {"logo" in item ? (
                    <img
                      src={item.logo}
                      alt={`${item.title} logo`}
                      width={56}
                      height={56}
                      className="hidden h-12 w-12 rounded-xl object-cover ring-1 ring-primary-foreground/15 sm:block"
                    />
                  ) : null}
                  <span className="text-sm text-primary-foreground/70 transition-transform group-hover:translate-x-1">
                    이동
                  </span>
                </Link>
              );
            })}
          </div>
        </article>
      </section>
    </div>
  );
}
