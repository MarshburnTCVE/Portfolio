"use client";

import Image from "next/image";
import { useRef } from "react";

export default function ProfilePhoto() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      <button
        type="button"
        aria-label="Open profile photo"
        aria-haspopup="dialog"
        onClick={() => dialogRef.current?.showModal()}
        className="h-9 w-9 shrink-0 overflow-hidden rounded-full border border-line transition-colors hover:border-signal"
      >
        <Image
          src="/image.jfif"
          alt=""
          width={36}
          height={36}
          unoptimized
          className="h-full w-full object-cover"
        />
      </button>

      <dialog
        ref={dialogRef}
        aria-label="Profile photo preview"
        onClick={(event) => {
          if (event.target === event.currentTarget) event.currentTarget.close();
        }}
        className="m-auto max-h-[90dvh] max-w-[90vw] overflow-visible border-0 bg-transparent p-0 backdrop:bg-ink/70"
      >
        <div className="relative aspect-square w-[min(90vw,90dvh,42rem)] overflow-hidden rounded-lg bg-paper shadow-2xl">
          <Image
            src="/image.jfif"
            alt="Portrait of Marshburn, Tc Vash Everett"
            width={737}
            height={925}
            unoptimized
            className="h-full w-full object-contain"
          />
          <form method="dialog" className="absolute right-3 top-3">
            <button
              type="submit"
              aria-label="Close image preview"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-surface text-2xl leading-none text-ink shadow-sm transition-colors hover:border-signal hover:bg-signal hover:text-white"
            >
              <span aria-hidden="true">×</span>
            </button>
          </form>
        </div>
      </dialog>
    </>
  );
}