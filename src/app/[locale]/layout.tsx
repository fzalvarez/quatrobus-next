import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "../globals.css";
import { locales } from "@/i18n-config";
import { unstable_setRequestLocale } from "next-intl/server";
import Providers from "@/providers";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { useTranslations } from "next-intl";
import { GoogleAnalytics } from "@next/third-parties/google";
import Analytics from "@/components/analytics";

const montserrat = Montserrat({ subsets: ["latin"] });

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: "Quatrobus",
  icons: ["/favicon.ico"],
};

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  unstable_setRequestLocale(locale);

  const t = useTranslations("Index");

  return (
    <html lang={locale}>
      <body
        className={`${montserrat.className} bg-primary h-full w-full antialiased`}
      >
        {process.env.NODE_ENV === "production" && <Analytics />}
        <Providers>
          <Header
            translations={{
              cta: t("cta"),
              en: t("languages.en"),
              es: t("languages.es"),
              features: t("links.features"),
              home: t("links.home"),
              languages: t("languages.title"),
            }}
          />
          {children}
          <Footer
            translations={{
              features: t("links.features"),
              home: t("links.home"),
              languages: t("languages.title"),
              copyrigth: t("copyright"),
              english: t("languages.en"),
              spanish: t("languages.es"),
              menu: t("menu"),
            }}
          />
        </Providers>
      </body>
      {process.env.NODE_ENV === "production" && (
        <GoogleAnalytics gaId="G-8YV9HMXX2V" />
      )}
    </html>
  );
}
