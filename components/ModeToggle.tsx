import * as React from "react"
import { Moon, Sun } from "lucide-react"

import { Button } from "../components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu"

export function ModeToggle() {
  const [theme, setThemeState] = React.useState<
    "theme-light" | "dark" | "system"
  >(() =>
    typeof document !== "undefined" &&
    document.documentElement.classList.contains("dark")
      ? "dark"
      : "theme-light"
  )

  React.useEffect(() => {
    const isDark =
      theme === "dark" ||
      (theme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    document.documentElement.classList[isDark ? "add" : "remove"]("dark")
  }, [theme])

  // Shared with every item below so the dropdown reads as part of the same
  // system as the nav pills/tabs/badges: site fonts, uppercase tracking, and
  // a --primary tint on hover/focus instead of shadcn's generic accent.
  const itemClassName =
    "font-[var(--font-sans)] text-xs uppercase tracking-[0.08em] focus:bg-[color-mix(in_oklch,var(--primary)_14%,transparent)] focus:text-[var(--primary)]"

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button
            variant="outline"
            size="icon"
            // Same glass-pill treatment as .nav-links in Nav.astro: translucent
            // foreground tint, matching border, backdrop blur, nav's radius —
            // and an aria-expanded state tinted with --primary like the rest
            // of the site's "active" states, instead of the default solid
            // outline-button look.
            className="rounded-[var(--radius)] border border-[color-mix(in_oklch,var(--foreground)_12%,transparent)] bg-[color-mix(in_oklch,var(--foreground)_6%,transparent)] shadow-none backdrop-blur-[16px] hover:bg-[color-mix(in_oklch,var(--foreground)_10%,transparent)] aria-expanded:border-[color-mix(in_oklch,var(--primary)_35%,transparent)] aria-expanded:bg-[color-mix(in_oklch,var(--primary)_14%,transparent)]"
          />
        }
      >
        <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
        <span className="sr-only">Toggle theme</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        sideOffset={10}
        // Same glass pill as the trigger: real border (not just the default
        // ring), translucent bg + blur, nav's radius, flat (no drop shadow).
        className="rounded-[var(--radius)] border border-[color-mix(in_oklch,var(--foreground)_12%,transparent)] bg-[color-mix(in_oklch,var(--background)_92%,transparent)] shadow-none ring-0 backdrop-blur-[16px]"
      >
        <DropdownMenuItem className={itemClassName} onClick={() => setThemeState("theme-light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem className={itemClassName} onClick={() => setThemeState("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem className={itemClassName} onClick={() => setThemeState("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}