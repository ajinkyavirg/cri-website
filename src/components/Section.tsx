import type { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  id?: string;
}

export default function Section({ children, id }: SectionProps) {
  return (
    <section id={id} className="max-w-6xl mx-auto px-5 sm:px-8 py-12 sm:py-16">
      {children}
    </section>
  );
}
