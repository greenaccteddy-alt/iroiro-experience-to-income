import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import { SiteHeader } from "../components/site-header";
import { SiteFooter } from "../components/site-footer";
import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="font-serif text-7xl text-foreground">404</p>
        <h2 className="mt-4 font-serif text-xl text-foreground">페이지를 찾을 수 없어요</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          요청하신 페이지가 존재하지 않거나 이동되었습니다.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-foreground px-5 py-2 text-sm text-primary-foreground transition-opacity hover:opacity-90"
          >
            홈으로 돌아가기
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "이로이로 iroiro · 경험을 연결하면 수익 구조가 됩니다" },
      {
        name: "description",
        content:
          "X세대 N잡러 K엄마 이로이로(Chipbirdie)의 브랜드. 블로그·대행사·전자책·코칭·공방으로 이어진 하나의 수익 구조.",
      },
      { name: "author", content: "iroiro · Chipbirdie" },
      { property: "og:title", content: "이로이로 iroiro · 경험을 연결하면 수익 구조가 됩니다" },
      {
        property: "og:description",
        content: "A4 한 장으로 시작한 N잡, 지금은 구조가 되었습니다.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}
