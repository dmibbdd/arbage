import type { ReactNode } from "react"

type ActionButtonProps = {
  children: ReactNode
  onClick: () => void
  disabled?: boolean
  variant?: "primary" | "soft" | "outline"
  className?: string
}

export default function ActionButton({
  children,
  onClick,
  disabled = false,
  variant = "primary",
  className = "",
}: ActionButtonProps) {
  return (
    <button
      className={`action-button action-button--${variant} ${className}`}
      type="button"
      onClick={onClick}
      disabled={disabled}
    >
      <span>{children}</span>
      <span className="button-arrow" aria-hidden="true">
        ←
      </span>
    </button>
  )
}
