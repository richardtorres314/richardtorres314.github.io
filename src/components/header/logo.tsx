"use client";

import { useRouter } from "next/navigation";
import type { MouseEvent } from "react";

export function Logo() {
  const router = useRouter();

  function handleOnClickLogo(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    event.stopPropagation();

    if (window.location.pathname !== "/") {
      router.replace("/");
    } else {
      const main = document.querySelector("main");
      main?.scrollIntoView();
    }
  }

  return (
    <button
      type="button"
      className="grid cursor-pointer grid-cols-[auto_auto] gap-x-3 gap-y-0.5"
      onClick={handleOnClickLogo}
    >
      <picture className="row-span-2 flex">
        <img
          draggable="false"
          alt="Richard Torres"
          src="/images/richard-torres-sm.jpg"
          className="size-14 self-center rounded-full object-cover"
        />
      </picture>
      <div className="text-2xl font-light">
        Richard <span className="font-bold">Torres</span>
      </div>
      <div className="text-md col-start-2 text-start">Software Engineer</div>
    </button>
  );
}
