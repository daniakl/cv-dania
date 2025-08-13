import type { IconProps } from "./types"
import { BaseIcon } from "./BaseIcon"

export function ArrowRight(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M14 5.75L20.25 12L14 18.25"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19.5 12H3.75"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </BaseIcon>
  )
}
