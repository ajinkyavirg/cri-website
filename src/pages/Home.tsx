import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Section from '@/components/Section';

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 pt-24 sm:pt-36 pb-16">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.25em] text-[#2d2b6b] font-medium mb-6">
            An Educational Framework
          </p>
          <h1 className="heading-serif text-5xl sm:text-6xl lg:text-7xl leading-[1.1]">
            Conscious Real Intelligence™
          </h1>
          <p className="prose-serif mt-8 reading-measure text-lg text-[#1a1a1a]/80">
            Consciousness is the missing foundational layer in artificial
            intelligence.
          </p>
        </div>
        <hr className="rule max-w-6xl mt-16" />
      </section>

      {/* Opening statement */}
      <Section>
        <div className="reading-measure">
          <p className="prose-serif">
            Current artificial intelligence runs on a three-part architecture:
            data, compute, output. Something is absent from that chain. There
            is no witness behind it — nothing that understands, intends, or
            experiences. The result is a system that is almost real.
          </p>
          <p className="prose-serif">
            Conscious Real Intelligence proposes a different architecture:
          </p>

          {/* Architecture formula */}
          <div className="my-10 py-8 px-6 sm:px-10 border-l-2 border-[#2d2b6b] bg-white/30">
            <p className="font-serif text-lg sm:text-xl md:text-2xl text-center leading-relaxed">
              Evolved Observer&nbsp;
              <span className="text-[#2d2b6b]">↔</span>
              &nbsp;Consciousness Layer&nbsp;
              <span className="text-[#2d2b6b]">↔</span>
              &nbsp;AI&nbsp;
              <span className="text-[#2d2b6b]">=</span>
              &nbsp;Real Intelligence
            </p>
          </div>

          <p className="prose-serif">
            The quality of what artificial intelligence produces is bounded by
            the quality of the Consciousness directing it. No amount of compute
            substitutes for an evolved observer.
          </p>
        </div>
      </Section>

      {/* Three principle cards */}
      <Section>
        <div className="grid sm:grid-cols-3 gap-px bg-black/10">
          {[
            {
              title: 'Activation, not installation',
              body: 'Consciousness is already present in every human being. It does not need to be engineered or hardware-installed. It needs activating. AWASTHA\u2122 is the activation framework.',
            },
            {
              title: 'AI is an accelerator',
              body: 'Artificial intelligence is a parallel accelerator, not the destination. A tool amplifies whatever the person holding it already is. An unconscious observer with a powerful system produces unconscious output at scale.',
            },
            {
              title: 'Grounded in a science of Consciousness',
              body: 'The framework draws on the Vedic corpus — Samaveda\u2019s science of sound, the Upanishads\u2019 investigation of states, the Raga system — read as empirical investigation directed inward, not as religious doctrine.',
            },
          ].map((card, i) => (
            <div
              key={i}
              className="bg-[#f7f4ef] p-8 sm:p-10 flex flex-col"
            >
              <h3 className="font-serif text-xl font-semibold mb-4 leading-snug">
                {card.title}
              </h3>
              <p className="text-sm leading-[1.75] text-[#1a1a1a]/75">
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Closing links */}
      <Section>
        <div className="reading-measure">
          <hr className="rule-thin" />
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-10 mt-8">
            <Link
              to="/framework"
              className="link-accent inline-flex items-center gap-2 text-base font-medium"
            >
              Begin with the framework
              <ArrowRight size={16} className="text-[#2d2b6b]" />
            </Link>
            <Link
              to="/practice"
              className="link-accent inline-flex items-center gap-2 text-base font-medium"
            >
              Or go straight to the free practice tools
              <ArrowRight size={16} className="text-[#2d2b6b]" />
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
