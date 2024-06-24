"use client";

import { globeConfig, sampleArcs } from "@/data/sample";
import dynamic from "next/dynamic";

const World = dynamic(() => import("../ui/globe").then((m) => m.World), {
  ssr: false,
});

export default function GlobeForBlog() {
  return (
    <div className="absolute bottom-0 translate-y-1/3 xl:-bottom-1/2 lg:translate-y-1/3 left-1/2 -translate-x-1/2 w-[200%] lg:w-full h-auto aspect-square pointer-events-none min-[500px]:translate-y-[45%] sm:translate-y-2/3">
      <World data={sampleArcs} globeConfig={globeConfig} />
    </div>
  );
}
