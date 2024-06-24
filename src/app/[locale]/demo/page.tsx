import AnimatedBackground from "@/components/animated-background";
import { BorderBeam } from "@/ui/border-beam";
import { Button } from "@nextui-org/react";
import { Metadata } from "next";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import Image from "next/image";

import DemoHero from "@/assets/Demo_hero.png";
import Girl from "@/assets/Girl.png";
import { useTranslations } from "next-intl";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale });

  return {
    title: t("Metadata.demo.title"),
    description: t("Metadata.demo.description"),
  };
}

export default function Page({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("Demo");
  return (
    <>
      <main className="flex flex-col overflow-hidden text-white relative">
        <AnimatedBackground />
        <div className="container relative z-10 flex items-center justify-center md:py-20 max-sm:h-[50rem]">
          <div className="py-10 sm:pt-40 md:pb-20 w-full">
            <div className="flex flex-col items-center gap-5">
              <h1 className="text-3xl font-bold lg:text-5xl text-center">
                {t.rich("title", {
                  spotlight: (chunks) => (
                    <>
                      <br className="max-lg:hidden" />
                      <span className="text-success">{chunks}</span>
                    </>
                  ),
                })}
              </h1>
              <Button
                as="a"
                target="_blank"
                href={t("monday_link")}
                color="success"
                variant="solid"
                radius="full"
                className="text-white start_link_button"
              >
                {t("main_cta")}{" "}
                <BorderBeam
                  size={50}
                  duration={5}
                  delay={0}
                  colorFrom="rgba(255,255,255,0)"
                  colorTo="rgb(255,255,255)"
                  borderWidth={2}
                />
              </Button>
              <div className="relative lg:-mt-52">
                <Image src={DemoHero} alt="" className="w-full h-auto" />
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="bg-white w-full rounded-xl">
        <section className="container py-10 lg:py-20 flex flex-col items-center gap-6 relative pb-32 md:pb-64 lg:pb-80">
          <h2 className="sub-title text-primary-800 text-center">
            {t.rich("body.title", {
              spotlight: (chunks) => (
                <span className="text-success">{chunks}</span>
              ),
            })}
          </h2>
          <p className="text-center text-balance lg:text-lg">
            {t("body.text.0")}
          </p>
          <p className="text-center text-balance lg:text-lg">
            {t("body.text.1")}
          </p>
        </section>
      </div>
      <div className="container relative pt-10 lg:pt-20 z-[25] -mt-32 -mb-[500px] md:-mt-64 md:-mb-[300px] lg:-mt-56 lg:-mb-28 text-white">
        <div className="bg-success rounded-[2rem] flex flex-col gap-6 items-center sm:items-end lg:flex-row">
          <div className="flex flex-col items-center gap-6 p-5 lg:p-10 sm:items-start">
            <h2 className="sub-title text-white text-center lg:text-start">
              {t("cta.title")}
            </h2>
            <p className="max-lg:text-small text-center text-pretty sm:text-start">
              {t("cta.text.0")}
            </p>
            <p className="max-lg:text-small text-center text-balance sm:text-start">
              {t("cta.text.1")}
            </p>
            <Button
              as="a"
              target="_blank"
              href={t("monday_link")}
              variant="solid"
              radius="full"
              className="bg-white text-primary font-bold start_link_button"
            >
              {t("cta.button")}
            </Button>
          </div>
          <Image
            src={Girl}
            alt=""
            className="w-3/4 max-w-72 sm:-mt-20 md:-mt-40"
          />
        </div>
      </div>
    </>
  );
}
