"use client";

import React from "react";
import {
  ArrowRightIcon,
  EmailIcon,
  FileDownloadIcon,
  GithubIcon,
  InstagramIcon,
  LinkedInIcon,
} from "../Icon";
import { ProgressiveBlurBG } from "./ProgressiveBlurBG";
import { SocialLinkButton } from "./SocialLinkButton";
import { Tooltip } from "@base-ui-components/react";

export function Header({ lang }: { lang: "en" | "fr" }) {
  return (
    <Tooltip.Provider delay={200}>
      <div className="fixed top-0 w-screen z-50 text-zinc-900">
        <ProgressiveBlurBG />

        <div className="md:my-8 my-4 relative z-10 bg-violet-50/80 overflow-clip border border-zinc-200 backdrop-blur-lg p-1.5 rounded-full shadow-lg shadow-purple-800/10 flex items-center justify-between max-w-xl max-sm:mx-3 mx-auto">
          <div className="flex items-center gap-1.5 ml-1">
            <SocialLinkButton
              href="https://github.com/daniakl"
              tooltipText="GitHub"
            >
              <GithubIcon className="md:size-5 size-6" />
            </SocialLinkButton>
            <SocialLinkButton
              href="https://www.instagram.com/petitarbre/"
              tooltipText="Instagram"
            >
              <InstagramIcon className="md:size-5 size-6" />
            </SocialLinkButton>
            <SocialLinkButton
              href="https://linkedin.com/in/daniakl"
              tooltipText="LinkedIn"
            >
              <LinkedInIcon className="md:size-5 size-6" />
            </SocialLinkButton>

            <Tooltip.Root>
              <Tooltip.Trigger
                className="flex items-center justify-center rounded p-1 text-zinc-500 hover:text-zinc-900 transition-colors cursor-pointer pr-2"
                onClick={() => {
                  const link = document.createElement("a");

                  link.href = lang === "en" ? "/CV - en.pdf" : "/CV - fr.pdf";
                  link.download = "CV-Dania.pdf";
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                <FileDownloadIcon className="md:size-5 size-6" />
              </Tooltip.Trigger>
              <Tooltip.Portal>
                <Tooltip.Positioner sideOffset={10} className="z-[99999]">
                  <Tooltip.Popup className="flex origin-[var(--transform-origin)] bg-zinc-900 text-white items-center gap-1.5 rounded-md px-2 py-1.5 text-sm shadow-lg transition-[transform,scale,opacity] data-[ending-style]:scale-90 data-[ending-style]:opacity-0 data-[instant]:duration-0 data-[starting-style]:scale-90 data-[starting-style]:opacity-0">
                    <span>
                      {lang === "en" ? "Download CV" : "Télécharger le CV"}
                    </span>
                  </Tooltip.Popup>
                </Tooltip.Positioner>
              </Tooltip.Portal>
            </Tooltip.Root>
          </div>

          <div className="flex items-center gap-1.5">
            <a
              href="mailto:hello@daniakl.com"
              target="_blank"
              className="relative bg-violet-100 group shadow-inner text-violet-950 ring ring-inset ring-violet-400/10 overflow-hidden rounded-full cursor-pointer h-8"
            >
              <div className="max-md:hidden flex flex-col gap-1 group-hover:-translate-y-7 py-1 px-2.5  transition-transform duration-200">
                <div className="flex items-center h-6 min-w-max">
                  <EmailIcon className="size-5 opacity-70" />
                  <span className="px-4 w-full text-center">
                    hello@daniakl.com
                  </span>
                </div>
                <div className="relative flex items-center h-6 min-w-max">
                  <div className="bg-gradient-to-t from-violet-400/20 to-transparent absolute inset-0 -mx-2.5 -mb-1 rounded-full" />

                  <ArrowRightIcon className="size-5 opacity-70" />
                  <span className="px-4 w-full text-center">
                    {lang === "en" ? "Let's talk! 😊" : "Dites bonjour! 😊"}
                  </span>
                </div>
              </div>

              <div className="md:hidden flex items-center px-2.5 py-1 gap-1">
                <EmailIcon className="size-6 md:size-5 shrink-0 opacity-70" />
                <span className="px-2 w-full text-center">Contact</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </Tooltip.Provider>
  );
}
