import { useEffect, useState } from "react";

/**
 * Scroll-spy: returns the id of the last section whose top edge has passed
 * `offset` px from the top of the viewport. `ids` must be a stable array.
 */
export function useActiveSection(ids: readonly string[], offset = 140): string {
  const [active, setActive] = useState("");

  useEffect(() => {
    let frame = 0;

    const compute = () => {
      frame = 0;
      let current = "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top - offset <= 0) current = id;
        else break;
      }
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      if (atBottom && ids.length > 0) current = ids[ids.length - 1];
      setActive((prev) => (prev === current ? prev : current));
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(compute);
    };

    compute();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [ids, offset]);

  return active;
}

/** True while the element with `id` is entirely outside the viewport. */
export function useOutOfView(id: string): boolean {
  const [outOfView, setOutOfView] = useState(false);

  useEffect(() => {
    const el = document.getElementById(id);
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => setOutOfView(!entry.isIntersecting), {
      threshold: 0,
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, [id]);

  return outOfView;
}
