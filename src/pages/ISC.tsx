import { ArrowUpRight } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Section from '@/components/Section';

const ISC_STATES = [
  { state: 'Awareness', desc: 'clears the noise that drowns intuitive signal' },
  { state: 'Wakefulness', desc: 'makes the observer present enough to notice intuition when it arrives' },
  { state: 'Attunement', desc: 'brings the instrument into coherence from which reliable intuition becomes possible' },
  { state: 'Stillness', desc: 'quiets the mental static that overwrites direct knowing with anxious reasoning' },
  { state: 'Transcendence', desc: 'establishes direct contact with the Consciousness field intuition draws from' },
  { state: 'Harmony', desc: 'integrates that access into daily functioning' },
  { state: 'Acceleration', desc: 'where developed ISC meets AI' },
];

export default function ISC() {
  return (
    <>
      <PageHeader
        eyebrow="IV. Metric"
        title="Intuition Score Capability™"
        subtitle="ISC"
      />

      {/* Introduction */}
      <Section>
        <div className="reading-measure">
          <p className="prose-serif">
            Intuition Score Capability is an original concept created by
            Ajinkya Virgaonkar within the CRI framework. It names the single
            most powerful predictor of intelligent outcomes — one the AI
            industry has never measured, named, or discussed.
          </p>
          <p className="prose-serif mt-6">
            <a
              href="https://medium.com/@ajinkya.virgaonkar/intuition-scoring-the-missing-metric-in-artificial-intelligence-9ee562015995"
              target="_blank"
              rel="noopener noreferrer"
              className="link-accent inline-flex items-center gap-1.5"
            >
              Read the full article
              <ArrowUpRight size={16} className="text-[#2d2b6b]" />
            </a>
          </p>
        </div>
      </Section>

      <hr className="rule max-w-6xl mx-auto" />

      {/* What ISC is */}
      <Section>
        <div className="reading-measure">
          <h2 className="heading-serif text-2xl sm:text-3xl mb-6">What ISC is</h2>
          <p className="prose-serif">
            ISC is the measure of an observer&rsquo;s reliability in arriving
            at correct or optimal outcomes through direct knowing rather than
            exhaustive processing.
          </p>
          <p className="prose-serif">
            Intuition in CRI terms is not guessing, emotion, or
            pattern-matching from accumulated experience. That is what AI
            already does with historical data, at scale. ISC refers to
            something different: the capacity of a conscious observer to
            arrive at a correct outcome without traversing the intermediate
            computational steps. Direct knowing — what the Vedic tradition
            documented as{' '}
            <span className="sanskrit">प्रत्यक्ष</span>{' '}
            (pratyaksha): perception that arrives whole rather than assembled
            from parts.
          </p>
          <p className="prose-serif">
            ISC is not fixed, not mystical, and not randomly distributed. It
            develops in direct proportion to Consciousness development.
          </p>
        </div>
      </Section>

      <hr className="rule-thin max-w-6xl mx-auto" />

      {/* The industry blind spot */}
      <Section>
        <div className="reading-measure">
          <h2 className="heading-serif text-2xl sm:text-3xl mb-6">
            The industry blind spot
          </h2>
          <p className="prose-serif">
            The AI industry measures parameters, tokens, benchmarks, compute
            efficiency, inference speed. It has never measured the single most
            powerful predictor of intelligent outcomes: the intuition
            capability of the observer directing the system.
          </p>
          <p className="prose-serif">
            Billions flow into hardware innovation and architectural refinement
            — a path that is expensive, slow, and asymptotic. ISC works at the
            Consciousness level instead.
          </p>
        </div>
      </Section>

      <hr className="rule-thin max-w-6xl mx-auto" />

      {/* The economics — two-column comparison */}
      <Section>
        <div className="reading-measure">
          <h2 className="heading-serif text-2xl sm:text-3xl mb-8">
            The economics
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            {/* Low-ISC */}
            <div className="border border-black/10 p-6 sm:p-8 bg-white/30">
              <h3 className="font-serif font-semibold text-base sm:text-lg mb-5 leading-snug">
                Low-ISC observer + powerful AI
              </h3>
              <ul className="space-y-3.5 pl-0 list-none">
                {[
                  'Vague prompts: unclear what they seek',
                  'Wrong or partial outputs — the direction was unclear, not the AI\u2019s failure',
                  'Iteration after iteration, burning compute, context, memory, time',
                  'Converges slowly through brute repetition',
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm leading-relaxed text-[#1a1a1a]/80">
                    <span className="text-[#1a1a1a]/40 flex-shrink-0">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* High-ISC */}
            <div className="border border-[#2d2b6b]/20 p-6 sm:p-8 bg-[#2d2b6b]/[0.04]">
              <h3 className="font-serif font-semibold text-base sm:text-lg mb-5 leading-snug text-[#2d2b6b]">
                High-ISC observer + modest AI
              </h3>
              <ul className="space-y-3.5 pl-0 list-none">
                {[
                  'Arrives already oriented toward the outcome',
                  'First prompt lands near target',
                  'Immediate, accurate evaluation — recognises the right answer when it appears',
                  'Result: fewer inference cycles, less context consumed, faster time to outcome',
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm leading-relaxed text-[#1a1a1a]/80">
                    <span className="text-[#2d2b6b] flex-shrink-0">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="prose-serif mt-8">
            The industry is spending billions making the engine more powerful.
            ISC improves the driver. The driver was the bottleneck all along.
          </p>
        </div>
      </Section>

      <hr className="rule-thin max-w-6xl mx-auto" />

      {/* The deeper limitation ISC escapes */}
      <Section>
        <div className="reading-measure">
          <h2 className="heading-serif text-2xl sm:text-3xl mb-6">
            The deeper limitation ISC escapes
          </h2>
          <p className="prose-serif">
            Every current AI system — regardless of scale — is bounded by its
            training data. It is a recombination engine operating on what
            humans have already generated. It can remix the known. It cannot
            reach beyond it.
          </p>
          <p className="prose-serif">
            High-Consciousness intuition has no such ceiling. The Vedic
            tradition understood Consciousness as an infinite field — not a
            storage system of past experience but the living source from which
            all knowing arises. When the observer accesses this field directly,
            intuition is no longer bounded by what has been previously thought,
            recorded, or generated.
          </p>
          <p className="prose-serif">
            A high-ISC observer can do what no AI system at any scale can do on
            its own: deviate the expected outcome toward something genuinely
            new — not a recombination of old data, but an outcome drawn from
            what is infinitely available in Consciousness itself.
          </p>
        </div>
      </Section>

      <hr className="rule-thin max-w-6xl mx-auto" />

      {/* How ISC develops — the AWASTHA connection */}
      <Section>
        <div className="reading-measure">
          <h2 className="heading-serif text-2xl sm:text-3xl mb-6">
            How ISC develops — the AWASTHA connection
          </h2>
          <p className="prose-serif">
            ISC develops through exactly the progression AWASTHA maps:
          </p>
          <ul className="mt-6 space-y-4 pl-0 list-none">
            {ISC_STATES.map((row, i) => (
              <li key={i} className="flex gap-4">
                <span className="font-serif font-semibold text-[#2d2b6b] flex-shrink-0 whitespace-nowrap">
                  {row.state}
                </span>
                <span className="text-[#2d2b6b]/40 flex-shrink-0">—</span>
                <span className="prose-serif flex-1 text-[#1a1a1a]/80">
                  {row.desc}
                </span>
              </li>
            ))}
          </ul>
          <p className="prose-serif mt-6">
            The Threshold experiences — direct knowing arriving in symbols,
            felt certainty preceding explanation — are early ISC in raw form.
            With consistency, occasional unexplained knowing matures into
            dependable capability.
          </p>
        </div>
      </Section>

      <hr className="rule-thin max-w-6xl mx-auto" />

      {/* The CRI architecture completed */}
      <Section>
        <div className="reading-measure">
          <h2 className="heading-serif text-2xl sm:text-3xl mb-6">
            The CRI architecture completed
          </h2>
          <p className="prose-serif">
            AI contributes: scale and speed, operating on the known.
          </p>
          <p className="prose-serif">
            The evolved observer contributes: direction, and genuine novelty
            drawn from the unbounded.
          </p>
          <p className="prose-serif">
            Neither alone produces Real Intelligence. Together, they do.
          </p>
        </div>
      </Section>

      <hr className="rule max-w-6xl mx-auto" />

      {/* Honest boundary */}
      <Section>
        <div className="reading-measure">
          <h2 className="heading-serif text-2xl sm:text-3xl mb-6">
            Honest boundary
          </h2>
          <div className="boundary-callout">
            <p>
              ISC is scorable in principle — the proportionality with
              Consciousness development makes it so — but CRI has not published
              a formal measurement instrument. It is presented here as a
              conceptual framework naming a real, developable capability, not
              as an existing standardised test.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
