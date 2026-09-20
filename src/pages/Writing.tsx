import PageHeader from '@/components/PageHeader';
import Section from '@/components/Section';

export default function Writing() {
  const entries = [
    { title: 'Placeholder Essay Title', date: '—', excerpt: 'Placeholder excerpt for the first essay.' },
    { title: 'Placeholder Essay Title', date: '—', excerpt: 'Placeholder excerpt for the second essay.' },
    { title: 'Placeholder Essay Title', date: '—', excerpt: 'Placeholder excerpt for the third essay.' },
  ];

  return (
    <>
      <PageHeader
        eyebrow="VI. Exposition"
        title="Writing"
        subtitle="Essays, notes, and longer-form exposition on the framework and its adjacent questions."
      />

      <Section>
        <div className="reading-measure">
          <ul className="divide-y divide-black/10">
            {entries.map((entry, i) => (
              <li key={i} className="py-8 first:pt-0 last:pb-0">
                <p className="text-xs text-[#1a1a1a]/50 mb-2">{entry.date}</p>
                <h2 className="font-serif text-2xl font-semibold mb-3">
                  {entry.title}
                </h2>
                <p className="prose-serif text-[#1a1a1a]/80">
                  {entry.excerpt}
                </p>
              </li>
            ))}
          </ul>

          <div className="boundary-callout">
            <p>
              Honest boundary note: placeholder. The actual boundary note for
              this page will be provided separately.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
