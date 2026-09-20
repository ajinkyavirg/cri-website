interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}

export default function PageHeader({ eyebrow, title, subtitle }: PageHeaderProps) {
  return (
    <header className="max-w-6xl mx-auto px-5 sm:px-8 pt-20 sm:pt-28 pb-12">
      {eyebrow && (
        <p className="text-xs uppercase tracking-[0.2em] text-[#2d2b6b] font-medium mb-5">
          {eyebrow}
        </p>
      )}
      <h1 className="heading-serif text-4xl sm:text-5xl lg:text-6xl max-w-4xl">
        {title}
      </h1>
      {subtitle && (
        <p className="prose-serif mt-6 reading-measure text-[#1a1a1a]/70 text-lg">
          {subtitle}
        </p>
      )}
      <hr className="rule mt-10" />
    </header>
  );
}
