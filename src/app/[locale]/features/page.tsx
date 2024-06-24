import AnimatedBackground from "@/components/animated-background";
import FeaturesSlider from "@/components/features-slider";
import { BorderBeam } from "@/ui/border-beam";
import { StickyScroll } from "@/ui/sticky-scroll-reveal";
import { Button } from "@nextui-org/react";
import { Metadata } from "next";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import Image, { StaticImageData } from "next/image";

import HandCell from "@/assets/Hand_cell.png";
import { useTranslations } from "next-intl";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale });

  return {
    title: t("Metadata.features.title"),
    description: t("Metadata.features.description"),
  };
}

export default function Page({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("Features");
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
              <p className="text-center pb-4">{t("subtitle")}</p>
              <FeaturesSlider
                items={[
                  {
                    icon: "integration",
                    color: "bg-primary-800",
                    title: t("main_features.0.title"),
                    description: t("main_features.0.description"),
                  },
                  {
                    icon: "no-install",
                    color: "bg-success",
                    title: t("main_features.1.title"),
                    description: t("main_features.1.description"),
                  },
                  {
                    icon: "simple",
                    color: "bg-secondary",
                    title: t("main_features.2.title"),
                    description: t("main_features.2.description"),
                  },
                ]}
              />
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
            </div>
          </div>
        </div>
      </main>
      <div className="bg-white w-full rounded-xl">
        <section className="sm:container py-10 lg:py-20 flex flex-col items-center gap-2 relative pb-32 md:pb-64 lg:pb-80">
          <h2 className="sub-title text-center text-primary-800">
            {t.rich("features.title", {
              spotlight: (chunks) => (
                <span className="text-success">{chunks}</span>
              ),
            })}
          </h2>
          <StickyScroll
            content={[
              {
                idx: "tickets",
                title: t("features.0.title"),
                subtitle: t("features.0.subtitle"),
                color: "bg-success",
                benefits: [
                  t("features.0.benefits.0"),
                  t("features.0.benefits.1"),
                  t("features.0.benefits.2"),
                ],
                features: [
                  t("features.0.features.0"),
                  t("features.0.features.1"),
                  t("features.0.features.2"),
                ],
                image: require("@/assets/modules/first.jpg")
                  .default as StaticImageData,
              },
              {
                idx: "cargo",
                title: t("features.1.title"),
                subtitle: t("features.1.subtitle"),
                benefits: [
                  t("features.1.benefits.0"),
                  t("features.1.benefits.1"),
                  t("features.1.benefits.2"),
                ],
                features: [
                  t("features.1.features.0"),
                  t("features.1.features.1"),
                  t("features.1.features.2"),
                ],
                color: "bg-secondary",
                image: require("@/assets/modules/second.jpg")
                  .default as StaticImageData,
              },
              {
                idx: "administrative",
                title: t("features.2.title"),
                subtitle: t("features.2.subtitle"),
                benefits: [
                  t("features.2.benefits.0"),
                  t("features.2.benefits.1"),
                  t("features.2.benefits.2"),
                ],
                features: [
                  t("features.2.features.0"),
                  t("features.2.features.1"),
                  t("features.2.features.2"),
                ],
                color: "bg-primary-800",
                image: require("@/assets/modules/third.jpg")
                  .default as StaticImageData,
              },
              {
                idx: "reports",
                title: t("features.3.title"),
                subtitle: t("features.3.subtitle"),
                benefits: [
                  t("features.3.benefits.0"),
                  t("features.3.benefits.1"),
                  t("features.3.benefits.2"),
                ],
                features: [
                  t("features.3.features.0"),
                  t("features.3.features.1"),
                  t("features.3.features.2"),
                ],
                color: "bg-success",
                image: require("@/assets/modules/fourth.jpg")
                  .default as StaticImageData,
              },
              {
                idx: "baggage",
                title: t("features.4.title"),
                subtitle: t("features.4.subtitle"),
                benefits: [
                  t("features.4.benefits.0"),
                  t("features.4.benefits.1"),
                  t("features.4.benefits.2"),
                ],
                features: [
                  t("features.4.features.0"),
                  t("features.4.features.1"),
                ],
                color: "bg-secondary",
                image: require("@/assets/modules/fifth.jpg")
                  .default as StaticImageData,
              },
              {
                idx: "bills",
                title: t("features.5.title"),
                subtitle: t("features.5.subtitle"),
                benefits: [
                  t("features.5.benefits.0"),
                  t("features.5.benefits.1"),
                  t("features.5.benefits.2"),
                ],
                features: [
                  t("features.5.features.0"),
                  t("features.5.features.1"),
                  t("features.5.features.2"),
                ],
                color: "bg-primary-800",
                image: require("@/assets/modules/sixth.jpg")
                  .default as StaticImageData,
              },
            ]}
            translations={{
              benefits: t("features.benefits"),
              features: t("features.features"),
            }}
          />
        </section>
      </div>
      <div className="container relative pt-10 lg:pt-20 z-[25] -mt-32 -mb-[500px] md:-mt-64 md:-mb-[300px] lg:-mt-56 lg:-mb-28 text-white">
        <div className="bg-success rounded-[2rem] flex flex-col gap-6 items-end lg:flex-row">
          <div className="flex flex-col items-center gap-6 p-5 lg:p-10 sm:items-start">
            <h2 className="sub-title text-white text-center">
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
            src={HandCell}
            alt=""
            className="w-3/4 max-w-72 sm:-mt-20 md:-mt-40"
          />
        </div>
      </div>
    </>
  );
}
