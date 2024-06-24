import AnimatedBackground from "@/components/animated-background";
import GlobeForBlog from "@/components/globe-for-blog";
import { Button, Input } from "@nextui-org/react";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale });

  return {
    title: t("Metadata.blog.title"),
    description: t("Metadata.blog.description"),
  };
}

export default function Page({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("Blog");

  return (
    <main className="w-full h-dvh overflow-hidden relative grid">
      <AnimatedBackground />
      <div className="container flex flex-col items-center relative z-[25] h-full py-[20vh] justify-between md:py-52 lg:py-64">
        <hgroup className="flex flex-col items-center gap-4">
          <h1 className="text-5xl font-bold text-success lg:text-7xl text-center">
            {t("coming_soon.title")}
          </h1>
          <p className="text-center text-white lg:text-lg">
            {t("coming_soon.subtitle")}
          </p>
        </hgroup>
        <form className="w-full md:w-fit">
          <Input
            placeholder={t("coming_soon.email")}
            radius="full"
            color="primary"
            classNames={{
              inputWrapper: "pr-2 h-auto",
            }}
            endContent={
              <Button
                type="submit"
                color="success"
                radius="full"
                className="h-auto py-2 text-white px-6 my-2"
              >
                {t("coming_soon.notify")}
              </Button>
            }
          />
        </form>
      </div>
      <GlobeForBlog />
    </main>
  );
}
