"use client";

import {
  SvgFacebook,
  SvgInstagram,
  SvgLinkedIn,
  SvgQuatrobus,
  SvgTikTok,
} from "@/svg";
import AnimatedBackground from "./animated-background";
import { Button } from "@nextui-org/react";
import { Link, usePathname } from "@/navigation";

interface Props {
  translations: {
    menu: string;
    languages: string;
    home: string;
    features: string;
    english: string;
    spanish: string;
    copyrigth: string;
  };
}

export default function Footer({ translations }: Props) {
  const path = usePathname();

  if (path === "/blog") return <></>;

  return (
    <footer className="bg-primary flex flex-col text-white">
      <div className="overflow-hidden relative">
        <AnimatedBackground />
        <div className="container pt-[600px] flex flex-col items-center relative z-20 pb-10 md:pt-[400px] gap-6 md:gap-12 md:flex-row md:items-start md:justify-center lg:pt-72 lg:gap-20 xl:justify-between">
          <div className="flex flex-col items-center gap-2 dark xl:ml-32">
            <SvgQuatrobus />
            <div className="flex items-center gap-4">
              <Button
                as="a"
                href="https://www.facebook.com/quatrobus"
                target="_blank"
                isIconOnly
                size="sm"
                color="default"
                variant="light"
              >
                <SvgFacebook />
              </Button>
              <Button
                as="a"
                href="https://www.instagram.com/quatrobus"
                target="_blank"
                isIconOnly
                size="sm"
                color="default"
                variant="light"
              >
                <SvgInstagram />
              </Button>
              <Button
                as="a"
                href="https://www.linkedin.com/showcase/quatrobus"
                target="_blank"
                isIconOnly
                size="sm"
                color="default"
                variant="light"
              >
                <SvgLinkedIn />
              </Button>
              <Button
                as="a"
                href="https://www.tiktok.com/@quatrobus"
                target="_blank"
                isIconOnly
                size="sm"
                color="default"
                variant="light"
              >
                <SvgTikTok />
              </Button>
            </div>
          </div>
          <div className="flex items-start gap-6 md:gap-12 lg:gap-20 xl:gap-28 xl:mr-32">
            <div className="flex flex-col gap-2">
              <h3 className="font-bold">{translations.menu}</h3>
              <ul className="text-sm space-y-1">
                <li>
                  <Link href="/">{translations.home}</Link>
                </li>
                <li>
                  <Link href="/blog">Blog</Link>
                </li>
                <li>
                  <Link href="/features">{translations.features}</Link>
                </li>
                <li>
                  <Link href="/demo">Demo</Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-bold">{translations.languages}</h3>
              <ul className="text-sm space-y-1">
                <li>
                  <Link href={path} locale="en">
                    {translations.english}
                  </Link>
                </li>
                <li>
                  <Link href={path} locale="es">
                    {translations.spanish}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-secondary grid place-items-center py-6 text-sm">
        {new Date().getFullYear()} &copy; Quatrobus. {translations.copyrigth}
      </div>
    </footer>
  );
}
