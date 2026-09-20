import PageHeader from '@/components/PageHeader';
import Section from '@/components/Section';

export default function ISC() {
  return (
    <>
      <PageHeader
        eyebrow="IV. Metric"
        title="Intuition Score Capability"
        subtitle="A proposed metric for the faculty of direct knowing — its structure, derivation, and limitations."
      />

      <Section>
        <div className="reading-measure">
          <p className="prose-serif">
            Placeholder text for the Intuition Score Capability (ISC). This
            section will present the proposed metric, its rationale, and the
            manner of its derivation.
          </p>

          <h2 className="heading-serif text-2xl sm:text-3xl mt-12 mb-4">
            Structure of the Score
          </h2>
          <p className="prose-serif">
            Placeholder for the components and weighting of the score.
          </p>

          {/* AWASTHA table — stacks to cards on mobile */}
          <h2 className="heading-serif text-2xl sm:text-3xl mt-16 mb-6">
            AWASTHA Reference Table
          </h2>

          {/* Desktop table */}
          <div className="hidden sm:block overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-[#2d2b6b]/30">
                  <th className="text-left py-3 pr-4 font-semibold">Stage</th>
                  <th className="text-left py-3 pr-4 font-semibold">Designation</th>
                  <th className="text-left py-3 font-semibold">Description</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { stage: '1', name: 'Placeholder', desc: 'Placeholder description for stage one.' },
                  { stage: '2', name: 'Placeholder', desc: 'Placeholder description for stage two.' },
                  { stage: '3', name: 'Placeholder', desc: 'Placeholder description for stage three.' },
                ].map((row) => (
                  <tr key={row.stage} className="border-b border-black/10">
                    <td className="py-4 pr-4 font-serif font-semibold">{row.stage}</td>
                    <td className="py-4 pr-4">{row.name}</td>
                    <td className="py-4 text-[#1a1a1a]/75 leading-relaxed">{row.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile stacked cards */}
          <div className="sm:hidden space-y-4">
            {[
              { stage: '1', name: 'Placeholder', desc: 'Placeholder description for stage one.' },
              { stage: '2', name: 'Placeholder', desc: 'Placeholder description for stage two.' },
              { stage: '3', name: 'Placeholder', desc: 'Placeholder description for stage three.' },
            ].map((row) => (
              <div key={row.stage} className="border border-black/10 p-5 bg-white/40">
                <p className="text-xs text-[#2d2b6b] font-medium mb-2">Stage {row.stage}</p>
                <p className="font-serif font-semibold mb-2">{row.name}</p>
                <p className="text-sm text-[#1a1a1a]/75 leading-relaxed">{row.desc}</p>
              </div>
            ))}
          </div>

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
