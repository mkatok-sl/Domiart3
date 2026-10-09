import { Fragment, type ReactNode } from "react";

const BOLD_PATTERN = /\*\*(.+?)\*\*/g;

/**
 * Parses `**bold**` markdown into <strong> elements.
 * Every paragraph and list item on the page passes through this helper,
 * so copy in src/data/content.ts can use double asterisks freely.
 */
export function formatText(text: string): ReactNode {
  if (!text.includes("**")) return text;

  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let key = 0;

  for (const match of text.matchAll(BOLD_PATTERN)) {
    const start = match.index ?? 0;
    if (start > lastIndex) {
      nodes.push(<Fragment key={key++}>{text.slice(lastIndex, start)}</Fragment>);
    }
    nodes.push(<strong key={key++}>{match[1]}</strong>);
    lastIndex = start + match[0].length;
  }

  if (lastIndex < text.length) {
    nodes.push(<Fragment key={key++}>{text.slice(lastIndex)}</Fragment>);
  }

  return nodes;
}

/** Strips `**` markers — for meta tags, aria-labels and JSON-LD. */
export function plainText(text: string): string {
  return text.replace(BOLD_PATTERN, "$1");
}
