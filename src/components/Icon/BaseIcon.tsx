import { forwardRef, useId, type PropsWithChildren } from "react"
import { cn } from "@/lib/utils"
import type { IconProps } from "./types"

export const BaseIcon = forwardRef<SVGSVGElement, PropsWithChildren<IconProps>>(
  (
    {
      className,
      title,
      children,
      viewBox = "0 0 24 24",
      fill = "currentColor",
      ...props
    },
    ref
  ) => {
    const titleId = useId()

    return (
      <svg
        ref={ref}
        className={cn("inline-block", className)}
        viewBox={viewBox}
        fill={fill}
        aria-hidden={title ? undefined : true}
        aria-labelledby={title ? titleId : undefined}
        role={title ? "img" : undefined}
        focusable="false"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        {title ? <title id={titleId}>{title}</title> : null}
        {children}
      </svg>
    )
  }
)

BaseIcon.displayName = "BaseIcon"
