import { Link } from "wouter";
import { BoxMark } from "@/components/layout/SiteHeader";
import { Button } from "@/components/ui/button";
import { SITE } from "@/data/content";

export function NotFoundPage() {
  return (
    <main className="grid min-h-dvh place-items-center px-6 text-center">
      <div className="max-w-md">
        <BoxMark className="mx-auto h-16 w-14" />
        <h1 className="mt-6 text-4xl">Сторінку не знайдено</h1>
        <p className="mt-4 text-velvet-secondary">
          Такої адреси на «{SITE.name}» немає. Перевірте посилання або поверніться до огляду.
        </p>
        <Button asChild className="mt-8">
          <Link href="/">Повернутися до огляду</Link>
        </Button>
      </div>
    </main>
  );
}
