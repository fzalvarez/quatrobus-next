"use client";

import { Link, usePathname } from "@/navigation";
import { SvgFlag, SvgQuatrobus } from "@/svg";
import { BorderBeam } from "@/ui/border-beam";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { useLocale } from "next-intl";
import { useState } from "react";

interface Props {
  translations: {
    cta: string;
    features: string;
    home: string;
    es: string;
    en: string;
    languages: string;
  };
}

export default function Header({ translations }: Props) {
  const path = usePathname();
  const lang = useLocale();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      isBlurred={false}
      classNames={{
        base: "-mb-20 container bg-transparent pt-4",
        wrapper:
          "!max-w-full bg-primary-800/50 rounded-full backdrop-blur-xl p-4 text-white",
      }}
    >
      <NavbarContent justify="start">
        <NavbarMenuToggle className="max-[500px]:hidden ml-2 lg:hidden" />
        <NavbarBrand>
          <Link href="/">
            <SvgQuatrobus className="text-[0.5rem] md:text-[0.65rem] ml-2 group" />
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent
        justify="center"
        className="max-lg:hidden flex items-center gap-10"
      >
        <Link
          href="/blog"
          className={`hover:text-success duration-200 ${
            path === "/blog" ? "text-success" : ""
          }`}
        >
          Blog
        </Link>
        <Link
          href="/features"
          className={`hover:text-success duration-200 ${
            path === "/features" ? "text-success" : ""
          }`}
        >
          {translations.features}
        </Link>
        <Link
          href="/demo"
          className={`hover:text-success duration-200 ${
            path === "/demo" ? "text-success" : ""
          }`}
        >
          Demo
        </Link>
      </NavbarContent>
      <NavbarContent justify="end">
        <Button
          color="secondary"
          variant="solid"
          radius="full"
          className="text-white max-[500px]:hidden font-semibold"
        >
          {translations.cta}
          <BorderBeam
            size={50}
            duration={5}
            delay={0}
            colorFrom="rgba(255,255,255,0)"
            colorTo="rgb(255,255,255)"
            borderWidth={2}
          />
        </Button>
        <NavbarMenuToggle className="min-[500px]:hidden mr-2" />
        <Dropdown>
          <DropdownTrigger>
            <Button
              radius="full"
              variant="light"
              className="max-lg:hidden text-white"
              isIconOnly
            >
              <SvgFlag className="text-lg" lang={lang} />
            </Button>
          </DropdownTrigger>
          <DropdownMenu items={[{ lang: "es" }, { lang: "en" }]}>
            {(item) => (
              <DropdownItem
                startContent={<SvgFlag className="text-lg" lang={item.lang} />}
                key={item.lang}
                hrefLang={lang !== item.lang ? item.lang : undefined}
                href={`/${item.lang}${path === "/" ? "" : path}`}
              >
                {translations[item.lang as "es" | "en"]}
              </DropdownItem>
            )}
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
      <NavbarMenu className="!top-0 pt-24 !h-screen bg-white/20 backdrop-blur-lg text-priamry-800">
        <NavbarMenuItem className="w-full">
          <Link
            onClick={() => setIsMenuOpen((prev) => !prev)}
            href="/"
            className={`px-2 py-1.5 w-full block rounded-xl ${
              path === "/" ? "bg-primary-800/20" : ""
            }`}
          >
            {translations.home}
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem className="w-full">
          <Link
            onClick={() => setIsMenuOpen((prev) => !prev)}
            href="/blog"
            className={`px-2 py-1.5 w-full block rounded-xl ${
              path === "/blog" ? "bg-primary-800/20" : ""
            }`}
          >
            Blog
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem className="w-full">
          <Link
            onClick={() => setIsMenuOpen((prev) => !prev)}
            href="/features"
            className={`px-2 py-1.5 w-full block rounded-xl ${
              path === "/features" ? "bg-primary-800/20" : ""
            }`}
          >
            {translations.features}
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem className="w-full">
          <Link
            onClick={() => setIsMenuOpen((prev) => !prev)}
            href="/demo"
            className={`px-2 py-1.5 w-full block rounded-xl ${
              path === "/demo" ? "bg-primary-800/20" : ""
            }`}
          >
            Demo
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem className="w-full grid grid-cols-2 gap-x-5 gap-y-2">
          <h3 className="col-span-full px-2">{translations.languages}</h3>
          <Link
            href={path}
            locale="es"
            className={`flex items-center justify-center gap-2 px-2 py-1.5 rounded-xl ${
              lang === "es" ? "bg-primary-800/20" : ""
            }`}
          >
            <SvgFlag lang="es" className="text-xl" />
            <span>{translations.es}</span>
          </Link>
          <Link
            href={path}
            locale="en"
            className={`flex items-center justify-center gap-2 px-2 py-1.5 rounded-xl ${
              lang === "en" ? "bg-primary-800/20" : ""
            }`}
          >
            <SvgFlag lang="en" className="text-xl rounded-full" />
            <span>{translations.en}</span>
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
