"use client";

import Link from "next/link";
import type { MouseEvent } from "react";

export function Logo() {
  function handleOnClickLogo(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    event.stopPropagation();

    if (window.location.pathname !== "/") {
      window.location.replace("/");
    } else {
      const main = document.querySelector("main");
      main?.scrollIntoView();
    }
  }

  return (
    <Link href="/" legacyBehavior>
      <button
        type="button"
        className="grid cursor-pointer grid-cols-[auto_auto] gap-x-3 gap-y-0.5"
        onClick={handleOnClickLogo}
      >
        <img
          draggable="false"
          alt="Richard Torres"
          src="/images/me.jpg"
          className="row-span-2 size-14 self-center rounded-full object-cover"
        />
        <div className="text-2xl font-light">
          Richard <span className="font-bold">Torres</span>
        </div>
        <div className="text-md col-start-2 text-start">Software Engineer</div>
      </button>
    </Link>
  );
}
