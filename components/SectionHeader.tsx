interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left',
  className = '',
}: SectionHeaderProps) {
  const alignment = align === 'center' ? 'text-center mx-auto' : '';
  return (
    <div className={`max-w-2xl ${alignment} ${className}`}>
      {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
      <h2 className="font-display text-display-md text-ink md:text-display-md">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-body-lg text-text-mid">{description}</p>
      )}
    </div>
  );
}
