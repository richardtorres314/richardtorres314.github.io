"use client";

import { type MouseEvent } from "react";
import { useRouter } from "next/navigation";

export function Logo() {
  const router = useRouter();

  function handleOnClickLogo(event: MouseEvent<HTMLAnchorElement>) {
    event.stopPropagation();
    event.preventDefault();

    if (window.location.pathname !== "/") {
      window.location.replace("/");
    } else {
      const main = document.querySelector("main");
      main?.scrollIntoView();
      router.replace("/", {
        scroll: false,
      });
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
