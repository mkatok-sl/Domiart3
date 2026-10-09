/**
 * Detects the sub-folder the site is served from, so wouter routes work both at
 * a domain root (https://example.com/) and on GitHub Pages project sites
 * (https://username.github.io/repository/) without rebuilding.
 *
 * Strategy:
 * 1. In a production build the entry chunk lives in "<base>/assets/". Its own
 *    URL (import.meta.url) therefore reveals the real base path, whatever the
 *    host or repository name is.
 * 2. Fallback for *.github.io: the first path segment is the repository name.
 * 3. Otherwise (dev server, custom domain at root): no base.
 */
export function detectBasePath(): string {
  if (typeof window === "undefined") return "";

  if (!import.meta.env.DEV) {
    try {
      // Assigned to a variable on purpose: Vite rewrites the literal
      // `new URL("...", import.meta.url)` pattern as an asset import.
      const moduleUrl = import.meta.url;
      const appRoot = new URL("..", moduleUrl);
      if (appRoot.origin === window.location.origin) {
        return normalise(appRoot.pathname);
      }
    } catch {
      /* fall through to the hostname heuristic */
    }
  }

  const { hostname, pathname } = window.location;
  if (hostname.endsWith(".github.io")) {
    const [firstSegment] = pathname.split("/").filter(Boolean);
    if (firstSegment && !firstSegment.includes(".")) return `/${firstSegment}`;
  }

  return "";
}

function normalise(path: string): string {
  const trimmed = path.replace(/\/+$/, "");
  return trimmed === "" || trimmed === "/" ? "" : trimmed;
}
