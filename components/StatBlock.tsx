interface StatBlockProps {
  value: string;
  label: string;
}

// Stat with a left border that automatically disappears on the first item in any row.
// On mobile (1-col): no border. On tablet+: border on all but first column items.
export default function StatBlock({ value, label }: StatBlockProps) {
  return (
    <div className="md:border-l md:border-line md:pl-6 [&:first-child]:md:border-l-0 [&:first-child]:md:pl-0">
      <p className="font-display text-display-md text-ink tabular">{value}</p>
      <p className="mt-2 text-caption text-text-mid">{label}</p>
    </div>
  );
}
