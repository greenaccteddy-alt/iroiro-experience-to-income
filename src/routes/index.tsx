import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen, Map, MessageCircleMore } from "lucide-react";

import heroBg from "../assets/hero-bg.jpg";
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
    title: "전자책 무료로 읽기",
    description: "50대 주부, 마인드맵 한 장으로 시작한 N잡 이야기",
    to: "/njob",
    href: null,
    icon: BookOpen,
  },
  {
    title: "N잡 마인드맵 그려보기",
    description: "칩버디표 앱으로 내 방향 한 장에 정리하기",
    to: null,
    href: "https://njob-mindmap-iroiro.netlify.app/",
    icon: Map,
  },
  {
    title: "1:1 코칭 받아보기",
    description: "카카오채널로 바로 연결됩니다",
    to: "/contact",
    href: null,
    icon: MessageCircleMore,
  },
] as const;

const browseItems = [
  {
    title: "대행사",
    description: "이로이로 에이전시",
    to: "/agency",
  },
  {
    title: "블로그",
    description: "테디버디",
    to: "/njob",
  },
  {
    title: "공방",
    description: "이로이로크래프트",
    to: "/craft",
  },
  {
    title: "일본어 모임",
    description: "이로이로 일본어",
    to: "/contact",
  },
  {
    title: "원고료",
    description: "크몽",
    to: "/contact",
  },
] as const;

function HomePage() {
  return (
    <div className="pb-20">
      <section className="relative overflow-hidden border-b border-border/60">
        <div
          className="absolute inset-0 -z-10 opacity-75"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(255,255,255,0.78) 0%, rgba(251,247,241,0.92) 62%, rgba(255,255,255,1) 100%), url(${heroBg})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        />
        <div className="container-narrow py-20 md:py-28">
          <p className="text-xs uppercase tracking-[0.28em] text-terracotta">iroiro by Chipbirdie</p>
          <h1 className="mt-5 max-w-4xl font-serif text-4xl text-balance text-foreground sm:text-5xl md:text-6xl">
            나도 N잡 해볼까?
          </h1>
          <p className="mt-6 max-w-2xl whitespace-pre-line text-base text-muted-foreground sm:text-lg">
            우리의 경험, 이미 충분해요.
            {"\n"}이제 수익으로 바꿀 차례!
            {"\n"}시작해볼까요?
          </p>
        </div>
      </section>

      <section className="container-narrow grid gap-8 py-12 md:grid-cols-2 md:py-16">
        <article className="rounded-[2rem] border border-border bg-card p-8 shadow-soft sm:p-10">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-terracotta">N잡 시작이 막막하다면</p>
          <h2 className="mt-5 font-serif text-3xl text-foreground sm:text-4xl">여기서부터 시작하면 됩니다</h2>
          <p className="mt-4 max-w-md text-muted-foreground">
            전자책으로 방향 잡고, 마인드맵으로 나를 정리하고, 코칭으로 같이 풀어가요
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

        <article className="rounded-[2rem] border border-border bg-sand p-8 text-foreground shadow-soft sm:p-10">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-terracotta">
            50대 주부 칩버디의 N잡
          </p>
          <h2 className="mt-5 font-serif text-3xl text-foreground sm:text-4xl">
            저는 이렇게 하고 있어요
          </h2>
          <p className="mt-4 max-w-md text-muted-foreground">
            아이 키우느라 멈췄던 시간, 그 후로 하나씩 쌓아왔어요. 지금도 진행 중입니다.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4">
            {browseItems.map((item) => {
              return (
                <Link
                  key={item.title}
                  to={item.to}
                  className="group flex aspect-square flex-col justify-end rounded-2xl border border-border bg-card p-4 text-left transition-all hover:-translate-y-0.5 hover:border-foreground/20 hover:shadow-soft sm:p-5"
                >
                  <div className="space-y-2">
                    <p className="text-base font-semibold tracking-[0.02em] text-terracotta">{item.title}</p>
                    <p className="text-sm font-medium leading-snug text-foreground/88 sm:text-base">
                      {item.description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </article>
      </section>
    </div>
  );
}
