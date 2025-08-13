import { Tooltip } from "@base-ui-components/react"
import Link from "next/link"
import { ArrowUpRightIcon } from "../Icon"

type SocialLinkButtonProps = {
  children: React.ReactNode
  href: string
  tooltipText: string
}

export function SocialLinkButton({
  children,
  href,
  tooltipText,
}: SocialLinkButtonProps) {
  return (
    <>
      <Tooltip.Root>
        <Tooltip.Trigger>
          <Link
            href={href}
            target="_blank"
            className="flex items-center justify-center rounded p-1 text-zinc-500 hover:text-zinc-900 transition-colors"
          >
            {children}
          </Link>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Positioner sideOffset={10} className="z-[99999]">
            <Link href={href} target="_blank">
              <Tooltip.Popup className="flex group origin-[var(--transform-origin)] bg-zinc-900 text-white items-center gap-1.5 rounded-md px-2 py-1.5 text-sm shadow-lg transition-[transform,scale,opacity] data-[ending-style]:scale-90 data-[ending-style]:opacity-0 data-[instant]:duration-0 data-[starting-style]:scale-90 data-[starting-style]:opacity-0">
                <ArrowUpRightIcon className="size-4" />
                <span className="group-hover:underline">{tooltipText}</span>
              </Tooltip.Popup>
            </Link>
          </Tooltip.Positioner>
        </Tooltip.Portal>
      </Tooltip.Root>
    </>
  )
}
