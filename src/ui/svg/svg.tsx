"use client";

import { type Props, ReactSVG } from "react-svg";

type SVGProps = Omit<Props, "ref">;

export default function SVG(props: SVGProps) {
  return <ReactSVG {...props} />;
}
