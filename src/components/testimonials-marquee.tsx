import { shuffle } from "@/lib";
import { SvgStar } from "@/svg";
import Marquee from "@/ui/marquee";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import Image, { StaticImageData } from "next/image";

export default function TestimonialsMarquee() {
  const t = useTranslations("Home.testimonials");

  const elements = [
    {
      author: {
        name: "Iván Vilchez",
        occupation: t("ocupation.marketing"),
      },
      comment: t("comments.0"),
      image: require("@/assets/clients/Megabus.png").default as StaticImageData,
    },
    {
      author: {
        name: "Adriana Ramirez",
        occupation: "-",
      },
      comment: t("comments.1"),
      image: require("@/assets/clients/Autobuses_Tejanos.png")
        .default as StaticImageData,
    },
    {
      author: {
        name: "Christian Rojas",
        occupation: t("ocupation.ceo"),
      },
      comment: t("comments.2"),
      image: require("@/assets/clients/Euro_Bus.png")
        .default as StaticImageData,
    },
    {
      author: {
        name: "Sara Valenzuela",
        occupation: t("ocupation.ceo"),
      },
      comment: t("comments.3"),
      image: require("@/assets/clients/Flor_Movil.png")
        .default as StaticImageData,
    },
    {
      author: {
        name: "Amlud Uscategui",
        occupation: t("ocupation.legal"),
      },
      comment: t("comments.4"),
      image: require("@/assets/clients/Pool_Dorado.png")
        .default as StaticImageData,
    },
    {
      author: {
        name: "Christian Rojas",
        occupation: t("ocupation.ceo"),
      },
      comment: t("comments.5"),
      image: require("@/assets/clients/Turismo_del_Norte.png")
        .default as StaticImageData,
    },
    {
      author: {
        name: "Hans Servan",
        occupation: t("ocupation.ceo"),
      },
      comment: t("comments.6"),
      image: require("@/assets/clients/Latham_Peru.png")
        .default as StaticImageData,
    },
    {
      author: {
        name: "Maria Lopez",
        occupation: "-",
      },
      comment: t("comments.7"),
      image: require("@/assets/clients/Transportes_Chavez_Inc.png")
        .default as StaticImageData,
    },
    {
      author: {
        name: "Camila Miranda",
        occupation: t("ocupation.admin"),
      },
      comment: t("comments.8"),
      image: require("@/assets/clients/Cruz_del_Norte.png")
        .default as StaticImageData,
    },
  ];

  return (
    <div className="w-full grid gird-cols-1 h-[800px] md:grid-cols-2 lg:grid-cols-3 relative">
      <div className="absolute top-0 let-0 pointer-events-none w-full h-full z-10 bg-[linear-gradient(0deg,_rgb(255,255,255)_0%,_rgba(255,255,255,0)_10%,_rgba(255,255,255,0)_90%,_rgb(255,255,255)_100%)]"></div>
      <Marquee vertical className="[--duration:35s] [--gap:2rem]">
        {shuffle(elements).map((element, index) => (
          <Card key={`testimonial_1_${index}`} className="px-4 py-2">
            <CardHeader className="flex items-center justify-between">
              <div className="flex flex-col">
                <h3 className="font-bold">{element.author.name}</h3>
                <p className="text-small">{element.author.occupation}</p>
              </div>
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <SvgStar
                    key={`testimonial_1_${index}_start_${i}`}
                    className="text-[0.5rem] text-success"
                  />
                ))}
              </div>
            </CardHeader>
            <CardBody className="text-small text-pretty">
              {'"'}
              {element.comment}
              {'"'}
            </CardBody>
            <CardFooter className="justify-end px-0">
              <Image
                src={element.image}
                alt=""
                className="h-auto w-1/2 object-scale-down"
              />
            </CardFooter>
          </Card>
        ))}
      </Marquee>
      <Marquee
        vertical
        className="[--duration:50s] [--gap:2rem] max-md:hidden"
        reverse
      >
        {shuffle(elements).map((element, index) => (
          <Card key={`testimonial_1_${index}`} className="px-4 py-2">
            <CardHeader className="flex items-center justify-between">
              <div className="flex flex-col">
                <h3 className="font-bold">{element.author.name}</h3>
                <p className="text-small">{element.author.occupation}</p>
              </div>
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <SvgStar
                    key={`testimonial_1_${index}_start_${i}`}
                    className="text-[0.5rem] text-success"
                  />
                ))}
              </div>
            </CardHeader>
            <CardBody className="text-small text-pretty">
              {'"'}
              {element.comment}
              {'"'}
            </CardBody>
            <CardFooter className="justify-end px-0">
              <Image
                src={element.image}
                alt=""
                className="h-auto w-1/2 object-scale-down"
              />
            </CardFooter>
          </Card>
        ))}
      </Marquee>
      <Marquee vertical className="[--duration:30s] [--gap:2rem] max-lg:hidden">
        {shuffle(elements).map((element, index) => (
          <Card key={`testimonial_1_${index}`} className="px-4 py-2">
            <CardHeader className="flex items-center justify-between">
              <div className="flex flex-col">
                <h3 className="font-bold">{element.author.name}</h3>
                <p className="text-small">{element.author.occupation}</p>
              </div>
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <SvgStar
                    key={`testimonial_1_${index}_start_${i}`}
                    className="text-[0.5rem] text-success"
                  />
                ))}
              </div>
            </CardHeader>
            <CardBody className="text-small text-pretty">
              {'"'}
              {element.comment}
              {'"'}
            </CardBody>
            <CardFooter className="justify-end px-0">
              <Image
                src={element.image}
                alt=""
                className="h-auto w-1/2 object-scale-down"
              />
            </CardFooter>
          </Card>
        ))}
      </Marquee>
    </div>
  );
}
