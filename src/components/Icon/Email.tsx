import type { IconProps } from "./types"
import { BaseIcon } from "./BaseIcon"

export function Email(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none">
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M21.002 9.25a14.934 14.934 0 0 1-9.002 3 14.934 14.934 0 0 1-9.001-3m2.751-4.5h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5a3 3 0 0 1 3-3Z"
        />
      </svg>
    </BaseIcon>
  )
}
