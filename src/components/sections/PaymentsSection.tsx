import { Check, Minus } from "lucide-react";
import { Note, Paragraph, Section, StepList, SubHeading } from "@/components/Section";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { PAYMENTS } from "@/data/content";
import { formatUAH } from "@/lib/utils";

function YesNo({ value, label }: { value: boolean; label: string }) {
  return value ? (
    <span className="inline-flex items-center gap-1.5 text-sage">
      <Check className="size-4" strokeWidth={2} aria-hidden />
      <span className="sr-only">{label}: так</span>
    </span>
  ) : (
    <span className="inline-flex items-center gap-1.5 text-velvet-muted">
      <Minus className="size-4" strokeWidth={2} aria-hidden />
      <span className="sr-only">{label}: ні</span>
    </span>
  );
}

function TaxExample() {
  const win = PAYMENTS.taxExample;
  const pdfo = win * 0.18;
  const military = win * 0.05;
  const rows = [
    { label: "Виграш до виплати", value: formatUAH(win) },
    { label: "ПДФО, 18%", value: `− ${formatUAH(pdfo)}` },
    { label: "Військовий збір, 5%", value: `− ${formatUAH(military)}` },
  ];
  return (
    <figure className="max-w-md rounded-lg border border-velvet-border bg-velvet-surface">
      <figcaption className="border-b border-velvet-border px-5 py-3 font-ui text-xs text-velvet-secondary">
        Скільки надійде на картку
      </figcaption>
      <dl className="divide-y divide-velvet-border/70 font-ui text-sm">
        {rows.map((r) => (
          <div key={r.label} className="flex items-baseline justify-between gap-4 px-5 py-3">
            <dt className="text-velvet-secondary">{r.label}</dt>
            <dd className="text-rose-white tabular">{r.value}</dd>
          </div>
        ))}
        <div className="flex items-baseline justify-between gap-4 px-5 py-3">
          <dt className="font-semibold text-rose-white">На картку</dt>
          <dd className="font-semibold text-rose-gold tabular">{formatUAH(win - pdfo - military)}</dd>
        </div>
      </dl>
    </figure>
  );
}

export function PaymentsSection() {
  return (
    <Section id="payments">
      <Paragraph text={PAYMENTS.intro} />

      <div className="grid gap-10 xl:grid-cols-2">
        <div className="space-y-5">
          <SubHeading>Як поповнити рахунок</SubHeading>
          <StepList items={PAYMENTS.depositSteps} />
          <Note text={PAYMENTS.depositNote} />
        </div>
        <div className="space-y-5">
          <SubHeading>Як вивести виграш</SubHeading>
          <StepList items={PAYMENTS.withdrawalSteps} />
          <Note text={PAYMENTS.withdrawalNote} />
        </div>
      </div>

      <SubHeading>Платіжні методи: порівняння</SubHeading>
      <Table>
        <TableCaption>
          {PAYMENTS.footnotes.map((f) => (
            <span key={f} className="block">
              {f}
            </span>
          ))}
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead scope="col">Метод</TableHead>
            <TableHead scope="col">Депозит</TableHead>
            <TableHead scope="col">Виведення</TableHead>
            <TableHead scope="col">Мін. депозит</TableHead>
            <TableHead scope="col">Мін. виведення</TableHead>
            <TableHead scope="col">Макс. за операцію</TableHead>
            <TableHead scope="col">Строк виведення</TableHead>
            <TableHead scope="col">Комісія</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {PAYMENTS.methods.map((m) => (
            <TableRow key={m.name}>
              <TableHead scope="row" className="text-sm font-semibold text-rose-white">
                {m.name}
              </TableHead>
              <TableCell>
                <YesNo value={m.deposit} label="Депозит" />
              </TableCell>
              <TableCell>
                <YesNo value={m.withdrawal} label="Виведення" />
              </TableCell>
              <TableCell className="tabular">{m.minDeposit}</TableCell>
              <TableCell className="tabular">{m.minWithdrawal}</TableCell>
              <TableCell className="tabular">{m.max}</TableCell>
              <TableCell>{m.speed}</TableCell>
              <TableCell className="tabular">{m.fee}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <SubHeading>Податок і комісія на виграш</SubHeading>
      <Paragraph text={PAYMENTS.taxText} />
      <TaxExample />
      <Paragraph text={PAYMENTS.feeText} />
    </Section>
  );
}
