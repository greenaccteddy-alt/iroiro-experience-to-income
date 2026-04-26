import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import { SiteHeader } from "../components/site-header";
import { SiteFooter } from "../components/site-footer";
import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="font-serif text-7xl text-foreground">404</p>
        <h2 className="mt-4 font-serif text-xl text-foreground">페이지를 찾을 수 없습니다.</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          요청한 페이지가 없거나 주소가 바뀌었습니다.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-foreground px-5 py-2 text-sm text-primary-foreground transition-opacity hover:opacity-90"
          >
            메인으로 돌아가기
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
      { title: "iroiro | N잡 도전기" },
      {
        name: "description",
        content: "Chipbirdie의 N잡 도전기를 한눈에 보고 바로 이동할 수 있는 홈페이지.",
      },
      { name: "author", content: "Chipbirdie" },
      { property: "og:title", content: "iroiro | N잡 도전기" },
      {
        property: "og:description",
        content: "N잡 도전하기와 Chipbirdie의 N잡 구경하기, 두 갈래로 바로 이동하세요.",
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
