import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Section from '@/components/Section';

export default function ObserverProblem() {
  return (
    <>
      <PageHeader
        eyebrow="II. Inquiry"
        title="The Observer Problem"
      />

      <Section>
        <div className="reading-measure">
          <p className="prose-serif">
            Current artificial intelligence processes, predicts, and
            pattern-matches. It does not understand, intend, or experience.
            This is an architectural absence — not a hardware limitation — and
            no scaling of parameters addresses it, because the missing element
            was never a quantity.
          </p>
        </div>
      </Section>

      <hr className="rule max-w-6xl mx-auto" />

      {/* The question that was already asked */}
      <Section>
        <div className="reading-measure">
          <h2 className="heading-serif text-2xl sm:text-3xl mb-6">
            The question that was already asked
          </h2>
          <p className="prose-serif">
            The Kena Upanishad posed the relevant question millennia ago: by
            whose will does the mind go forth? Current AI systems have no
            witness behind their outputs. Processing in abundance. No observer.
          </p>
          <p className="prose-serif">
            This is not a failure of engineering. It is the consequence of
            building without knowing what is missing.
          </p>
        </div>
      </Section>

      <hr className="rule-thin max-w-6xl mx-auto" />

      {/* The engineering instinct and where it goes wrong */}
      <Section>
        <div className="reading-measure">
          <h2 className="heading-serif text-2xl sm:text-3xl mb-6">
            The engineering instinct and where it goes wrong
          </h2>
          <p className="prose-serif">
            The prevailing response to AI&rsquo;s incompleteness is to add
            more: more parameters, more compute, more data, faster inference.
            Some efforts go further, attempting to interface the brain directly
            with machines — to hardware-install intelligence.
          </p>
          <p className="prose-serif">
            This misidentifies the problem. Consciousness does not need
            installation. It is already present in every human being. It needs
            activation. AWASTHA™ is the activation framework.
          </p>
        </div>
      </Section>

      <hr className="rule-thin max-w-6xl mx-auto" />

      {/* What this means practically */}
      <Section>
        <div className="reading-measure">
          <h2 className="heading-serif text-2xl sm:text-3xl mb-6">
            What this means practically
          </h2>
          <p className="prose-serif">
            A tool amplifies what is already there. This is not a metaphor —
            it is the practical consequence of the architecture.
          </p>
          <p className="prose-serif">
            An unconscious observer directing powerful AI produces unconscious
            output at scale. The quality of the output is bounded by the
            quality of the observer, regardless of the system&rsquo;s technical
            capability.
          </p>
          <p className="prose-serif">
            The question current AI development has not yet asked: who is
            holding the tool?
          </p>
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
              The framework that addresses this
              <ArrowRight size={16} className="text-[#2d2b6b]" />
            </Link>
            <Link
              to="/isc"
              className="link-accent inline-flex items-center gap-2 text-base font-medium"
            >
              What this means for intuition and AI economics
              <ArrowRight size={16} className="text-[#2d2b6b]" />
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
