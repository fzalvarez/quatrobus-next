"use client";

import { useEffect } from "react";
import { sendGAEvent } from "@next/third-parties/google";
import { usePathname } from "@/navigation";
import { useLocale } from "next-intl";

export default function Analytics() {
  const path = usePathname();
  const lang = useLocale();

  useEffect(() => {
    const buttons = document.querySelectorAll(".start_link_button");
    const handler = () => {
      sendGAEvent("event", "main_button_clicked", { path, lang });
    };

    buttons.forEach((button) => {
      button.addEventListener("click", handler);
    });

    return () => {
      buttons.forEach((button) => {
        button.removeEventListener("click", handler);
      });
    };
  }, []);

  return <></>;
}
