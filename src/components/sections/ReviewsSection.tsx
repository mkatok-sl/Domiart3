import { MessageSquareReply, PenLine, ThumbsUp } from "lucide-react";
import { useMemo, useState } from "react";
import { RatingStars } from "@/components/RatingStars";
import { Paragraph, Section } from "@/components/Section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { FEATURED, REVIEWS_DATA, REVIEWS_INTRO, SITE, type PlayerReview } from "@/data/content";
import { formatText } from "@/lib/format-text";
import { cn, formatDateUk } from "@/lib/utils";

const INITIAL_VISIBLE = 3;

function ReviewItem({ review }: { review: PlayerReview }) {
  const [voted, setVoted] = useState(false);
  return (
    <li className="border-b border-velvet-border/80 py-6 last:border-b-0">
      <article>
        <header className="flex flex-wrap items-center gap-x-3 gap-y-2 font-ui text-sm">
          <span
            aria-hidden
            className="grid size-9 place-items-center rounded-full bg-velvet-elevated font-display italic text-rose-white"
          >
            {review.author.charAt(0)}
          </span>
          <span className="font-semibold text-rose-white">{review.author}</span>
          <span className="text-velvet-muted">{review.city}</span>
          <RatingStars value={review.rating} size="sm" />
          {review.isSample && <Badge variant="outline">Приклад</Badge>}
          <time dateTime={review.date} className="ml-auto text-xs text-velvet-muted">
            {formatDateUk(review.date)}
          </time>
        </header>
        <p className="mt-3 max-w-[68ch] text-[1.0313rem] leading-[1.7] text-rose-white/90">{formatText(review.text)}</p>

        {review.reply && (
          <div className="mt-4 max-w-[64ch] border-l border-lavender/50 pl-4">
            <p className="flex items-center gap-1.5 font-ui text-xs font-semibold text-lavender">
              <MessageSquareReply className="size-3.5" strokeWidth={1.5} aria-hidden />
              {review.reply.author}
            </p>
            <p className="mt-1.5 text-[0.975rem] leading-relaxed text-velvet-secondary">{formatText(review.reply.text)}</p>
          </div>
        )}

        <button
          type="button"
          onClick={() => setVoted((v) => !v)}
          aria-pressed={voted}
          className={cn(
            "mt-4 inline-flex items-center gap-1.5 rounded-md px-2 py-1 font-ui text-xs transition-colors hover:bg-velvet-hover",
            voted ? "text-rose-gold" : "text-velvet-secondary",
          )}
        >
          <ThumbsUp className="size-3.5" strokeWidth={1.5} aria-hidden />
          Корисно <span className="tabular">{review.helpful + (voted ? 1 : 0)}</span>
        </button>
      </article>
    </li>
  );
}

export function ReviewsSection() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? REVIEWS_DATA : REVIEWS_DATA.slice(0, INITIAL_VISIBLE);

  const { average, distribution } = useMemo(() => {
    const total = REVIEWS_DATA.reduce((sum, r) => sum + r.rating, 0);
    const dist = [5, 4, 3, 2, 1].map((stars) => ({
      stars,
      count: REVIEWS_DATA.filter((r) => r.rating === stars).length,
    }));
    return { average: REVIEWS_DATA.length ? total / REVIEWS_DATA.length : 0, distribution: dist };
  }, []);

  const mailto = `mailto:${SITE.editorEmail}?subject=${encodeURIComponent(`Відгук про ${FEATURED.name}`)}`;

  return (
    <Section id="reviews">
      <Paragraph text={REVIEWS_INTRO} />

      <div className="grid gap-8 md:grid-cols-[13rem_minmax(0,1fr)] md:gap-12">
        <div className="md:pt-6">
          <p className="font-heading text-[3.25rem] leading-none text-rose-white-light tabular">{average.toFixed(1)}</p>
          <RatingStars value={average} className="mt-3" />
          <p className="mt-2 font-ui text-sm text-velvet-secondary">
            {REVIEWS_DATA.length} відгуків гравців
          </p>
          <ul className="mt-5 space-y-2 font-ui text-xs text-velvet-muted" aria-label="Розподіл оцінок">
            {distribution.map((row) => (
              <li key={row.stars} className="flex items-center gap-2.5">
                <span className="w-3 tabular">{row.stars}</span>
                <Progress
                  value={row.count}
                  max={REVIEWS_DATA.length || 1}
                  className="h-1"
                  indicatorClassName="bg-lavender"
                  aria-label={`${row.stars} зірок: ${row.count}`}
                />
                <span className="w-3 text-right tabular">{row.count}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="min-w-0">
          <ul>
            {visible.map((review) => (
              <ReviewItem key={review.id} review={review} />
            ))}
          </ul>
          <div className="mt-4 flex flex-wrap gap-3">
            <Button asChild>
              <a href={mailto}>
                <PenLine aria-hidden />
                Залишити відгук
              </a>
            </Button>
            {REVIEWS_DATA.length > INITIAL_VISIBLE && (
              <Button variant="outline" onClick={() => setShowAll((v) => !v)} aria-expanded={showAll}>
                {showAll ? "Згорнути відгуки" : `Переглянути всі відгуки (${REVIEWS_DATA.length})`}
              </Button>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
}
