import { ContainerScroll } from "@/ui/container-scroll-animation";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { Button } from "@nextui-org/react";
import { BorderBeam } from "@/ui/border-beam";
import { Metadata } from "next";
import AnimatedBackground from "@/components/animated-background";
import AlliancesMarquee from "@/components/alliances-marquee";
import AdvantagesSlider from "@/components/advantages-slider";
import DataSlider from "@/components/data-slider";
import TestimonialsMarquee from "@/components/testimonials-marquee";
import Image from "next/image";

import HeroMain from "@/assets/Hero_main.png";
import Digi from "@/assets/Digitalizacion.png";
import Gest from "@/assets/Gestion.png";
import HandCell from "@/assets/Hand_cell.png";
import { useTranslations } from "next-intl";
import { Link } from "@/navigation";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale });

  return {
    title: t("Metadata.home.title"),
    description: t("Metadata.home.description"),
  };
}

export default function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("Home");

  return (
    <>
      <main className="flex flex-col overflow-hidden text-white relative">
        <AnimatedBackground />
        <div className="container relative z-10">
          <ContainerScroll
            titleComponent={
              <div className="flex flex-col items-center gap-5 md:pb-10 lg:pb-14">
                <h1 className="text-4xl font-bold lg:text-6xl">
                  {t.rich("title", {
                    spotlight: (chunks) => (
                      <>
                        <br className="max-lg:hidden" />
                        <span className="text-success">{chunks}</span>
                      </>
                    ),
                  })}
                </h1>
                <p>{t("subtitle")}</p>
                <div className="flex items-center justify-center gap-6 pt-3">
                  <Button
                    as="a"
                    target="_blank"
                    href={t("monday_link")}
                    color="success"
                    variant="solid"
                    radius="full"
                    className="text-white font-semibold start_link_button"
                  >
                    {t("main_cta")}
                    <BorderBeam
                      size={50}
                      duration={5}
                      delay={0}
                      colorFrom="rgba(255,255,255,0)"
                      colorTo="rgb(255,255,255)"
                      borderWidth={2}
                    />
                  </Button>
                  <Button
                    as="a"
                    target="_blank"
                    href={t("wsp_link")}
                    color="success"
                    variant="bordered"
                    radius="full"
                    className="text-white font-semibold"
                  >
                    {t("second_cta")}
                  </Button>
                </div>
              </div>
            }
          >
            <Image
              src={HeroMain}
              alt="hero"
              className="rounded-2xl object-cover h-full object-center"
              draggable={false}
              priority
            />
          </ContainerScroll>
        </div>
      </main>
      <div className="bg-white w-full rounded-xl">
        <section className="container py-10 lg:py-20 flex flex-col items-center gap-2 relative">
          <h2 className="sub-title text-primary-800">{t("growth.title")}</h2>
          <p className="pb-6 text-center">{t("growth.subtitle")}</p>
          <AlliancesMarquee />
        </section>
        <section className="container relative z-10 -mb-48 md:-mb-40 lg:-mb-36">
          <div className="bg-[url(../assets/Banner_ventas.jpg)] rounded-xl p-5 lg:p-10 flex items-center flex-col gap-5 text-white bg-center bg-cover">
            <h2 className="sub-title text-center">{t("force.title")}</h2>
            <p className="text-center text-balance">{t("force.text")}</p>
            <Button
              as="a"
              target="_blank"
              href={t("monday_link")}
              color="success"
              variant="solid"
              radius="full"
              className="text-white shadow-xl start_link_button"
            >
              {t("main_cta")}
            </Button>
          </div>
        </section>
        <div className="w-full bg-neutral-200 relative rounded-2xl">
          <section className="container pb-10 pt-60 md:pt-48 lg:pt-52 lg:pb-20 space-y-6">
            <h2 className="sub-title text-center text-primary-800">
              {t.rich("advantages.title", {
                spotlight: (chunks) => (
                  <span className="text-success">{chunks}</span>
                ),
              })}
            </h2>
            <AdvantagesSlider
              items={[
                {
                  icon: "reliable",
                  title: t("advantages.0.title"),
                  color: "bg-primary-800",
                  description: t("advantages.0.description"),
                },
                {
                  icon: "easy",
                  title: t("advantages.1.title"),
                  color: "bg-primary",
                  description: t("advantages.1.description"),
                },
                {
                  icon: "optimal",
                  title: t("advantages.2.title"),
                  color: "bg-secondary",
                  description: t("advantages.2.description"),
                },
                {
                  icon: "adaptable",
                  title: t("advantages.3.title"),
                  color: "bg-success",
                  description: t("advantages.3.description"),
                },
              ]}
            />
          </section>
        </div>
        <section className="container flex flex-col gap-10 items-center py-10 lg:py-20 relative">
          <h2 className="sub-title text-center text-primary-800">
            {t.rich("how.title", {
              spotlight: (chunks) => (
                <span className="text-success">{chunks}</span>
              ),
            })}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-10">
            <div className="col-span-1 max-lg:hidden">
              <Image src={Digi} alt="Digitalización" />
            </div>
            <div className="col-span-1 flex flex-col gap-4 max-lg:items-center h-full pb-10 max-w-96 lg:ml-12">
              <h3 className="font-bold text-primary text-lg text-balance max-lg:text-center lg:text-2xl">
                {t("how.0.title")}
              </h3>
              <p className="max-lg:text-center lg:text-lg">{t("how.0.text")}</p>
              <Image src={Digi} alt="Digitalización" className="lg:hidden" />
              <div className="max-lg:hidden flex-1"></div>
              <Button
                as="a"
                href={`/${locale}/features#tickets`}
                color="success"
                variant="solid"
                radius="full"
                className="text-white shadow-xl lg:w-fit"
              >
                {t("how.know_more")}
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-10 lg:place-items-center">
            <div className="col-span-1 flex flex-col gap-4 max-lg:items-center h-full pb-10 max-w-96">
              <h3 className="font-bold text-primary text-lg text-balance max-lg:text-center lg:text-2xl">
                {t("how.1.title")}
              </h3>
              <p className="max-lg:text-center lg:text-lg">{t("how.1.text")}</p>
              <Image src={Gest} alt="Gestión" className="lg:hidden" />
              <div className="max-lg:hidden flex-1"></div>
              <Button
                as="a"
                href={`/${locale}/features#reports`}
                color="success"
                variant="solid"
                radius="full"
                className="text-white shadow-xl lg:w-fit"
              >
                {t("how.know_more")}
              </Button>
            </div>
            <div className="col-span-1 max-lg:hidden">
              <Image src={Gest} alt="Gestión" />
            </div>
          </div>
          <Button
            as="a"
            href={`/${locale}/features`}
            color="secondary"
            variant="solid"
            radius="full"
            className="text-white shadow-xl max-lg:hidden"
          >
            {t("how.know_all")}
          </Button>
        </section>
        <div className="w-full bg-neutral-200 relative rounded-2xl">
          <section className="container py-10 lg:py-20 space-y-6">
            <h2 className="sub-title text-center text-primary-800">
              {t.rich("work.title", {
                spotlight: (chunks) => (
                  <>
                    <br />
                    <span className="text-success">{chunks}</span>
                  </>
                ),
              })}
            </h2>
            <DataSlider
              translations={{
                experience: t("work.experience"),
                clients: t("work.clients"),
                tickets: t("work.tickets"),
              }}
            />
          </section>
        </div>
        <section className="container flex flex-col gap-10 items-center pt-10 pb-32 md:pb-64 lg:pt-20 lg:pb-80 realtive">
          <h2 className="sub-title text-center text-primary-800">
            {t("testimonials.title")}
          </h2>
          <TestimonialsMarquee />
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
