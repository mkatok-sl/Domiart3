import { ChevronDown, ListTree } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { SECTIONS } from "@/data/content";
import { cn } from "@/lib/utils";

interface TocProps {
  active: string;
}

/** Desktop sticky TOC — the active section gets the rose-gold rule. */
export function DesktopToc({ active }: TocProps) {
  const listRef = useRef<HTMLOListElement>(null);

  // Keep the highlighted entry visible inside the (scrollable) sidebar.
  useEffect(() => {
    const list = listRef.current;
    const item = list?.querySelector<HTMLElement>(`[data-toc="${active}"]`);
    const scroller = list?.closest<HTMLElement>("[data-toc-scroller]");
    if (!item || !scroller) return;
    const itemTop = item.offsetTop;
    const itemBottom = itemTop + item.offsetHeight;
    if (itemTop < scroller.scrollTop + 24) scroller.scrollTop = itemTop - 24;
    else if (itemBottom > scroller.scrollTop + scroller.clientHeight - 24)
      scroller.scrollTop = itemBottom - scroller.clientHeight + 24;
  }, [active]);

  return (
    <nav aria-label="Зміст огляду">
      <p className="flex items-center gap-2 font-ui text-sm font-semibold text-rose-white">
        <ListTree className="size-4 text-lavender" strokeWidth={1.5} aria-hidden />
        Зміст огляду
      </p>
      <ol ref={listRef} className="relative mt-4 border-l border-velvet-border">
        {SECTIONS.map((section) => {
          const isActive = section.id === active;
          return (
            <li key={section.id} data-toc={section.id}>
              <a
                href={`#${section.id}`}
                aria-current={isActive ? "location" : undefined}
                className={cn(
                  "-ml-px block border-l py-[0.3rem] pl-4 pr-2 font-ui text-[0.8125rem] leading-snug transition-colors duration-200",
                  isActive
                    ? "border-rose-gold text-rose-white-light"
                    : "border-transparent text-velvet-secondary hover:border-velvet-muted hover:text-rose-white",
                )}
              >
                {section.toc}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

/** Mobile/tablet: compact sticky bar that names the current section. */
export function MobileToc({ active }: TocProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const current = SECTIONS.find((s) => s.id === active);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onClick = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  return (
    <div
      ref={rootRef}
      className="sticky top-[var(--header-h)] z-30 -mx-4 border-b border-velvet-border bg-velvet-deep/97 backdrop-blur-md sm:-mx-6 lg:hidden"
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="mobile-toc-panel"
        className="flex h-12 w-full items-center gap-3 px-4 text-left font-ui text-sm sm:px-6"
      >
        <ListTree className="size-4 shrink-0 text-lavender" strokeWidth={1.5} aria-hidden />
        <span className="shrink-0 font-semibold text-rose-white">Зміст</span>
        <span className="min-w-0 flex-1 truncate text-velvet-secondary">{current?.toc ?? "Огляд Gorilla"}</span>
        <ChevronDown
          className={cn("size-4 shrink-0 text-lavender transition-transform duration-200", open && "rotate-180")}
          aria-hidden
        />
      </button>
      {open && (
        <nav
          id="mobile-toc-panel"
          aria-label="Зміст огляду"
          className="scrollbar-thin max-h-[60dvh] overflow-y-auto border-t border-velvet-border px-2 pb-3 pt-2"
        >
          <ol className="grid gap-0.5 sm:grid-cols-2">
            {SECTIONS.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  onClick={() => setOpen(false)}
                  aria-current={section.id === active ? "location" : undefined}
                  className={cn(
                    "block rounded-md px-3 py-2.5 font-ui text-sm transition-colors",
                    section.id === active
                      ? "bg-velvet-elevated text-rose-white-light shadow-[inset_2px_0_0_var(--color-rose-gold)]"
                      : "text-velvet-secondary hover:bg-velvet-hover hover:text-rose-white",
                  )}
                >
                  {section.toc}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      )}
    </div>
  );
}
