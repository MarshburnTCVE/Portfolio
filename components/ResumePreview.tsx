"use client";

import { useRef } from "react";

export default function ResumePreview() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      <button
        type="button"
        aria-haspopup="dialog"
        onClick={() => dialogRef.current?.showModal()}
        className="rounded-full border border-ink px-4 py-1.5 text-sm font-medium transition-colors hover:bg-ink hover:text-paper"
      >
        Resume
      </button>

      <dialog
        ref={dialogRef}
        closedby="any"
        aria-labelledby="resume-title"
        onClick={(event) => {
          const dialog = event.currentTarget;
          const bounds = dialog.getBoundingClientRect();
          const clickedOutside =
            event.clientX < bounds.left ||
            event.clientX > bounds.right ||
            event.clientY < bounds.top ||
            event.clientY > bounds.bottom;

          if (clickedOutside) dialog.close();
        }}
        className="m-auto h-[min(92dvh,52rem)] w-[min(94vw,48rem)] max-w-none overflow-hidden rounded-xl border border-line bg-paper p-0 text-ink shadow-2xl backdrop:bg-ink/70"
      >
        <div className="flex h-full flex-col">
          <div className="flex shrink-0 items-center justify-between gap-4 border-b border-line px-4 py-3 sm:px-5">
            <h2 id="resume-title" className="font-display text-lg font-medium">
              Resume
            </h2>
            <div className="flex items-center gap-2">
              <a
                href="/resume.pdf"
                download
                className="rounded-full border border-ink px-3 py-1.5 text-sm font-medium transition-colors hover:bg-ink hover:text-paper"
              >
                Download
              </a>
              <form method="dialog">
                <button
                  type="submit"
                  aria-label="Close resume preview"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-line text-xl leading-none transition-colors hover:border-signal hover:bg-signal hover:text-white"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </form>
            </div>
          </div>

          <object
            data="/resume.pdf#view=FitH"
            type="application/pdf"
            aria-label="Resume PDF preview"
            className="min-h-0 w-full flex-1 bg-surface"
          >
            <div className="flex h-full items-center justify-center p-6 text-center">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
                Open the resume PDF in a new tab
              </a>
            </div>
          </object>
        </div>
      </dialog>
    </>
  );
}
