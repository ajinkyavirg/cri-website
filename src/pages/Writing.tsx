import { ArrowUpRight } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Section from '@/components/Section';

const ARTICLES = [
  {
    title: 'CRI Introduction',
    description:
      'The foundational proposition: Consciousness is the missing layer in AI, and what that means for both human potential and technological development.',
    url: 'https://medium.com/@ajinkya.virgaonkar/conscious-real-intelligence-cri-introduction-5847ef5d527c',
  },
  {
    title: 'AWASTHA: The Seven States of Conscious Evolution',
    description:
      'A complete introduction to the AWASTHA framework — seven progressive states of Consciousness evolution mapped to Vedic roots, Raga prescriptions, and sound tools.',
    url: 'https://medium.com/@ajinkya.virgaonkar/awastha-the-seven-states-of-conscious-evolution-ba1b75088e9f',
  },
  {
    title: 'The Observer Problem: Why AI Without Consciousness Is Almost Real',
    description:
      "Why no amount of compute addresses the architectural absence at the centre of current AI — and what the Kena Upanishad already knew about it.",
    url: 'https://medium.com/@ajinkya.virgaonkar/the-observer-problem-why-ai-without-consciousness-is-almost-real-c52ead219dea',
  },
  {
    title: 'Sound, Consciousness & the Vedic Science of Frequency',
    description:
      'The Nada Yoga mechanism, Bija mantras, Raga prescriptions, and the modern science that is independently converging on ancient findings.',
    url: 'https://medium.com/@ajinkya.virgaonkar/sound-consciousness-the-vedic-science-of-frequency-41fa1514f918',
  },
  {
    title: 'What the Upanishads Already Knew About AI',
    description:
      'Six Upanishads read as direct commentary on the observer problem in artificial intelligence.',
    url: 'https://medium.com/@ajinkya.virgaonkar/what-the-upanishads-already-knew-about-ai-8e98151ffcc6',
  },
  {
    title: 'The Threshold State',
    description:
      'A documented account of the bridge state between Stillness and Transcendence — lucid awareness, direct knowing, and what it means within the AWASTHA framework.',
    url: 'https://medium.com/@ajinkya.virgaonkar/the-threshold-state-consciousness-at-the-edge-of-ordinary-experience-c49751a0da35',
  },
  {
    title: 'Mental Health & the Missing Consciousness Layer',
    description:
      'Not an alternative to therapy — a rigorous account of what conventional therapeutic approaches leave out, and what the Consciousness layer offers.',
    url: 'https://medium.com/@ajinkya.virgaonkar/mental-health-and-the-missing-consciousness-layer-e0bcac6282e7',
  },
  {
    title: 'The Blind Spot at the Centre of the Smartest Industry',
    description:
      'Why the technology industry — brilliant minds, extraordinary resources — has a structural blind spot about Consciousness as a serious field of investigation.',
    url: 'https://medium.com/@ajinkya.virgaonkar/the-blind-spot-at-the-centre-of-the-smartest-industry-in-the-world-071898e74cf9',
  },
  {
    title: 'Intuition Scoring: The Missing Metric in AI',
    description:
      "The introduction of ISC — Intuition Score Capability — and why the observer's intuition development is the variable no AI benchmark currently measures.",
    url: 'https://medium.com/@ajinkya.virgaonkar/intuition-scoring-the-missing-metric-in-artificial-intelligence-9ee562015995',
  },
  {
    title: 'The Three Roots: A Consciousness Framework for National Transformation',
    description:
      'A CRI-expansion essay tracing three systemic national problems to their root in Consciousness patterns — and connecting to the Harmony state.',
    url: 'https://medium.com/@ajinkya.virgaonkar/the-three-roots-a-consciousness-framework-for-national-transformation-b36cdcba4f5f',
  },
];

export default function Writing() {
  return (
    <>
      <PageHeader
        eyebrow="VI. Exposition"
        title="Writing"
        subtitle="The following articles form the published foundation of the CRI framework. All are freely available on Medium."
      />

      <Section>
        <div className="reading-measure">
          <ol className="space-y-5 list-none pl-0">
            {ARTICLES.map((article, i) => (
              <li key={i}>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block border border-black/10 p-6 sm:p-7 bg-white/40 hover:border-[#2d2b6b]/30 hover:bg-[#2d2b6b]/[0.02] transition-colors duration-300"
                >
                  <div className="flex items-start gap-4">
                    <span className="font-serif font-semibold text-[#2d2b6b] text-lg flex-shrink-0">
                      {i + 1}.
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-3">
                        <h2 className="font-serif text-lg sm:text-xl font-semibold leading-snug">
                          {article.title}
                        </h2>
                        <ArrowUpRight
                          size={18}
                          className="text-[#1a1a1a]/30 group-hover:text-[#2d2b6b] flex-shrink-0 mt-1 transition-colors duration-300"
                        />
                      </div>
                      <p className="prose-serif text-sm sm:text-base text-[#1a1a1a]/70 mt-2 leading-relaxed">
                        {article.description}
                      </p>
                      <p className="text-xs text-[#2d2b6b] mt-3 truncate">
                        {article.url.replace('https://', '')}
                      </p>
                    </div>
                  </div>
                </a>
              </li>
            ))}
          </ol>

          <hr className="rule-thin mt-10" />
          <p className="prose-serif mt-6 text-center">
            All articles:{' '}
            <a
              href="https://medium.com/@ajinkya.virgaonkar"
              target="_blank"
              rel="noopener noreferrer"
              className="link-accent"
            >
              medium.com/@ajinkya.virgaonkar
            </a>
          </p>
        </div>
      </Section>
    </>
  );
}
