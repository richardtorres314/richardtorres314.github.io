"use client";

import { MouseEvent } from "react";

export function Logo() {
  function handleOnClickLogo(event: MouseEvent<HTMLAnchorElement>) {
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
    <a href="/" onClick={handleOnClickLogo} className="flex items-center">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        draggable="false"
        alt="Richard Torres"
        src="/images/me.jpg"
        className="h-14 w-14 rounded-full object-cover"
      />
      <div className="ml-4">
        <div className="font-light text-2xl">
          Richard <span className="font-bold">Torres</span>
        </div>
        <div className="text-md">Software Engineer</div>
      </div>
    </a>
  );
}
