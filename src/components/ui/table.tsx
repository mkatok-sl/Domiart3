import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

function Table({ className, wrapperClassName, ...props }: ComponentProps<"table"> & { wrapperClassName?: string }) {
  return (
    <div
      data-slot="table-container"
      className={cn("scrollbar-thin relative w-full overflow-x-auto rounded-lg border border-velvet-border bg-velvet-surface", wrapperClassName)}
      tabIndex={0}
    >
      <table data-slot="table" className={cn("w-full caption-bottom font-ui text-sm", className)} {...props} />
    </div>
  );
}

function TableHeader({ className, ...props }: ComponentProps<"thead">) {
  return <thead data-slot="table-header" className={cn("bg-velvet-elevated/60 [&_tr]:border-b", className)} {...props} />;
}

function TableBody({ className, ...props }: ComponentProps<"tbody">) {
  return <tbody data-slot="table-body" className={cn("[&_tr:last-child]:border-0", className)} {...props} />;
}

function TableRow({ className, ...props }: ComponentProps<"tr">) {
  return (
    <tr
      data-slot="table-row"
      className={cn("border-b border-velvet-border/80 transition-colors hover:bg-velvet-hover/40", className)}
      {...props}
    />
  );
}

function TableHead({ className, ...props }: ComponentProps<"th">) {
  return (
    <th
      data-slot="table-head"
      className={cn("h-11 whitespace-nowrap px-4 text-left align-middle text-xs font-semibold text-velvet-secondary", className)}
      {...props}
    />
  );
}

function TableCell({ className, ...props }: ComponentProps<"td">) {
  return (
    <td data-slot="table-cell" className={cn("whitespace-nowrap px-4 py-3.5 align-middle text-rose-white", className)} {...props} />
  );
}

function TableCaption({ className, ...props }: ComponentProps<"caption">) {
  return (
    <caption data-slot="table-caption" className={cn("px-4 py-3 text-left text-xs leading-relaxed text-velvet-muted", className)} {...props} />
  );
}

export { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow };
