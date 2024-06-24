import Marquee from "@/ui/marquee";
import Image, { StaticImageData } from "next/image";

const alliances = [
  {
    name: "BANY",
    logo: require("@/assets/alliances/BANY.png").default as StaticImageData,
  },
  {
    name: "CBA",
    logo: require("@/assets/alliances/CBA.png").default as StaticImageData,
  },
  {
    name: "NBMCA",
    logo: require("@/assets/alliances/MBMCA.jpg").default as StaticImageData,
  },
  {
    name: "SCMA",
    logo: require("@/assets/alliances/SCMA.png").default as StaticImageData,
  },
  {
    name: "VMA",
    logo: require("@/assets/alliances/VMA.png").default as StaticImageData,
  },
  {
    name: "BusBud",
    logo: require("@/assets/alliances/busbud.png").default as StaticImageData,
  },
  {
    name: "Distribution",
    logo: require("@/assets/alliances/distribution.png")
      .default as StaticImageData,
  },
  {
    name: "Omio",
    logo: require("@/assets/alliances/omio.png").default as StaticImageData,
  },
  {
    name: "PinBus",
    logo: require("@/assets/alliances/pinbus.png").default as StaticImageData,
  },
  {
    name: "Plataforma 10",
    logo: require("@/assets/alliances/plataforma_10.png")
      .default as StaticImageData,
  },
  {
    name: "RedBus",
    logo: require("@/assets/alliances/redbus.png").default as StaticImageData,
  },
  {
    name: "Wanderu",
    logo: require("@/assets/alliances/wanderu.png").default as StaticImageData,
  },
];

export default function AlliancesMarquee() {
  return (
    <div className="w-full relative">
      <div className="absolute top-0 let-0 pointer-events-none w-full h-full z-10 bg-[linear-gradient(90deg,_rgb(255,255,255)_0%,_rgba(255,255,255,0)_10%,_rgba(255,255,255,0)_90%,_rgb(255,255,255)_100%)]"></div>
      <Marquee className="[--duration:15s] md:[--duration:20s]">
        {alliances.map((alliance, i) => (
          <div className="w-40 h-24 grid place-items-center px-4" key={i}>
            <Image
              src={alliance.logo}
              alt={alliance.name}
              className="h-full w-auto object-contain"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
}
