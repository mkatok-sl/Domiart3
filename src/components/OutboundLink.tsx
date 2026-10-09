import type { ComponentProps } from "react";

/**
 * Every link that points to a casino goes through this component, which
 * enforces the affiliate attributes required by search engines.
 */
export function CasinoLink({ href, children, ...props }: Omit<ComponentProps<"a">, "rel" | "target">) {
  return (
    <a href={href} rel="nofollow noopener noreferrer" target="_blank" {...props}>
      {children}
    </a>
  );
}

/** Non-affiliate external resources (regulator, help lines). */
export function ExternalLink({ href, children, ...props }: Omit<ComponentProps<"a">, "rel" | "target">) {
  return (
    <a href={href} rel="noopener noreferrer" target="_blank" {...props}>
      {children}
    </a>
  );
}
