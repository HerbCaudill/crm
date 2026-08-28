import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/** Merge conditional class names while resolving Tailwind conflicts. */
export function cn(
  /** Class names to combine. */
  ...inputs: ClassValue[]
) {
  return twMerge(clsx(inputs))
}
