"use client"

import dynamic from "next/dynamic";

export const NavComponentDynamic = dynamic(
  () => import("../Nav"),
  { ssr: false }
);