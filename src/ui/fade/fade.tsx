"use client";

import { FadeProps, Fade as RAFade } from "react-awesome-reveal";

import styles from "./fade.module.css";

export function Fade(props: FadeProps) {
  return <RAFade className={styles.fade} {...props} />;
}
